import { socialProfiles } from "./data";

type SocialLink = {
  name: string;
  handle: string;
  href: string;
  side: "top" | "bottom";
  delay: string;
};

const socialSides: SocialLink["side"][] = ["top", "bottom"];
const socialDelays = ["0s", "-1.4s", "-2.6s", "-3.8s"];

const socialLinks: SocialLink[] = socialProfiles.map((profile, index) => ({
  ...profile,
  side: socialSides[index] ?? "top",
  delay: socialDelays[index] ?? "0s",
}));

const sidePositions = {
  top: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  bottom: "left-1/2 top-full -translate-x-1/2 -translate-y-1/2",
} satisfies Record<SocialLink["side"], string>;

function SocialPill({ link, className = "" }: { link: SocialLink; className?: string }) {
  return (
    <a
      href={link.href}
      className={`group relative block h-8 w-[86px] overflow-hidden rounded-[25px] bg-[linear-gradient(165deg,rgba(17,3,7,0.38)_0%,rgba(5,1,2,0.34)_100%)] shadow-[0_3px_3px_rgba(0,0,0,0.25),-5px_-5px_18px_rgba(255,255,255,0.02),16px_16px_36px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:border-brand/30 sm:h-[47px] sm:w-32 ${className}`}
      rel="noreferrer"
      target="_blank"
    >
      <span className="pointer-events-none absolute inset-px opacity-60 bg-[linear-gradient(160deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_50%)]" />
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.08] shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.5),inset_1px_1px_1px_rgba(255,255,255,0.04)]" />
      <span className="absolute left-[17%] top-1/2 size-1 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_9px_rgba(195,0,2,0.6)] sm:size-1.5" />
      <span className="absolute left-[30%] top-1/2 h-[18px] -translate-y-1/2 sm:h-[23px]">
        <span className="block whitespace-nowrap font-display text-[7px] uppercase leading-none tracking-[1px] text-cream sm:text-[10px] sm:tracking-[1.5px]">
          {link.name}
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-[5.5px] leading-none text-cream/25 sm:mt-1 sm:text-[8px]">
          {link.handle}
        </span>
      </span>
    </a>
  );
}

function PresenceOrb() {
  return (
    <div className="relative mx-auto mt-20 h-[min(52vw,468px)] min-h-[180px] w-[min(52vw,468px)] min-w-[180px] sm:h-[min(62vw,468px)] sm:min-h-[300px] sm:w-[min(62vw,468px)] sm:min-w-[300px] lg:mt-[4.5rem] lg:h-[468px] lg:min-h-0 lg:w-[468px] lg:min-w-0">
      <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/25" />
      <div className="absolute left-1/2 top-1/2 size-[70.1%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/10" />
      <div className="absolute left-1/2 top-1/2 size-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/15" />
      <div className="absolute left-1/2 top-1/2 size-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(145deg,#2a0810_0%,#050102_100%)] shadow-[0_0_72px_rgba(195,0,2,0.15),18px_18px_54px_rgba(0,0,0,0.6),inset_9px_9px_27px_rgba(195,0,2,0.15),inset_-9px_-9px_27px_rgba(0,0,0,0.6)]" />
      <div className="absolute left-1/2 top-1/2 size-[31%] translate-x-[12%] translate-y-[8%] rounded-full bg-[radial-gradient(circle,transparent_0%,transparent_50%,rgba(195,0,2,0.12)_70%,transparent_90%)] opacity-40" />

      {socialLinks.map((link) => (
        <div key={link.name} className={`absolute ${sidePositions[link.side]}`}>
          <div
            className="animate-[float-pill_6s_ease-in-out_infinite] will-change-transform"
            style={{ animationDelay: link.delay }}
          >
            <SocialPill link={link} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SocialSection() {
  return (
    <section
      className="relative overflow-hidden border border-black px-4 py-[4.5rem] text-center shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:min-h-[810px] lg:py-0"
    >
      <div className="mx-auto max-w-[997px] lg:pt-2">
        <p className="mx-auto mb-[1.375rem] inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-6 before:bg-brand before:content-[''] lg:mb-6">
          Presence
        </p>

        <h2 className="mx-auto max-w-[684px] text-[2.15rem] font-bold uppercase leading-[1.02] tracking-[-0.035em] text-cream sm:text-[3.4rem] lg:text-[68px] lg:leading-[68px] lg:tracking-[-2.4px]">
          See what we&apos;re
          <br />
          building <span className="text-brand font-display text-[2rem] sm:text-[3.2rem] lg:text-[52px]">next.</span>
        </h2>

        <PresenceOrb />
      </div>
    </section>
  );
}
