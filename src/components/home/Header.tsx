import Image from "next/image";

import { navItems } from "./data";

type HeaderProps = {
  hrefPrefix?: string;
  startHref?: string;
  contactHref?: string;
};

export function Header({
  hrefPrefix = "",
  startHref = "/contact#contact-form",
  contactHref = "/contact#contact-form",
}: HeaderProps = {}) {
  const homeHref = hrefPrefix ? `${hrefPrefix}#hero` : "#hero";
  const getNavHref = (item: string) => {
    if (item === "Contact" && contactHref) {
      return contactHref;
    }

    if (item === "Portfolio") {
      return "/portfolio";
    }

    return `${hrefPrefix}#${item.toLowerCase()}`;
  };

  return (
    <header
      className="fixed left-1/2 top-3.5 z-50 flex h-[58px] w-[min(1089px,calc(100vw-43px))] -translate-x-1/2 items-center gap-[clamp(0.9rem,1.8vw,1.8rem)] rounded-full border border-white/[0.09] bg-[#060001]/70 py-0 pl-4 pr-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_rgba(0,0,0,0.32)] backdrop-blur-2xl max-[1600px]:w-[min(1008px,calc(100vw-29px))] max-[1180px]:w-[calc(100vw-29px)] max-[640px]:top-3 max-[640px]:h-14 max-[640px]:w-[calc(100vw-22px)] max-[640px]:pl-3.5 max-[640px]:pr-2.5">
      <a
        href={homeHref}
        className="flex h-[51px] w-[102px] shrink-0 items-center max-[640px]:h-[48px] max-[640px]:w-[96px]"
        aria-label="The Felyx Grid home"
      >
        <Image
          src="/logo.png"
          alt="The Felyx Grid"
          width={484}
          height={404}
          priority
          className="h-[51px] w-[102px] object-contain max-[640px]:h-[48px] max-[640px]:w-[96px]"
        />
      </a>

      <nav
        className="flex flex-1 items-center justify-center gap-[clamp(1.4rem,2.7vw,2.8rem)] whitespace-nowrap font-display text-[clamp(0.65rem,0.75vw,0.77rem)] font-normal uppercase tracking-[0.08em] text-cream/55 max-[1180px]:gap-[clamp(0.9rem,2vw,1.45rem)] max-[1180px]:text-[0.61rem] max-[1180px]:tracking-[0.06em] max-[1040px]:hidden"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a key={item} href={getNavHref(item)} className="transition-colors hover:text-cream">
            {item}
          </a>
        ))}
      </nav>

      <a
        href={startHref}
        className="relative flex h-[38px] w-[142px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 border-t-white/30 bg-[linear-gradient(166.463deg,rgba(216,0,31,0.5),rgba(139,0,1,0.5))] font-display text-[0.61rem] font-normal uppercase leading-normal tracking-[0.09em] text-cream shadow-[inset_0_-2.8px_5.6px_rgba(0,0,0,0.3),inset_0_1.4px_0_rgba(255,255,255,0.25),0_2.8px_5.6px_rgba(0,0,0,0.2),0_11px_34px_rgba(195,0,2,0.3)] before:absolute before:left-[-97.31%] before:right-[99.11%] before:top-[1.85px] before:h-[46px] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2)_50%,transparent)] before:content-[''] max-[1180px]:w-32 max-[1180px]:text-[0.56rem] max-[1040px]:hidden"
      >
        Start Project
      </a>

      <details className="relative ml-auto hidden max-[1040px]:block">
        <summary
          className="flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-full border border-cream/15 bg-cream/[0.04] [&::-webkit-details-marker]:hidden"
          aria-label="Open navigation"
        >
          <span className="h-px w-4 rounded-full bg-cream" />
          <span className="h-px w-4 rounded-full bg-cream" />
          <span className="h-px w-4 rounded-full bg-cream" />
        </summary>
        <div className="absolute right-0 top-[52px] grid min-w-[13.5rem] gap-0.5 rounded-3xl border border-cream/10 bg-[#060001]/90 p-3.5 shadow-[0_22px_54px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
          {navItems.map((item) => (
            <a
              key={item}
              href={getNavHref(item)}
              className="rounded-full px-3.5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/70 hover:bg-cream/[0.08] hover:text-cream"
            >
              {item}
            </a>
          ))}
        </div>
      </details>
    </header>
  );
}
