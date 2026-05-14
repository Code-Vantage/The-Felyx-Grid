import Image from "next/image";

import { navItems, socialProfiles } from "./data";

const email = "hello@thefelyxgrid.com";

type FooterProps = {
  hrefPrefix?: string;
};

function ClayOrb({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[linear-gradient(145deg,#2a0810_0%,#050102_100%)] shadow-[0_0_72px_rgba(195,0,2,0.15),18px_18px_54px_rgba(0,0,0,0.6),inset_9px_9px_27px_rgba(195,0,2,0.15),inset_-9px_-9px_27px_rgba(0,0,0,0.6)] ${className}`}
    />
  );
}

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-[1.125rem] font-display text-[10px] uppercase tracking-[2.5px] text-brand">
      {children}
    </h3>
  );
}

export function Footer({ hrefPrefix = "" }: FooterProps = {}) {
  const getNavHref = (item: string) =>
    item === "Contact"
      ? "/contact#contact-form"
      : item === "Portfolio"
        ? "/portfolio"
        : `${hrefPrefix}#${item.toLowerCase()}`;
  const homeHref = hrefPrefix ? `${hrefPrefix}#hero` : "#hero";

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border border-black bg-black px-4 py-[4.5rem] shadow-[0_3px_2px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:min-h-[791px] lg:py-3"
    >
      <div className="pointer-events-none absolute -bottom-[10.8rem] left-1/2 h-[40.5rem] w-[108rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(195,0,2,0.22),rgba(195,0,2,0.05)_50%,transparent_80%)] opacity-70 blur-[27px]" />
      <div className="pointer-events-none absolute right-[-16.2rem] top-11 size-[39.6rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] blur-[14px]" />
      <div className="pointer-events-none absolute left-[-18rem] top-72 h-[43.2rem] w-[37.8rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] blur-[27px]" />
      <ClayOrb className="left-[12%] top-[14%] size-[90px] opacity-40" />
      <ClayOrb className="right-[10%] top-[18%] size-[63px] opacity-50" />

      <div className="relative z-[1] mx-auto max-w-[1152px] lg:pt-[194px]">
        <div className="mx-auto text-center">
          <div className="mx-auto flex h-[29px] w-[234px] items-center justify-center rounded-full border border-cream/[0.08] bg-cream/[0.04] px-3.5 font-display text-[10px] uppercase leading-none tracking-[1.8px] text-cream/55 shadow-[0_3px_14px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="mr-3 size-1.5 shrink-0 rounded-full bg-[#22ff7a] opacity-70 shadow-[0_0_11px_#22ff7a]" />
            <span className="whitespace-nowrap">Now booking · Q3 2026</span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[684px] text-[2.7rem] font-bold uppercase leading-[0.96] tracking-[-0.035em] text-cream sm:text-[4rem] lg:text-[86px] lg:leading-[86px] lg:tracking-[-3px]">
            Ready to
            <br />
            build
            <br />
            something
          </h2>

          <p className="mt-1 font-display text-[31px] lowercase leading-none tracking-[-0.02em] text-brand drop-shadow-[0_0_22px_rgba(195,0,2,0.5)] sm:text-[38px] lg:text-[41px]">
            unforgettable?
          </p>

          <a
            href={`mailto:${email}`}
            className="relative mt-[1.125rem] inline-flex h-[54px] w-full max-w-[342px] items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 border-t-white/30 bg-[linear-gradient(166.463deg,rgba(216,0,31,0.5),rgba(139,0,1,0.5))] px-6 font-display text-xs font-normal uppercase leading-normal tracking-[2.1px] text-cream shadow-[inset_0_-2.8px_5.6px_rgba(0,0,0,0.3),inset_0_1.4px_0_rgba(255,255,255,0.25),0_2.8px_5.6px_rgba(0,0,0,0.2),0_11px_34px_rgba(195,0,2,0.3)] transition hover:-translate-y-0.5 before:absolute before:left-[-97.31%] before:right-[99.11%] before:top-[1.85px] before:h-[46px] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2)_50%,transparent)] before:content-[''] sm:px-8"
          >
            <span className="relative z-[1]">{email}</span>
            <span className="relative z-[1] text-base">↗</span>
          </a>

          <a
            aria-label="Back to The Felyx Grid home"
            className="mx-auto mt-[1.125rem] block w-fit transition hover:opacity-85"
            href={homeHref}
          >
            <Image
              src="/logo-footer.png"
              alt="The Felyx Grid"
              width={484}
              height={404}
              className="h-auto w-[234px] sm:w-[288px] lg:w-[324px]"
              priority={false}
            />
          </a>

          <p className="mt-[1.125rem] font-display text-[13px] uppercase tracking-[5px] text-cream/55">
            The Felyx Grid · 2025
          </p>
        </div>

        <div className="mx-auto mt-[58px] grid max-w-[1044px] gap-9 border-t border-cream/[0.06] pt-9 text-center sm:grid-cols-2 sm:text-left lg:mt-[50px] lg:grid-cols-4 lg:gap-11">
          <div>
            <FooterHeading>Studio</FooterHeading>
            <p className="mx-auto max-w-[14.5rem] text-[13px] leading-[23px] text-cream/55 sm:mx-0">
              Luxury digital experiences for visionary brands. Crafted in Nagpur, delivered
              worldwide.
            </p>
          </div>

          <div>
            <FooterHeading>Navigate</FooterHeading>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={getNavHref(item)}
                  className="block text-[13px] uppercase leading-[23px] text-cream/55 transition hover:text-cream"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <FooterHeading>Connect</FooterHeading>
            <div className="space-y-1">
              {socialProfiles.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-[13px] leading-[23px] text-cream/55 transition hover:text-cream"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.name} <span className="text-cream/35">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <a
              href={`mailto:${email}`}
              className="block text-[13px] leading-[23px] text-cream/55 transition hover:text-cream"
            >
              {email}
            </a>
            <p className="mt-1 text-[13px] leading-[23px] text-cream/55">
              Nagpur, India
            </p>
          </div>
        </div>

        <div className="mx-auto mt-9 flex max-w-[1044px] flex-col items-center gap-3.5 border-t border-cream/[0.04] pt-7 text-center font-display text-[10px] uppercase tracking-[1.5px] text-cream/30 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2025 The Felyx Grid · All rights reserved</p>
          <p>
            Crafted with <span className="text-brand">precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
