import Link from "next/link";

const marqueeItems = [
  "UI / UX Design",
  "Web Development",
  "Branding Systems",
  "Motion Design",
  "Creative Direction",
  "SaaS Products",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh overflow-hidden border border-black bg-background px-4 py-[6.3rem] text-cream shadow-lg max-[640px]:px-3.5 max-[640px]:pb-[7.25rem] max-[640px]:pt-[8.75rem] sm:px-5 lg:px-7"
    >
      <div className="pointer-events-none absolute -right-36 top-[5.4rem] size-[21.6rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] opacity-60 blur-3xl md:-right-[5.5rem] md:size-[28.8rem] xl:right-7 xl:size-[39.6rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[21.6rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,232,216,0.06),rgba(248,232,216,0.01)_50%,transparent_80%)] blur-3xl md:size-[32.4rem] xl:size-[39.6rem]" />
      <div className="pointer-events-none absolute right-9 top-[7.2rem] size-[4.5rem] rounded-full bg-[linear-gradient(145deg,#2a0810,#050102)] opacity-70 shadow-[inset_9px_9px_27px_rgba(195,0,2,0.15),inset_-9px_-9px_27px_rgba(0,0,0,0.6),18px_18px_54px_rgba(0,0,0,0.6),0_0_72px_rgba(195,0,2,0.15)] md:right-[5.4rem] md:size-[6.3rem]" />
      <div className="pointer-events-none absolute bottom-[10.8rem] left-7 size-[3.15rem] rounded-full bg-[linear-gradient(145deg,#2a0810,#050102)] opacity-50 shadow-[inset_9px_9px_27px_rgba(195,0,2,0.15),inset_-9px_-9px_27px_rgba(0,0,0,0.6),18px_18px_54px_rgba(0,0,0,0.6),0_0_72px_rgba(195,0,2,0.15)] md:left-[4.5rem] md:size-[4.5rem]" />

      <p className="absolute left-14 top-1/3 z-[2] hidden w-[12.5rem] font-display text-[0.68rem] uppercase leading-snug tracking-[0.35em] text-cream/20 xl:block">
        Felyx Grid · Est. 2025
      </p>
      <p className="absolute right-9 top-1/3 z-[2] hidden w-[12.5rem] font-display text-[0.68rem] uppercase leading-snug tracking-[0.35em] text-cream/20 xl:block">
        Luxury · Digital · Atelier
      </p>

      <div className="relative z-[2] mx-auto flex w-full max-w-[58rem] flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/[0.04] px-3.5 py-2 font-display text-[0.5rem] uppercase leading-none tracking-[0.22em] text-cream/55 shadow-lg max-[640px]:px-3.5 max-[640px]:py-2 max-[640px]:text-[0.48rem] max-[640px]:tracking-[0.19em]">
          <span className="size-1.5 rounded-full bg-[#22ff7a] opacity-60 shadow-[0_0_11px_#22ff7a]" />
          <span>Available · Q3 2026</span>
        </div>

        <p className="mt-7 font-display text-[1.7rem] lowercase leading-none tracking-wide text-brand drop-shadow-[0_0_27px_rgba(195,0,2,0.4)] max-[640px]:mt-6 max-[640px]:text-[1.58rem] sm:text-[2.25rem] lg:text-[2.8rem]">
          Crafting digital
        </p>

        <h1 className="mt-7 flex flex-col items-center font-display text-[2.8rem] font-normal uppercase leading-[1.4] tracking-tight text-cream max-[640px]:mt-6 max-[640px]:text-[2.6rem] max-[640px]:leading-[1.25] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5.4rem]">
          <span>Experiences</span>
          <span>
            That{" "}
            <strong className="bg-[linear-gradient(169deg,#ff2030,#8b0001)] bg-clip-text font-normal text-transparent">
              Demand
            </strong>
          </span>
          <span>Attention</span>
        </h1>

        <div className="mt-11 flex w-full max-w-sm flex-col items-center justify-center gap-3 max-[640px]:mt-10 max-[640px]:max-w-[21rem] max-[640px]:gap-3 sm:max-w-none sm:flex-row sm:gap-3.5">
          <a
            href="/contact#contact-form"
            className="relative inline-flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 border-t-white/30 bg-[linear-gradient(166.463deg,rgba(216,0,31,0.5),rgba(139,0,1,0.5))] px-[1.375rem] font-display text-[0.68rem] font-normal uppercase leading-normal tracking-widest text-cream shadow-[inset_0_-2.8px_5.6px_rgba(0,0,0,0.3),inset_0_1.4px_0_rgba(255,255,255,0.25),0_2.8px_5.6px_rgba(0,0,0,0.2),0_11px_34px_rgba(195,0,2,0.3)] transition hover:-translate-y-0.5 before:absolute before:left-[-97.31%] before:right-[99.11%] before:top-[1.85px] before:h-[46px] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2)_50%,transparent)] before:content-[''] max-[640px]:h-11 max-[640px]:text-[0.64rem] sm:w-auto"
          >
            <span className="relative z-[1]">Start Your Project</span>
            <span aria-hidden="true" className="relative z-[1]">-&gt;</span>
          </a>
          <Link
            href="/portfolio"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-cream/15 bg-cream/[0.04] px-[1.375rem] font-display text-[0.68rem] uppercase tracking-widest text-cream shadow-inner max-[640px]:h-11 max-[640px]:text-[0.64rem] sm:w-auto"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-7 z-[2] overflow-hidden whitespace-nowrap py-3 font-display text-[0.68rem] uppercase leading-none tracking-[0.3em] text-cream/20 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] max-[640px]:bottom-4 md:bottom-11"
        aria-hidden="true"
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {marqueeItems.map((item) => (
                <span key={`${group}-${item}`} className="flex items-center gap-7 pr-7">
                  {item}
                  <b className="font-normal leading-none text-brand">✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
