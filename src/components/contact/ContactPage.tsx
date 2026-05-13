import type { ReactNode } from "react";

import { socialProfiles } from "../home/data";

const iconArrow = "arrow";
const iconSend = "send";
const iconMail = "mail";
const iconClock = "clock";
const iconDiscovery = "search";
const iconStrategy = "strategy";
const iconDesign = "palette";
const iconDevelopment = "code";
const iconLaunch = "rocket";
const iconInstagram = "instagram";
const iconBehance = "behance";
const iconDribbble = "dribbble";
const iconLinkedin = "linkedin";
const iconCalendar = "calendar";

type IconName =
  | "arrow"
  | "send"
  | "mail"
  | "clock"
  | "search"
  | "strategy"
  | "palette"
  | "code"
  | "rocket"
  | "instagram"
  | "behance"
  | "dribbble"
  | "linkedin"
  | "calendar";

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
};

type InfoRowProps = {
  href?: string;
  icon: IconName;
  label: string;
  value: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

const processSteps: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Discovery",
    description: "Review your goals, audience, content, and project requirements",
    icon: iconDiscovery,
  },
  {
    step: "Step 2",
    title: "Strategy",
    description: "Define scope, page structure, timeline, and technical approach",
    icon: iconStrategy,
  },
  {
    step: "Step 3",
    title: "Design",
    description: "Create interface designs and review them with you",
    icon: iconDesign,
  },
  {
    step: "Step 4",
    title: "Development",
    description: "Build the approved design with responsive, maintainable code",
    icon: iconDevelopment,
  },
  {
    step: "Step 5",
    title: "Launch",
    description: "Launch, test, and support updates after release",
    icon: iconLaunch,
  },
];

const expectations = [
  "Response within 24 hours",
  "Free initial consultation",
  "Custom proposal & timeline",
  "NDA available upon request",
];

const socialIcons = [
  { icon: iconInstagram, label: "Instagram", href: socialProfiles[0].href },
  { icon: iconBehance, label: "Behance", href: socialProfiles[1].href },
  { icon: iconDribbble, label: "Dribbble", href: socialProfiles[3].href },
  { icon: iconLinkedin, label: "LinkedIn", href: socialProfiles[2].href },
] satisfies { icon: IconName; label: string; href: string }[];

const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY ?? "";

function IconImage({ src, className = "size-5" }: { src: IconName; className?: string }) {
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  const icons: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path {...strokeProps} d="M5 12h14" />
        <path {...strokeProps} d="m13 6 6 6-6 6" />
      </>
    ),
    send: (
      <>
        <path {...strokeProps} d="m22 2-7 20-4-9-9-4Z" />
        <path {...strokeProps} d="M22 2 11 13" />
      </>
    ),
    mail: (
      <>
        <rect {...strokeProps} height="14" rx="3" width="18" x="3" y="5" />
        <path {...strokeProps} d="m4 7 8 6 8-6" />
      </>
    ),
    clock: (
      <>
        <circle {...strokeProps} cx="12" cy="12" r="9" />
        <path {...strokeProps} d="M12 7v5l3 2" />
      </>
    ),
    search: (
      <>
        <circle {...strokeProps} cx="11" cy="11" r="7" />
        <path {...strokeProps} d="m16 16 5 5" />
      </>
    ),
    strategy: (
      <>
        <path {...strokeProps} d="M12 3v4" />
        <path {...strokeProps} d="M12 17v4" />
        <path {...strokeProps} d="M3 12h4" />
        <path {...strokeProps} d="M17 12h4" />
        <circle {...strokeProps} cx="12" cy="12" r="5" />
        <circle fill="currentColor" cx="12" cy="12" r="1.5" />
      </>
    ),
    palette: (
      <>
        <path {...strokeProps} d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.5-3.3 1.7 1.7 0 0 1 1.2-2.9H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z" />
        <circle fill="currentColor" cx="8" cy="10" r="1" />
        <circle fill="currentColor" cx="11" cy="7" r="1" />
        <circle fill="currentColor" cx="15" cy="8" r="1" />
      </>
    ),
    code: (
      <>
        <path {...strokeProps} d="m8 8-4 4 4 4" />
        <path {...strokeProps} d="m16 8 4 4-4 4" />
        <path {...strokeProps} d="m14 5-4 14" />
      </>
    ),
    rocket: (
      <>
        <path {...strokeProps} d="M14 4c3.5.6 5.4 2.5 6 6l-5.5 5.5-6-6Z" />
        <path {...strokeProps} d="M9 15 5 19" />
        <path {...strokeProps} d="M7 13l-3 1 1-3 3.5-3.5" />
        <path {...strokeProps} d="M11 17l-1 3 3-1 3.5-3.5" />
        <circle {...strokeProps} cx="15" cy="9" r="1.5" />
      </>
    ),
    instagram: (
      <>
        <rect {...strokeProps} height="16" rx="4" width="16" x="4" y="4" />
        <circle {...strokeProps} cx="12" cy="12" r="3.5" />
        <circle fill="currentColor" cx="16.8" cy="7.2" r="1" />
      </>
    ),
    behance: (
      <>
        <text fill="currentColor" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" x="3" y="15">
          Be
        </text>
        <path {...strokeProps} d="M14 8h6" />
      </>
    ),
    dribbble: (
      <>
        <circle {...strokeProps} cx="12" cy="12" r="8" />
        <path {...strokeProps} d="M5 10c4.5 0 8.4-1.3 11-4" />
        <path {...strokeProps} d="M8 19c1.8-4.7 5.2-7.7 11-8" />
        <path {...strokeProps} d="M9 5c2.8 3.4 4.6 7.8 5 14" />
      </>
    ),
    linkedin: (
      <>
        <path fill="currentColor" d="M6.5 9.5h3v9h-3z" />
        <circle fill="currentColor" cx="8" cy="6.6" r="1.6" />
        <path fill="currentColor" d="M11.3 9.5h2.9v1.2a3.1 3.1 0 0 1 2.6-1.4c2 0 3.2 1.4 3.2 4v5.2h-3v-4.8c0-1.2-.5-1.8-1.4-1.8s-1.4.6-1.4 1.8v4.8h-2.9z" />
      </>
    ),
    calendar: (
      <>
        <rect {...strokeProps} height="16" rx="3" width="18" x="3" y="5" />
        <path {...strokeProps} d="M8 3v4" />
        <path {...strokeProps} d="M16 3v4" />
        <path {...strokeProps} d="M3 10h18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[src]}
    </svg>
  );
}

function FormField({ label, name, placeholder, required, type = "text" }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium leading-5 text-cream">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        className="h-[50px] rounded-[14px] border border-white/10 bg-white/[0.05] px-4 py-3 text-base text-cream outline-none transition placeholder:text-cream/50 focus:border-brand/50 focus:bg-white/[0.07]"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium leading-5 text-cream">{label}</span>
      <select
        className="h-[49px] appearance-none rounded-[14px] border border-white/10 bg-white/[0.05] px-4 py-3 text-base text-cream/50 outline-none transition focus:border-brand/50 focus:bg-white/[0.07]"
        defaultValue=""
        name={name}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} className="bg-background text-cream" value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function InfoRow({ href, icon, label, value }: InfoRowProps) {
  const content = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-brand/20">
        <IconImage src={icon} className="size-6" />
      </span>
      <span className="grid content-center gap-1">
        <span className="text-sm leading-5 text-cream/50">{label}</span>
        <span className="text-base leading-6 text-cream">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="flex gap-4 transition hover:text-brand" href={href}>
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-4">
      {content}
    </div>
  );
}

function ProcessPreview() {
  return (
    <section className="mx-auto max-w-[1400px] border-t border-white/[0.05] px-5 pt-20 sm:px-8 lg:px-12">
      <div className="text-center">
        <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-[48px] lg:leading-[48px]">
          Our Process
        </h2>
        <p className="mt-4 text-base leading-7 text-cream/60 sm:text-lg">
          A clear process for planning, design, development, and launch
        </p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {processSteps.map((item, index) => (
          <article key={item.step} className="relative text-center">
            <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl border border-brand/20 bg-[linear-gradient(135deg,rgba(195,0,2,0.2),rgba(195,0,2,0.05))]">
              <IconImage src={item.icon} className="size-8" />
              {index < processSteps.length - 1 ? (
                <span className="absolute left-full top-1/2 hidden h-px w-[calc(100vw/7)] -translate-y-1/2 bg-gradient-to-r from-brand/30 to-transparent lg:block" />
              ) : null}
            </div>
            <p className="mt-6 font-display text-xs uppercase leading-4 text-brand">
              {item.step}
            </p>
            <h3 className="mt-2 font-display text-lg leading-[27px] text-cream">
              {item.title}
            </h3>
            <p className="mx-auto mt-2 max-w-[15.2rem] text-sm leading-[22.75px] text-cream/60">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FollowWork() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 lg:px-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold leading-8 text-cream">Follow Our Work</h3>
        <div className="mt-6 flex items-center justify-center gap-4">
          {socialIcons.map((item) => (
            <a
              aria-label={item.label}
              className="flex size-14 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] transition hover:border-brand/40 hover:bg-brand/10"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <IconImage src={item.icon} className="size-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickCallCard() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-40 pt-16 sm:px-8 lg:px-12">
      <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-[linear-gradient(165deg,rgba(195,0,2,0.1),transparent)] px-6 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/20 blur-[64px]" />
        <div className="relative z-[1]">
          <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-[48px] lg:leading-[48px]">
            Prefer a quick call?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream/70 sm:text-lg">
            Send a short brief by email if you prefer to start the conversation that way.
          </p>
          <a
            className="mt-8 inline-flex h-16 w-full max-w-[334px] items-center justify-center gap-3 rounded-full bg-white px-5 font-display text-base tracking-[2px] text-background transition hover:-translate-y-0.5 hover:bg-cream"
            href="mailto:hello@thefelyxgrid.com?subject=Free%20consultation%20request"
          >
            <IconImage src={iconCalendar} className="size-5" />
            Request Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[linear-gradient(137deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:min-h-[795px] lg:p-12">
      <h2 className="font-display text-3xl leading-9 text-cream">Get in Touch</h2>
      <p className="mt-2 text-base leading-6 text-cream/60">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form
        action="https://api.web3forms.com/submit"
        className="mt-8 grid gap-6"
        method="POST"
      >
        <input name="access_key" type="hidden" value={web3formsAccessKey} />
        <input name="subject" type="hidden" value="New project inquiry from The Felyx Grid" />
        <input name="from_name" type="hidden" value="The Felyx Grid Website" />
        <input name="botcheck" className="hidden" tabIndex={-1} type="checkbox" />
        <div className="grid gap-6 md:grid-cols-2">
          <FormField label="Name" name="name" placeholder="John Doe" required />
          <FormField
            label="Email"
            name="email"
            placeholder="john@company.com"
            required
            type="email"
          />
        </div>
        <FormField label="Company" name="company" placeholder="Your Company Name" />
        <div className="grid gap-6 md:grid-cols-2">
          <SelectField
            label="Budget Range"
            name="budget_range"
            options={[
              "Under ₹50,000",
              "₹50,000 - ₹1,00,000",
              "₹1,00,000 - ₹2,50,000",
              "₹2,50,000 - ₹5,00,000",
              "₹5,00,000+",
              "Custom budget",
            ]}
          />
          <SelectField
            label="Project Type"
            name="project_type"
            options={["Website", "Brand Identity", "SaaS Product", "Creative Direction"]}
          />
        </div>
        <label className="grid gap-2">
          <span className="text-sm font-medium leading-5 text-cream">Project Details *</span>
          <textarea
            className="min-h-[170px] resize-none rounded-[14px] border border-white/10 bg-white/[0.05] px-4 py-3 text-base leading-6 text-cream outline-none transition placeholder:text-cream/50 focus:border-brand/50 focus:bg-white/[0.07]"
            name="message"
            placeholder="Tell us about your project, goals, and timeline..."
            required
          />
        </label>
        <button
          className="flex h-16 items-center justify-center gap-3 rounded-[14px] bg-[linear-gradient(90deg,#c30002,#a00002)] px-5 py-5 font-display text-base leading-6 text-cream transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(195,0,2,0.22)]"
          type="submit"
        >
          Send Inquiry
          <IconImage src={iconSend} />
        </button>
      </form>
    </div>
  );
}

function ContactSidebar() {
  return (
    <aside className="grid gap-6 lg:content-start">
      <div className="rounded-3xl border border-brand/20 bg-[linear-gradient(149deg,rgba(195,0,2,0.1),transparent)] px-6 py-8 sm:px-8 lg:min-h-[238px]">
        <h3 className="text-xl font-bold leading-7 text-cream">Contact Information</h3>
        <div className="mt-6 grid gap-6">
          <InfoRow
            href="mailto:hello@thefelyxgrid.com"
            icon={iconMail}
            label="Email us"
            value="hello@thefelyxgrid.com"
          />
          <InfoRow icon={iconClock} label="Availability" value="Now booking Q3 2026" />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[linear-gradient(151deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 sm:px-8 lg:min-h-[226px]">
        <h3 className="text-xl font-bold leading-7 text-cream">What to Expect</h3>
        <ul className="mt-4 grid gap-3">
          {expectations.map((item) => (
            <li className="flex items-center gap-3 text-sm leading-5 text-cream/70" key={item}>
              <span className="size-1.5 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-cream">
      <div className="pointer-events-none absolute left-[calc(50%+32rem)] top-[56rem] h-[926px] w-[957px] -translate-x-1/2 -translate-y-1/2 rounded-[672px] bg-[radial-gradient(ellipse_at_center,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] blur-[30px]" />
      <div className="pointer-events-none absolute left-[calc(50%-32rem)] top-40 h-[482px] w-[605px] -translate-x-1/2 rounded-[425px] bg-[radial-gradient(ellipse_at_center,rgba(195,0,2,0.25),rgba(195,0,2,0.05)_50%,transparent_80%)] blur-[19px]" />

      <section className="relative z-[1] mx-auto max-w-[896px] px-5 pb-36 pt-40 text-center">
        <h1 className="font-display text-[clamp(2.6rem,5vw,47px)] leading-[1.18] text-cream lg:leading-[72px]">
          Ready to build
          <br />
          your
          <br />
          <span className="text-brand">project?</span>
        </h1>
        <a
          className="mt-6 inline-flex h-16 items-center justify-center gap-3 rounded-full bg-brand px-8 font-display text-[15px] text-white transition hover:-translate-y-0.5 hover:bg-[#d8001f]"
          href="#contact-form"
        >
          Start Your Project
          <IconImage src={iconArrow} />
        </a>
      </section>

      <section
        className="relative z-[1] mx-auto grid max-w-[1304px] gap-6 px-5 sm:px-8 lg:grid-cols-[minmax(0,853px)_403px] lg:gap-12"
        id="contact-form"
      >
        <ContactForm />
        <ContactSidebar />
      </section>

      <ProcessPreview />
      <FollowWork />
      <QuickCallCard />
    </main>
  );
}
