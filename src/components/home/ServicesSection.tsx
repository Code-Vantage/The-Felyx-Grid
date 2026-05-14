type ServiceCard = {
  number: string;
  icon: string;
  title: string;
  description: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    number: "01",
    icon: "◇",
    title: "UI / UX Design",
    description: "Intuitive interfaces engineered for clarity and conversion.",
    href: "/contact#contact-form",
  },
  {
    number: "02",
    icon: "◈",
    title: "Web Development",
    description: "Performance-tuned platforms built on modern stacks.",
    href: "/contact#contact-form",
  },
  {
    number: "03",
    icon: "◉",
    title: "Brand Identity",
    description: "Identity systems for the new luxury digital era.",
    href: "/contact#contact-form",
  },
  {
    number: "04",
    icon: "⬡",
    title: "SaaS Products",
    description: "Scalable product architecture and design systems.",
    href: "/contact#contact-form",
  },
  {
    number: "05",
    icon: "✦",
    title: "Creative Direction",
    description: "Strategic vision for ambitious creative teams.",
    href: "/contact#contact-form",
  },
  {
    number: "06",
    icon: "△",
    title: "Motion Design",
    description: "Cinematic motion language that tells stories.",
    href: "/contact#contact-form",
  },
];

function ServiceCard({ service, index }: { service: ServiceCard; index: number }) {
  const isTopRow = index < 3;

  return (
    <a
      aria-label={`Explore ${service.title} services`}
      className={`group relative block overflow-hidden rounded-[25px] bg-[linear-gradient(151deg,rgba(17,3,7,0.2)_0%,rgba(5,1,2,0.2)_100%)] px-[1.375rem] py-7 shadow-[0_3px_3px_rgba(0,0,0,0.25),-5px_-5px_18px_rgba(255,255,255,0.02),16px_16px_36px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(151deg,rgba(195,0,2,0.12)_0%,rgba(5,1,2,0.22)_100%)] sm:px-7 sm:py-9 lg:px-9 lg:py-10 ${
        isTopRow ? "lg:h-[295px]" : "lg:h-[274px]"
      }`}
      href={service.href}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.5),inset_1px_1px_1px_rgba(255,255,255,0.04)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.07]" />

      <div className="relative flex items-center justify-between font-display">
        <span className="text-[10px] tracking-[0.3em] text-cream/30">
          {service.number}
        </span>
        <span className="text-[25px] leading-none text-cream/25">
          {service.icon}
        </span>
      </div>

      <h3 className="relative mt-11 font-display text-[25px] leading-none tracking-[-0.5px] text-cream">
        {service.title}
      </h3>
      <p className="relative mt-5 max-w-[18rem] font-sans text-[14px] leading-[22px] text-cream/55">
        {service.description}
      </p>

      <div className="relative mt-9 flex items-center justify-between border-t border-cream/[0.05] pt-[1.125rem] font-display text-[10px] uppercase tracking-[0.2em] text-cream/55 transition group-hover:text-cream lg:absolute lg:inset-x-9 lg:bottom-10">
        <span>Explore</span>
        <span className="text-[0.68rem] leading-none text-cream/45 transition group-hover:translate-x-1 group-hover:text-brand">→</span>
      </div>
    </a>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border border-black px-4 py-[4.5rem] shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:py-[5.4rem] lg:min-h-[922px] lg:py-[143px]"
      data-node-id="2012:121"
    >
      <div className="pointer-events-none absolute -left-36 top-[6.3rem] size-[21.6rem] rounded-full bg-[radial-gradient(circle,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] opacity-40 blur-[27px] lg:-left-[4.5rem] lg:top-[7.2rem] lg:size-[518px]" />

      <div className="relative z-[1] mx-auto max-w-[1160px]">
        <div className="grid gap-7 lg:grid-cols-[1fr_290px] lg:items-end">
          <div>
            <p className="mb-[1.125rem] inline-flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-brand before:block before:h-px before:w-7 before:bg-brand before:content-['']">
              What we build
            </p>
            <h2 className="max-w-[549px] text-[2.15rem] font-bold uppercase leading-[0.98] tracking-[-0.035em] text-cream sm:text-[2.7rem] lg:text-[76px] lg:leading-[76px] lg:tracking-[-2.65px]">
              Six disciplines.
              <br />
              One{" "}
              <span className="font-display text-[0.72em] font-normal normal-case leading-none tracking-[-0.035em] text-brand lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.95px]">
                Vision.
              </span>
            </h2>
          </div>

          <p className="max-w-[18rem] font-display text-[17px] leading-tight text-cream/55 lg:pb-2 lg:text-[20px]">
            From strategy to launch — every layer of your digital presence handled in-house.
          </p>
        </div>

        <div className="mt-11 grid gap-[1.375rem] md:grid-cols-2 lg:mt-[65px] lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}