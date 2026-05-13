import portfolioData from "../data/portfolioData.json";
import { hasSanityConfig } from "../sanity/env";
import { client } from "../sanity/lib/client";
import { portfolioProjectsQuery } from "../sanity/lib/queries";

export type PortfolioProject = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  images: string[];
  link: string;
  description: string;
  services: string[];
  tech: string[];
  testimonial: string | null;
  results: string | null;
  featured?: boolean;
};

export const portfolioProjects = portfolioData as PortfolioProject[];

type SanityPortfolioProject = {
  _id: string;
  order?: number;
  featured?: boolean;
  title?: string;
  slug?: string;
  tagline?: string;
  category?: string;
  image?: string;
  images?: string[];
  link?: string;
  description?: string;
  services?: string[];
  tech?: string[];
  testimonial?: string | null;
  results?: string | null;
};

function normalizeSanityProject(project: SanityPortfolioProject, index: number): PortfolioProject {
  const image = project.image || "";
  const galleryImages = [image, ...(project.images ?? [])].filter(Boolean);

  return {
    id: project.order ?? index + 1,
    slug: project.slug ?? project._id,
    name: project.title ?? "Untitled Project",
    tagline: project.tagline ?? "",
    category: project.category ?? "Project",
    image,
    images: Array.from(new Set(galleryImages)),
    link: project.link ?? "#",
    description: project.description ?? "",
    services: project.services ?? [],
    tech: project.tech ?? [],
    testimonial: project.testimonial ?? null,
    results: project.results ?? null,
    featured: project.featured ?? false,
  };
}

async function getSanityPortfolioProjects() {
  if (!hasSanityConfig) {
    return [];
  }

  try {
    const projects = await client.fetch<SanityPortfolioProject[]>(portfolioProjectsQuery);

    return projects.map(normalizeSanityProject).filter((project) => project.image);
  } catch (error) {
    console.warn("Falling back to local portfolio data because Sanity fetch failed.", error);
    return [];
  }
}

export async function getPortfolioProjects() {
  const sanityProjects = await getSanityPortfolioProjects();

  return sanityProjects.length ? sanityProjects : portfolioProjects;
}

export async function getFeaturedPortfolioProjects(count = 3) {
  const projects = await getPortfolioProjects();
  const featuredProjects = projects.filter((project) => project.featured);

  return (featuredProjects.length ? featuredProjects : projects).slice(0, count);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getPortfolioProjects();

  return projects.find((project) => project.slug === slug);
}

export async function getRelatedProjects(slug: string, count = 3) {
  const projects = await getPortfolioProjects();

  return projects.filter((project) => project.slug !== slug).slice(0, count);
}
