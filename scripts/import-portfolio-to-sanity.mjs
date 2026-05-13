import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

function loadDotEnv() {
  const envPath = path.join(rootDir, ".env");

  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=").trim().replace(/^['"]|['"]$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}. Add it to .env before running the import.`);
  }

  return value;
}

function imagePathToFile(imagePath) {
  const normalizedPath = imagePath.replace(/^\/+/, "");
  const filePath = path.join(rootDir, "public", normalizedPath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Image not found: ${filePath}`);
  }

  return filePath;
}

async function uploadImage(client, imagePath, title) {
  const filePath = imagePathToFile(imagePath);
  const stream = fs.createReadStream(filePath);
  const extension = path.extname(filePath).replace(".", "") || "png";
  const filename = `${title}-${path.basename(filePath)}`;

  const asset = await client.assets.upload("image", stream, {
    contentType: `image/${extension === "jpg" ? "jpeg" : extension}`,
    filename,
  });

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

async function importProjects() {
  loadDotEnv();

  const projectId = requireEnv("NEXT_PUBLIC_SANITY_PROJECT_ID");
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-13";
  const token = requireEnv("SANITY_API_WRITE_TOKEN");

  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    token,
    useCdn: false,
  });

  const jsonPath = path.join(rootDir, "src", "data", "portfolioData.json");
  const projects = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

  for (const project of projects) {
    console.log(`Importing ${project.name}...`);

    const mainImage = await uploadImage(client, project.image, project.slug);
    const galleryImages = [];

    for (const image of project.images.filter((item) => item !== project.image)) {
      galleryImages.push(await uploadImage(client, image, project.slug));
    }

    const documentId = `portfolioProject.${project.slug}`;
    const document = {
      _id: documentId,
      _type: "portfolioProject",
      title: project.name,
      slug: {
        _type: "slug",
        current: project.slug,
      },
      order: project.id,
      featured: project.id <= 3,
      tagline: project.tagline,
      category: project.category,
      mainImage,
      galleryImages,
      link: project.link,
      description: project.description,
      services: project.services,
      tech: project.tech,
      testimonial: project.testimonial,
      results: project.results,
    };

    await client.createOrReplace(document);
    console.log(`Imported ${project.name}`);
  }

  console.log(`Imported ${projects.length} portfolio projects into Sanity.`);
}

importProjects().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
