import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header, Footer } from "../../../components/home";
import { PortfolioDetailPage } from "../../../components/portfolio/PortfolioPages";
import { getPortfolioProjects, getProjectBySlug, getRelatedProjects } from "../../../lib/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getPortfolioProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | The Felyx Grid",
    };
  }

  return {
    title: `${project.name} | The Felyx Grid`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project.slug, 8);

  return (
    <>
      <Header contactHref="/contact#contact-form" hrefPrefix="/" startHref="/contact#contact-form" />
      <PortfolioDetailPage project={project} relatedProjects={relatedProjects} />
      <Footer hrefPrefix="/" />
    </>
  );
}
