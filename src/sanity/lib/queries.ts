import { defineQuery } from "next-sanity";

export const portfolioProjectsQuery = defineQuery(`*[
  _type == "portfolioProject" &&
  defined(slug.current)
] | order(order asc, _createdAt asc) {
  _id,
  order,
  featured,
  title,
  "slug": slug.current,
  tagline,
  category,
  "image": mainImage.asset->url,
  "images": galleryImages[].asset->url,
  link,
  description,
  services,
  tech,
  testimonial,
  results
}`);
