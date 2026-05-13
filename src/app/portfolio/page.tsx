import type { Metadata } from "next";

import { Header, Footer } from "../../components/home";
import { PortfolioIndexPage } from "../../components/portfolio/PortfolioPages";
import { getPortfolioProjects } from "../../lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | The Felyx Grid",
  description:
    "Explore websites, platforms, marketplaces, and product interfaces by The Felyx Grid.",
};

export default async function Portfolio() {
  const projects = await getPortfolioProjects();

  return (
    <>
      <Header contactHref="/contact#contact-form" hrefPrefix="/" startHref="/contact#contact-form" />
      <PortfolioIndexPage projects={projects} />
      <Footer hrefPrefix="/" />
    </>
  );
}
