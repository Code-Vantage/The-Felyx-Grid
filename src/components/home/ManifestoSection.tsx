function ClayOrb({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full opacity-40 shadow-[0_0_72px_rgba(195,0,2,0.15),18px_18px_54px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,#2a0810_0%,#050102_100%)]" />
      <div className="absolute inset-0 rounded-full shadow-[inset_9px_9px_27px_rgba(195,0,2,0.15),inset_-9px_-9px_27px_rgba(0,0,0,0.6)]" />
    </div>
  );
}

function ManifestoPill() {
  return (
    <div
      className="relative h-8 w-[217px] overflow-hidden rounded-[25px] border border-cream/[0.14] bg-[linear-gradient(174.04deg,rgba(35,10,14,0.72)_0%,rgba(5,1,2,0.62)_100%)] shadow-[0_3px_3px_rgba(0,0,0,0.25),-5px_-5px_18px_rgba(255,255,255,0.03),16px_16px_36px_rgba(0,0,0,0.6),inset_-1px_-1px_2px_rgba(0,0,0,0.55),inset_1px_1px_1px_rgba(255,255,255,0.08)]"
      data-node-id="2012:200"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cream/20" />
      <span className="relative z-[1] flex h-full items-center justify-center gap-3">
        <span className="size-2 shrink-0 rounded-full bg-brand shadow-[0_0_13px_rgba(195,0,2,0.8)]" />
        <span className="whitespace-nowrap font-display text-[10px] uppercase leading-none tracking-[2.2px] text-cream/75">
          Felyx Manifesto
        </span>
      </span>
    </div>
  );
}

export function ManifestoSection() {
  return (
    <section
      className="relative grid min-h-[387px] place-items-center overflow-hidden border border-black px-4 py-[4.5rem] text-center shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:min-h-[448px] lg:min-h-[448px] lg:py-0"
      data-node-id="2012:195"
    >
      <ClayOrb className="-left-5 top-[4.5rem] size-16 lg:left-[calc(50%-720px)] lg:top-[113px] lg:size-[90px] lg:rotate-[164.75deg]" />
      <ClayOrb className="-right-7 bottom-[4.5rem] size-[86px] opacity-50 lg:left-[calc(50%+561px)] lg:top-[269px] lg:size-[126px] lg:rotate-[178.57deg]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[234px] w-[min(684px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(195,0,2,0.24)_0%,rgba(195,0,2,0.1)_36%,transparent_72%)] blur-[63px] lg:h-[270px] lg:w-[810px]" />

      <p className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 font-display text-[108px] leading-none text-brand/15 lg:top-[-34px] lg:text-[180px] lg:leading-[90px]">
        &quot;
      </p>

      <div className="relative z-[1] w-full max-w-[995px]">
        <h2 className="mx-auto whitespace-normal text-center text-[clamp(2.25rem,9vw,3.8rem)] font-bold uppercase leading-[0.98] tracking-[-0.035em] text-cream lg:hidden">
          <span className="block">Your website</span>
          <span className="block font-display text-[1.25em] font-normal lowercase leading-[0.9] tracking-[-0.02em] text-brand drop-shadow-[0_0_54px_rgba(248,232,216,0.15)] lg:text-[117px] lg:leading-[117px] lg:tracking-[-2.35px]">
            should support
          </span>
          <span className="block">
            business <span className="text-brand drop-shadow-[0_0_60px_rgba(195,0,2,0.4)]">goals.</span>
          </span>
        </h2>

        <div className="relative hidden h-[403px] w-[995px] lg:block">
          <div className="absolute left-0 right-0 top-0 h-[320px] whitespace-nowrap">
            <p className="absolute left-[24%] right-[23.69%] top-[-13px] text-center text-[90px] font-bold uppercase leading-[90px] tracking-[-3.15px] text-cream">
              Your website
            </p>
            <p className="absolute left-[19.02%] right-[19.08%] top-[95px] text-center font-display text-[117px] font-normal lowercase leading-[117px] tracking-[-2.35px] text-brand drop-shadow-[0_0_54px_rgba(248,232,216,0.15)]">
              should support
            </p>
            <div className="absolute left-0 right-0 top-[230px] h-[90px] text-[90px] font-bold uppercase leading-[90px] tracking-[-3.15px]">
              <p className="absolute left-0 right-[45.7%] top-[-13px] text-left text-cream">
                Business
              </p>
              <p className="absolute left-[calc(50%+59px)] top-[-13px] text-brand drop-shadow-[0_0_54px_rgba(195,0,2,0.4)]">
                goals
              </p>
              <p className="absolute left-[97.62%] right-[-0.33%] top-[-13px] text-brand">
                .
              </p>
            </div>
          </div>

          <div className="absolute left-1/2 top-[371px] -translate-x-1/2">
            <ManifestoPill />
          </div>
        </div>

        <div className="mx-auto mt-7 w-fit lg:hidden">
          <ManifestoPill />
        </div>
      </div>
    </section>
  );
}
