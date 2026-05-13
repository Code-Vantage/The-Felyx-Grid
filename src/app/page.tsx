import {
  AboutSection,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  ManifestoSection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  SocialSection,
} from "../components/home";
import { getFeaturedPortfolioProjects } from "../lib/portfolio";

export default async function Home() {
  const featuredProjects = await getFeaturedPortfolioProjects(3);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-cream">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ManifestoSection />
      <PortfolioSection projects={featuredProjects} />
      <ProcessSection />
      <SocialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
