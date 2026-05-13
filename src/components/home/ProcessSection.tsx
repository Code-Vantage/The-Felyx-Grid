"use client";

import { useEffect, useRef, useState } from "react";

type ProcessStep = {
  number: string;
  week: string;
  title: string;
  description: string;
  compact?: boolean;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    week: "Week 1",
    title: "Discovery",
    description: "Review goals, audience, content, and project requirements.",
  },
  {
    number: "02",
    week: "Week 2",
    title: "Brainstorming",
    description: "Define structure, priorities, and the first direction for the work.",
  },
  {
    number: "03",
    week: "Weeks 3-5",
    title: "Design & Prototyping",
    description: "Create interface designs and prototypes for review and refinement.",
    compact: true,
  },
  {
    number: "04",
    week: "Weeks 5-8",
    title: "Development",
    description: "Build responsive pages and features with clean, maintainable code.",
    compact: true,
  },
  {
    number: "05",
    week: "Week 9+",
    title: "Launch & Scaling",
    description: "Deploy the site, check performance, and support next improvements.",
    compact: true,
  },
];

function WeekPill({ children }: { children: string }) {
  return (
    <span className="inline-flex h-[21px] items-center rounded-full border border-cream/10 px-3 font-display text-[9px] uppercase tracking-[2.25px] text-cream/30">
      {children}
    </span>
  );
}

function TimelineDot() {
  return (
    <span className="absolute left-[31px] top-0 hidden size-[23px] rounded-full bg-[linear-gradient(145deg,#2a0810_0%,#050102_100%)] shadow-[0_0_18px_rgba(195,0,2,0.3),-2px_-2px_5px_rgba(195,0,2,0.1),4px_4px_11px_rgba(0,0,0,0.6),inset_1px_1px_1px_rgba(255,255,255,0.08)] lg:block">
      <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded bg-brand shadow-[0_0_11px_rgba(195,0,2,0.8)]" />
    </span>
  );
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function ProcessItem({
  isLast,
  itemRef,
  lineProgress,
  step,
}: {
  isLast: boolean;
  itemRef: (node: HTMLElement | null) => void;
  lineProgress: number;
  step: ProcessStep;
}) {
  return (
    <article
      ref={itemRef}
      className={`relative pb-[58px] pl-7 last:pb-0 lg:pl-[126px] ${
        step.compact ? "lg:min-h-[207px]" : "lg:min-h-[238px]"
      }`}
    >
      {!isLast ? (
        <span
          className="pointer-events-none absolute bottom-[-6px] left-0 top-[6px] w-px origin-top bg-brand/30 lg:hidden"
          style={{ transform: `scaleY(${lineProgress})` }}
        />
      ) : null}
      <span className="absolute -left-[6px] top-0 size-3 rounded-full bg-brand shadow-[0_0_16px_rgba(195,0,2,0.8)] lg:hidden" />
      <TimelineDot />

      <div className="flex h-[21px] items-center gap-3.5">
        <span className="font-display text-[0.68rem] tracking-[3.2px] text-brand">
          {step.number}
        </span>
        <WeekPill>{step.week}</WeekPill>
      </div>

      <h3 className="mt-2 text-[2.15rem] font-bold uppercase leading-tight tracking-[-0.035em] text-cream sm:text-[2.7rem] lg:mt-1 lg:text-[50px] lg:leading-[50px] lg:tracking-[-1.75px]">
        {step.title}
      </h3>
      <p className="mt-3.5 max-w-[41rem] font-display text-lg leading-8 text-cream/55 lg:mt-[1.125rem] lg:text-[19px] lg:leading-[30px]">
        {step.description}
      </p>
    </article>
  );
}

export function ProcessSection() {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [desktopLineProgress, setDesktopLineProgress] = useState(0);
  const [segmentProgress, setSegmentProgress] = useState<number[]>(
    processSteps.map(() => 0),
  );

  useEffect(() => {
    let frameId = 0;

    const updateLineProgress = () => {
      const drawPoint = window.innerHeight * 0.62;
      const nextSegmentProgress = processSteps.map((_, index) => {
        const item = itemRefs.current[index];

        if (!item || index === processSteps.length - 1) {
          return 0;
        }

        const rect = item.getBoundingClientRect();
        const start = rect.top + 6;
        const end = rect.bottom + 6;

        return clamp((drawPoint - start) / (end - start));
      });

      const firstItem = itemRefs.current[0];
      const lastItem = itemRefs.current[processSteps.length - 1];
      const nextDesktopProgress =
        firstItem && lastItem
          ? clamp(
              (drawPoint - (firstItem.getBoundingClientRect().top + 12)) /
                (lastItem.getBoundingClientRect().top -
                  firstItem.getBoundingClientRect().top),
            )
          : 0;

      setSegmentProgress(nextSegmentProgress);
      setDesktopLineProgress(nextDesktopProgress);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateLineProgress);
    };

    updateLineProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden border border-black px-4 py-[4.5rem] shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:py-[108px]"
      data-node-id="2012:370"
    >
      <div className="mx-auto max-w-[1152px]">
        <p className="mb-[1.125rem] inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-7 before:bg-brand before:content-['']">
          Our process
        </p>

        <h2 className="text-[2.7rem] font-bold uppercase leading-[0.95] tracking-[-0.035em] text-cream sm:text-[3.4rem] lg:text-[76px] lg:leading-[76px] lg:tracking-[-2.65px]">
          How we
          <br />
          <span className="font-display text-[0.9em] font-normal normal-case leading-none tracking-[-0.035em] text-brand lg:text-[67px] lg:leading-[67px] lg:tracking-[-2.35px]">
            Create
          </span>
        </h2>

        <div className="relative mt-[4.5rem] lg:mt-[86px]" ref={timelineRef}>
          <div
            className="pointer-events-none absolute bottom-[196px] left-[42px] top-[12px] hidden w-px origin-top bg-brand/50 lg:block"
            style={{ transform: `scaleY(${desktopLineProgress})` }}
          />
          {processSteps.map((step, index) => (
            <ProcessItem
              itemRef={(node) => {
                itemRefs.current[index] = node;
              }}
              isLast={index === processSteps.length - 1}
              key={step.number}
              lineProgress={segmentProgress[index] ?? 0}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
