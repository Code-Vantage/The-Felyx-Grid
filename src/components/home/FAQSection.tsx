type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with luxury brands, SaaS startups, real estate, fashion, hospitality, and tech-forward companies. Our focus is brands that demand premium digital presence and are ready to invest in world-class craftsmanship.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines vary by scope. A focused landing page takes 2-3 weeks, while a full brand system with website spans 6-10 weeks. We prioritize quality over speed, but always move with intention.",
  },
  {
    question: "Do you handle branding and development together?",
    answer:
      "Yes. We offer end-to-end services from brand strategy and identity design through to full-stack development and launch. One team, one vision, seamless execution.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "We work with React, Next.js, and modern JAMstack architectures. For CMS needs, we integrate with Sanity, Contentful, or custom solutions tailored to your team.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer ongoing retainer packages for maintenance, optimization, and iterative improvements as your brand evolves and scales.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every project starts with a discovery phase to define scope. We provide transparent, fixed-price proposals. Investment varies by complexity, so reach out for a tailored estimate.",
  },
];

function FAQIcon() {
  return (
    <span className="relative size-5 shrink-0">
      <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-brand" />
      <span className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-brand transition-opacity group-open:opacity-0" />
    </span>
  );
}

function FAQCard({ item, index }: { item: FAQItem; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <details
      className="group relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[linear-gradient(170deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_40%,rgba(255,255,255,0.04)_100%)] shadow-[0_7px_22px_-5px_rgba(0,0,0,0.3),0_22px_54px_-9px_rgba(0,0,0,0.5)] open:shadow-[0_0_54px_rgba(195,0,2,0.08),0_22px_54px_-9px_rgba(0,0,0,0.5)]"
    >
      <div className="pointer-events-none absolute inset-px opacity-60 bg-[linear-gradient(170deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(255,255,255,0.03)]" />

      <summary className="relative z-[1] flex min-h-[77px] cursor-pointer list-none items-center gap-[1.375rem] px-[1.625rem] py-[1.375rem] font-display text-left marker:hidden sm:px-8 [&::-webkit-details-marker]:hidden">
        <span className="w-6 shrink-0 text-[10px] tracking-[2.5px] text-brand">
          {number}
        </span>
        <span className="min-w-0 flex-1 text-[20px] leading-tight tracking-[-0.08px] text-cream/55 group-open:text-cream font-sans">
          {item.question}
        </span>
        <FAQIcon />
      </summary>

      <div className="relative z-[1] px-[1.625rem] pb-[1.375rem] group-open:animate-[faq-answer-open_220ms_ease-out] sm:pl-[72px] sm:pr-8 lg:pb-[1.625rem]">
        <p className="text-left text-[15px] font-bold leading-[26px] text-cream/55 sm:text-base sm:leading-[27px]">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export function FAQSection() {
  return (
    <section
      id="faqs"
      className="relative overflow-hidden border border-black px-4 py-[4.5rem] shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:py-[108px]"
      data-node-id="2012:463"
    >
      <div className="mx-auto max-w-[864px]">
        <p className="mb-[1.125rem] inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-6 before:bg-brand before:content-['']">
          FAQs
        </p>

        <h2 className="max-w-[504px] text-[2.7rem] font-bold uppercase leading-[0.95] tracking-[-0.035em] text-cream sm:text-[4rem] lg:text-[72px] lg:leading-[72px] lg:tracking-[-2.5px]">
          Frequently
          <br />
          <span className="font-display text-[1.15em] font-normal lowercase leading-none tracking-[-0.02em] text-brand lg:text-[83px] lg:leading-[83px] lg:tracking-[-1.65px]">
            asked.
          </span>
        </h2>

        <div className="mt-[58px] space-y-3 lg:mt-[58px]">
          {faqs.map((item, index) => (
            <FAQCard key={item.question} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}