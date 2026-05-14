import Image from "next/image";
import Link from "next/link";

import type { PortfolioProject } from "../../lib/portfolio";

function ProjectCard({
  featured = false,
  project,
}: {
  featured?: boolean;
  project: PortfolioProject;
}) {
  return (
    <Link
      className={`group relative overflow-hidden rounded-[25px] border border-cream/[0.08] bg-background shadow-[0_3px_3px_rgba(0,0,0,0.25),-5px_-5px_18px_rgba(255,255,255,0.02),16px_16px_36px_rgba(0,0,0,0.6)] ${
        featured ? "block min-h-[30rem] lg:h-[648px]" : "block min-h-[26rem] lg:h-[425px]"
      }`}
      href={`/portfolio/${project.slug}`}
    >
      <Image
        src={project.image}
        alt={`${project.name} project preview`}
        fill
        sizes={featured ? "(min-width: 1024px) 1280px, 100vw" : "(min-width: 1024px) 630px, 100vw"}
        className="object-cover object-top opacity-[0.78] brightness-[0.95] saturate-[0.96] contrast-100 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-85"
      />
      <div className="absolute inset-0 bg-[linear-gradient(150.64deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_42%,rgba(255,255,255,0.025)_100%)]" />
      <div className="absolute inset-px opacity-35 bg-[linear-gradient(150.68deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-px bg-[linear-gradient(180deg,rgba(6,0,1,0.08)_0%,rgba(6,0,1,0.04)_38%,rgba(6,0,1,0.68)_100%)]" />
      <div className="absolute inset-x-[20%] bottom-[-14%] h-2/5 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(195,0,2,0.16),rgba(98,0,1,0.08)_35%,transparent_70%)] opacity-20 blur-[18px]" />

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.08] shadow-[inset_0_-1px_0_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.12)]" />
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent" />

      <div className="relative z-[1] flex h-full min-h-[inherit] flex-col justify-between p-[1.375rem] sm:p-7 lg:p-8">
        <div className="flex items-start justify-end gap-4">
          <span className="font-display text-[10px] tracking-[2px] text-cream/25">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        <div className="font-sans">
          <p className="text-[14px] uppercase tracking-[2.5px] text-brand">
            {project.category}
          </p>
          <h3 className="mt-2 text-[40px] leading-none tracking-[-0.65px] text-cream">
            {project.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export function PortfolioSection({ projects }: { projects: PortfolioProject[] }) {
  const visibleProjects = projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border border-black px-4 py-[4.5rem] shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:py-[108px]"
      data-node-id="2012:210"
    >
      <div className="mx-auto max-w-[1152px]">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-[1.125rem] inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-7 before:bg-brand before:content-['']">
              Selected work
            </p>
            <h2 className="max-w-[648px] text-[2.15rem] font-bold uppercase leading-[0.98] tracking-[-0.035em] text-cream sm:text-[2.7rem] lg:text-[76px] lg:leading-[76px] lg:tracking-[-2.65px]">
              Work that
              <br />
              <span className="font-display text-[0.88em] font-normal lowercase leading-none tracking-[-0.02em] text-brand lg:text-[66px] lg:leading-[66px] lg:tracking-[-1.32px]">
                speaks
              </span>{" "}
              for itself.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex h-10 w-fit items-center justify-center rounded-full border border-cream/[0.12] bg-cream/[0.04] px-[1.375rem] font-display text-[10px] uppercase tracking-[2px] text-cream/70 shadow-[0_3px_14px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-brand/40 hover:text-cream"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-[65px] grid gap-[1.125rem] lg:grid-cols-2">
          {visibleProjects[0] ? (
            <div className="lg:col-span-2">
              <ProjectCard featured project={visibleProjects[0]} />
            </div>
          ) : null}
          {visibleProjects.slice(1).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
