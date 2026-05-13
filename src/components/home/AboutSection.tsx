import type { ReactNode } from "react";

type PhilosophyRowProps = {
  number: string;
  children: ReactNode;
  featured?: boolean;
};

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="text-brand-soft drop-shadow-[0_0_24px_rgba(195,0,2,0.4)]">
      {children}
    </span>
  );
}

function GlassPanel({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative overflow-visible rounded-[25px] shadow-[0_7px_22px_-5px_rgba(0,0,0,0.3),0_22px_54px_-9px_rgba(0,0,0,0.5)] lg:h-[582px]"
      data-node-id="2012:74"
    >
      <div className="pointer-events-none absolute -right-36 -top-[7.2rem] size-[21.6rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.32),rgba(195,0,2,0.1)_40%,transparent_72%)] blur-[31px]" />
      <div className="relative z-[1] overflow-hidden rounded-[25px] backdrop-blur-2xl lg:h-full">
        <div className="pointer-events-none absolute inset-0 rounded-[25px] bg-[linear-gradient(149.52deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_40%,rgba(255,255,255,0.04)_100%)]" />
        <div className="pointer-events-none absolute inset-x-px bottom-px top-px opacity-60 bg-[linear-gradient(149.56deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[25px] shadow-[inset_0_-1px_0_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.12)]" />
        <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-white/[0.18]" />
        <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />
        <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-white/[0.12]" />
        <span className="pointer-events-none absolute bottom-0 right-0 top-0 w-px bg-white/[0.08]" />
        <div className="relative z-[1]">{children}</div>
      </div>
    </div>
  );
}

function PhilosophyRow({ number, children, featured }: PhilosophyRowProps) {
  return (
    <div
      className={`grid items-center gap-3 border-b border-cream/[0.05] py-[1.125rem] last:border-b-0 sm:grid-cols-[43px_1fr] sm:gap-6 lg:px-0 lg:py-0 ${
        featured ? "lg:min-h-[134px]" : "lg:min-h-[96px]"
      }`}
    >
      <span className="font-display text-[22px] leading-none text-brand/50 sm:text-[29px] sm:leading-[29px]">
        {number}
      </span>
      <p className="font-display text-[17px] leading-7 text-cream sm:text-[22px] sm:leading-8 lg:text-[25px] lg:leading-[38px]">
        {children}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border border-black px-4 py-[4.5rem] shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:min-h-[666px] lg:py-[65px]"
      data-node-id="2012:64"
    >
      <div className="pointer-events-none absolute -left-44 top-7 size-[21.6rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] opacity-40 blur-[27px] lg:-left-[16.2rem] lg:top-0 lg:size-[518px]" />
      <div className="pointer-events-none absolute -bottom-[16.2rem] -left-[14.4rem] size-[32.4rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] opacity-50 blur-[27px] lg:-bottom-[27rem] lg:-left-72 lg:size-[691px]" />

      <div className="relative z-[1] mx-auto max-w-[990px]">
        <div className="mb-7 sm:mb-9 lg:mb-[58px]">
          <p className="mb-3.5 inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-6 before:bg-brand before:content-['']">
            Philosophy
          </p>
          <h2 className="max-w-[810px] text-balance text-[2.15rem] font-bold uppercase leading-[0.95] tracking-[-0.035em] text-cream sm:text-[2.7rem] lg:text-[65px] lg:leading-[65px] lg:tracking-[-2.25px]">
            The principles
            <br />
            that{" "}
            <span className="font-display text-[0.58em] font-normal lowercase leading-none tracking-[-0.02em] text-brand lg:text-[35px] lg:leading-[35px] lg:tracking-[-0.7px]">
              shape
            </span>{" "}
            guide our work.
          </h2>
        </div>

        <GlassPanel>
          <div className="flex h-11 items-center border-b border-white/[0.06] px-[1.125rem] sm:px-5 lg:h-[43px]">
            <div className="flex gap-2">
              <span className="size-2.5 rounded-full bg-[linear-gradient(135deg,#ff5c5c,#c30002)] shadow-[0_0_7px_rgba(195,0,2,0.4)]" />
              <span className="size-2.5 rounded-full bg-[linear-gradient(135deg,#09a246,#22ff7a)] shadow-[0_0_7px_#09a246]" />
              <span className="size-2.5 rounded-full bg-cream/20" />
            </div>
            <p className="ml-[1.125rem] truncate font-display text-[9px] uppercase tracking-[0.15em] text-cream/70 sm:text-[10px]">
              ~ / felyx_grid / philosophy.md
            </p>
          </div>

          <div className="px-[1.375rem] py-7 sm:px-11 lg:px-[58px] lg:pb-[58px] lg:pt-[58px]">
            <PhilosophyRow number="01" featured>
              We design <Highlight>clear websites</Highlight> and product interfaces
              <br className="hidden lg:block" /> for businesses with practical goals.
            </PhilosophyRow>
            <PhilosophyRow number="02">
              Each project is planned around <Highlight>usability</Highlight>,{" "}
              <Highlight>performance</Highlight>, and measurable outcomes.
            </PhilosophyRow>
            <PhilosophyRow number="03">
              We combine <Highlight>strategy</Highlight>, <Highlight>interface design</Highlight>, and{" "}
              <Highlight>development</Highlight> into
              <br className="hidden lg:block" /> maintainable digital products.
            </PhilosophyRow>
            <PhilosophyRow number="04">
              <Highlight>Clear communication</Highlight> and practical delivery
              <br className="hidden lg:block" /> guide every stage of the project.
            </PhilosophyRow>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
