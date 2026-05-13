import Image from "next/image";
import Link from "next/link";

import type { PortfolioProject } from "../../lib/portfolio";
import { ProjectGallery } from "./ProjectGallery";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-7 before:bg-brand before:content-['']">
      {children}
    </p>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex h-8 items-center rounded-full border border-cream/[0.12] bg-cream/[0.06] px-4 font-display text-[10px] uppercase tracking-[0.18em] text-cream/72">
      {children}
    </span>
  );
}

function ProjectImage({
  alt,
  className = "",
  fit = "cover",
  priority = false,
  src,
}: {
  alt: string;
  className?: string;
  fit?: "contain" | "cover";
  priority?: boolean;
  src: string;
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <Image
      alt={alt}
      className={`${fitClass} object-top transition duration-700 group-hover:scale-[1.02] ${className}`}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 50vw, 100vw"
      src={src}
    />
  );
}

function ProjectCard({
  featured = false,
  project,
}: {
  featured?: boolean;
  project: PortfolioProject;
}) {
  return (
    <Link
      className={`group grid overflow-hidden rounded-3xl border border-cream/[0.1] bg-[linear-gradient(151deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] shadow-[0_18px_60px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-brand/35 ${
        featured ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
      }`}
      href={`/portfolio/${project.slug}`}
    >
      <span
        className={`relative block overflow-hidden bg-[#100204] ${
          featured ? "min-h-[24rem] lg:min-h-[500px]" : "min-h-[17rem]"
        }`}
      >
        <ProjectImage
          alt={`${project.name} project preview`}
          className="brightness-[0.9] saturate-[0.92]"
          priority={featured}
          src={project.image}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(6,0,1,0.72)_100%)]" />
        <span className="absolute left-5 top-5">
          <Pill>{project.category}</Pill>
        </span>
      </span>

      <span className="flex min-h-[15rem] flex-col justify-between p-6 sm:p-7">
        <span className="flex items-start justify-between gap-6">
          <span className="font-display text-[11px] uppercase tracking-[0.26em] text-brand">
            {project.services[0] ?? "Digital Product"}
          </span>
          <span className="font-display text-[11px] tracking-[0.22em] text-cream/38">
            {String(project.id).padStart(2, "0")}
          </span>
        </span>

        <span>
          <span className="block text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[0.95] tracking-[-0.04em] text-cream">
            {project.name}
          </span>
          <span className="mt-4 block max-w-2xl text-base leading-7 text-cream/68">
            {project.tagline}
          </span>
          <span className="mt-6 inline-flex h-10 w-fit items-center rounded-full bg-brand px-5 font-display text-[10px] uppercase tracking-[0.18em] text-cream shadow-[0_10px_30px_rgba(195,0,2,0.22)]">
            Case study
          </span>
        </span>
      </span>
    </Link>
  );
}

export function PortfolioIndexPage({ projects }: { projects: PortfolioProject[] }) {
  const [featured, ...remainingProjects] = projects;

  return (
    <main className="relative overflow-hidden bg-background text-cream">
      <div className="pointer-events-none absolute left-[calc(50%-44rem)] top-32 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.22),rgba(195,0,2,0.05)_52%,transparent_80%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-18rem] top-[34rem] size-[52rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.18),rgba(195,0,2,0.04)_50%,transparent_80%)] blur-3xl" />

      <section className="relative z-[1] mx-auto max-w-[1120px] px-5 pb-14 pt-36 sm:px-8 lg:pb-20 lg:pt-44">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h1 className="mt-6 max-w-[620px] text-[clamp(2.6rem,6vw,4.7rem)] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-cream">
              Selected work
            </h1>
          </div>
          <p className="max-w-md text-base leading-7 text-cream/62 lg:text-lg lg:leading-8">
            Recent websites, platforms, and product experiences built for real clients.
          </p>
        </div>
      </section>

      <section className="relative z-[1] mx-auto max-w-[1280px] px-5 pb-28 sm:px-8 lg:pb-36">
        {featured ? <ProjectCard featured project={featured} /> : null}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <path
      d="M9 5.75h10a3.25 3.25 0 0 1 3.25 3.25v6A3.25 3.25 0 0 1 19 18.25H9A3.25 3.25 0 0 1 5.75 15V9A3.25 3.25 0 0 1 9 5.75Zm0 0 2.5 12.5m7-12.5-2.5 12.5"
      key="visual"
    />,
    <path d="M13 3 6 13h6l-1 8 7-10h-6l1-8Z" key="speed" />,
    <path
      d="M12 3.75 5.75 6.5v4.7c0 4.15 2.62 7.85 6.25 9.05 3.63-1.2 6.25-4.9 6.25-9.05V6.5L12 3.75Z"
      key="security"
    />,
    <path
      d="M6 17.5V11m6 6.5V6.5m6 11V9m-13.25 10.75h14.5"
      key="data"
    />,
  ];

  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.45"
      viewBox="0 0 24 24"
    >
      {icons[index % icons.length]}
    </svg>
  );
}

const featureCards = [
  {
    title: "Clear User Flows",
    description: "Page structures and interface flows designed around common user tasks.",
  },
  {
    title: "Responsive Performance",
    description: "Layouts and assets prepared for fast loading across screen sizes.",
  },
  {
    title: "Maintainable Build",
    description: "Code and content structure organized for future updates.",
  },
  {
    title: "Goal-Focused Pages",
    description: "Calls to action and content hierarchy aligned with project goals.",
  },
];

function getOverviewCopy(project: PortfolioProject) {
  const sentences =
    project.description.match(/[^.!?]+[.!?]+/g)?.map((sentence) => sentence.trim()) ?? [
      project.description,
    ];
  const first = sentences.slice(0, 2).join(" ").trim();
  const second = sentences.slice(2).join(" ").trim();

  return [
    first || project.description,
    second ||
      `The work centered on ${project.services
        .slice(0, 2)
        .join(" and ")
        .toLowerCase()}, with clear structure, usable pages, and a build that can be updated after launch.`,
  ];
}

function TagList({
  items,
  variant = "neutral",
}: {
  items: string[];
  variant?: "brand" | "neutral";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          className={`inline-flex h-[42px] items-center rounded-full border px-5 text-sm leading-none ${
            variant === "brand"
              ? "border-brand/20 bg-[linear-gradient(135deg,rgba(195,0,2,0.12),rgba(195,0,2,0.05))] text-brand"
              : "border-white/10 bg-white/[0.05] text-cream/76"
          }`}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function MoreWorkCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-px transition duration-300 hover:-translate-y-1 hover:border-brand/35"
      href={`/portfolio/${project.slug}`}
    >
      <span className="relative block h-[320px] overflow-hidden rounded-t-2xl bg-[#100204] lg:h-[408px]">
        <ProjectImage
          alt={`${project.name} preview`}
          className="brightness-[0.88] saturate-[0.94]"
          src={project.image}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(6,0,1,0.74)_100%)]" />
      </span>
      <span className="block px-6 py-5">
        <span className="block text-xs uppercase leading-4 tracking-[0.24em] text-brand">
          {project.category}
        </span>
        <span className="mt-2 block font-display text-lg leading-[1.5] text-cream">
          {project.name}
        </span>
      </span>
    </Link>
  );
}

export function PortfolioDetailPage({
  project,
  relatedProjects,
}: {
  project: PortfolioProject;
  relatedProjects: PortfolioProject[];
}) {
  const overviewCopy = getOverviewCopy(project);

  return (
    <main className="relative overflow-hidden bg-background text-cream">
      <div className="pointer-events-none absolute right-[-18rem] top-28 size-[52rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.2),rgba(195,0,2,0.05)_50%,transparent_80%)] blur-3xl" />

      <section className="relative z-[1] mx-auto max-w-[1304px] px-5 pt-36 sm:px-8 lg:pt-44">
        <div className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm leading-none text-brand">
          {project.category}
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-[clamp(3.2rem,5.9vw,4rem)] leading-[1.12] text-cream">
              {project.name}
            </h1>
            <p className="mt-5 max-w-[672px] text-lg leading-7 text-cream/60 lg:text-xl">
              {project.tagline}
            </p>
          </div>
          <a
            className="inline-flex h-[58px] w-fit items-center justify-center gap-2 rounded-full border border-brand/30 bg-white/[0.05] px-7 font-medium text-cream transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/15"
            href={project.link}
            rel="noreferrer"
            target="_blank"
          >
            Visit Live Site
            <ArrowIcon />
          </a>
        </div>

        <ProjectGallery images={project.images} initialImage={project.image} projectName={project.name} />
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] border-t border-white/5 px-5 pt-[81px] sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-9 text-cream">About the Project</h2>
            <div className="mt-7 space-y-5 text-base leading-[1.625] text-cream/70">
              {overviewCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="font-display text-lg uppercase leading-7 tracking-[0.05em] text-cream/50">
                Services
              </h3>
              <div className="mt-6">
                <TagList items={project.services} />
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg uppercase leading-7 tracking-[0.05em] text-cream/50">
                Tech Stack
              </h3>
              <div className="mt-6">
                <TagList items={project.tech} variant="brand" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] border-t border-white/5 px-5 pt-[81px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,3rem)] leading-none text-cream">
            Key Features
          </h2>
          <p className="mt-5 text-lg leading-7 text-cream/60">
            Core parts of the project approach
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <article
              className="min-h-[274px] rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
              key={feature.title}
            >
              <div className="flex size-12 items-center justify-center rounded-[14px] bg-brand text-cream">
                <FeatureIcon index={index} />
              </div>
              <h3 className="mt-6 font-display text-lg leading-7 text-cream">{feature.title}</h3>
              <p className="mt-4 text-sm leading-[1.625] text-cream/60">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1304px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-[linear-gradient(135deg,rgba(195,0,2,0.2),rgba(195,0,2,0.1)_45%,transparent)] px-6 py-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:px-20 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.2),transparent_66%)] blur-3xl" />
          <div className="relative z-[1]">
            <h2 className="mx-auto max-w-[940px] font-display text-[clamp(2.6rem,6vw,3.75rem)] leading-none text-cream">
              Ready to build something like this?
            </h2>
            <p className="mx-auto mt-6 max-w-[672px] text-lg leading-7 text-cream/70 lg:text-xl">
              Send us a short brief and we will review the scope, timeline, and next steps.
            </p>
            <Link
              className="mt-10 inline-flex h-16 items-center justify-center gap-2 rounded-full bg-brand px-8 font-display text-base uppercase tracking-[0.08em] text-cream shadow-[0_18px_45px_rgba(195,0,2,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d50018]"
              href="/contact#contact-form"
            >
              Request Consultation
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] border-t border-white/5 px-5 pb-32 pt-[81px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,3rem)] leading-none text-cream">
            More Work
          </h2>
          <p className="mt-5 text-lg leading-7 text-cream/60">
            Explore other websites and product interfaces from the portfolio
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProjects.map((relatedProject) => (
            <MoreWorkCard key={relatedProject.slug} project={relatedProject} />
          ))}
        </div>
      </section>
    </main>
  );
}
