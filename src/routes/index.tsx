import { createFileRoute } from "@tanstack/react-router";

import heroLoft from "@/assets/hero-loft.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import serviceLoft from "@/assets/service-loft.jpg";
import serviceExtension from "@/assets/service-extension.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "London Dream Lofts | Loft Conversions, Extensions & Renovations" },
      {
        name: "description",
        content:
          "Loft conversions, extensions and renovations designed around the way you live. One accountable London team, from first plan to final finish.",
      },
      { property: "og:title", content: "London Dream Lofts" },
      {
        property: "og:description",
        content:
          "Beautiful spaces, thoughtfully built. Loft conversions, extensions and renovations across London.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  "Loft Conversions",
  "Extensions",
  "Renovations",
  "Our Work",
  "About",
];

const projects = [
  {
    src: project1,
    w: 1440,
    h: 900,
    span: "md:col-span-7",
    offset: "",
    ratio: "aspect-[16/10]",
    title: "Open-Plan Loft Conversion",
    label: "Loft Conversion",
    alt: "Bright converted loft with industrial windows, exposed beams and oak floors",
  },
  {
    src: project2,
    w: 1024,
    h: 1280,
    span: "md:col-span-5",
    offset: "md:mt-16",
    ratio: "aspect-[4/5]",
    title: "Sage Living Room",
    label: "Full Home Renovation",
    alt: "Renovated living room with sage walls, linen sofa and brass wall light",
  },
  {
    src: project3,
    w: 1024,
    h: 1280,
    span: "md:col-span-5",
    offset: "md:-mt-8",
    ratio: "aspect-[4/5]",
    title: "Skylit Loft Bedroom",
    label: "Loft Conversion",
    alt: "Loft bedroom with a large skylight above a timber bed",
  },
  {
    src: project4,
    w: 1440,
    h: 900,
    span: "md:col-span-7",
    offset: "md:mt-10",
    ratio: "aspect-[16/10]",
    title: "Garden Kitchen Extension",
    label: "Side Infill & Extension",
    alt: "Open-plan kitchen extension with stone worktops and full-height garden glazing",
  },
];

const services = [
  {
    src: serviceLoft,
    title: "Loft Conversions",
    copy: "Create valuable new living space from your existing roof.",
    alt: "Oak staircase rising into a bright loft conversion",
  },
  {
    src: serviceExtension,
    title: "Extensions",
    copy: "Thoughtfully designed additional space that feels natural to your home.",
    alt: "Rear extension of a London brick home glowing at dusk",
  },
  {
    src: serviceRenovation,
    title: "Renovations",
    copy: "Beautifully finished improvements that transform how your home works.",
    alt: "Renovated bathroom with stone tiling, timber vanity and brass taps",
  },
];

function Index() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-base font-semibold tracking-wide whitespace-nowrap text-charcoal sm:text-lg">
              London Dream Lofts
            </span>

            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-sage sm:inline">
              London
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-charcoal/70 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href="#work"
                className="transition-colors duration-300 hover:text-charcoal"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="rounded-sm bg-charcoal px-4 py-2.5 text-[10px] font-semibold whitespace-nowrap uppercase tracking-[0.14em] text-ivory transition-opacity duration-300 hover:opacity-90 sm:px-5 sm:text-[11px]"
          >
            Get a free quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroLoft}
          width={1920}
          height={1200}
          alt="Finished London loft conversion with roof light, oak floors and morning daylight"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/0 via-charcoal/14 via-[44%] to-charcoal/680" />
        <div className="relative mx-auto max-w-7xl px-6 pt-69 pb-7 md:pt-80 md:pb-17">
          <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-charcoal/85">
            London Loft Specialists
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] font-semibold text-ivory md:text-7xl">
            More Space.
            <br />
            Beautifully Designed.
          </h1>
          
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#quote"
              className="rounded-sm bg-ivory px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-opacity duration-300 hover:opacity-90"
            >
              Get a free quote
            </a>
            <a
              href="#work"
              className="border-b border-ivory/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:border-ivory"
            >
              View our work
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-charcoal/10 bg-stone/40">
        <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-10">
            <div className="flex gap-3">
              <span className="mt-1.5 h-7 w-px shrink-0 bg-brass" />
              <div>
                <p className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">20+</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-charcoal/60">Years Experience</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1.5 h-7 w-px shrink-0 bg-brass" />
              <div>
                <p className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">10</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-charcoal/60">Years Guarantee</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1.5 h-7 w-px shrink-0 bg-brass" />
              <div>
                <p className="font-serif text-lg font-semibold leading-tight text-charcoal md:text-xl">Free Survey</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-charcoal/60">&amp; written quotation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1.5 h-7 w-px shrink-0 bg-brass" />
              <div>
                <p className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                  4.9<span className="ml-1 align-top text-xs font-normal text-charcoal/50">/5</span>
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-charcoal/60">56 Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PROJECT GALLERY */}
      <section id="work" className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div className="max-w-lg">
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-brass">
                Selected work
              </p>
              <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
                Spaces We've Transformed
              </h2>
            </div>
            <a
              href="#quote"
              className="hidden border-b border-brass pb-1 text-sm font-semibold text-charcoal md:inline"
            >
              View all projects
            </a>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {projects.map((p) => (
              <div key={p.title} className={`col-span-12 ${p.span} ${p.offset}`}>
                <div className={`w-full overflow-hidden ${p.ratio}`}>
                  <img
                    src={p.src}
                    width={p.w}
                    height={p.h}
                    loading="lazy"
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 font-serif text-lg text-charcoal">{p.title}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-sage">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-stone/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-brass">How it works</p>
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-charcoal md:text-4xl">
            One Team. One Clear Process.
          </h2>
          <p className="mt-5 max-w-xl text-charcoal/70">
            You never have to coordinate multiple trades yourself. One accountable team plans,
            builds and finishes the work, with the same people answering your questions throughout.
          </p>
          <div className="mt-16 space-y-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <span className="font-serif text-5xl text-stone">01</span>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">Listen and survey</h3>
                <p className="mt-3 max-w-md text-charcoal/70">
                  We start with a walk-through of your home and a conversation about how you live.
                  Structure, light and proportion are assessed before any design is drawn.
                </p>
              </div>
              <div className="bg-charcoal p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="size-12 rounded-full bg-sage" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-3/4 bg-ivory/20" />
                    <div className="h-2 w-1/2 bg-ivory/10" />
                  </div>
                </div>
                <div className="mb-6 h-px bg-ivory/15" />
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-brass" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-2/3 bg-ivory/20" />
                    <div className="h-2 w-1/2 bg-ivory/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
              <div className="order-2 border border-charcoal/10 p-8 md:order-1 md:p-10">
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square bg-stone" />
                  <div className="aspect-square bg-sage/40" />
                  <div className="aspect-square bg-brass/40" />
                </div>
                <div className="mt-3 h-2 w-full bg-stone" />
              </div>
              <div className="order-1 md:order-2">
                <span className="font-serif text-5xl text-stone">02</span>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">Design and plan</h3>
                <p className="mt-3 max-w-md text-charcoal/70">
                  Layouts, materials and detailing are considered together, with clear drawings and
                  a defined scope, so decisions are made on paper rather than on site.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <span className="font-serif text-5xl text-stone">03</span>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">Build and hand over</h3>
                <p className="mt-3 max-w-md text-charcoal/70">
                  A single team manages the build, keeps the site tidy and keeps you informed at
                  every stage — then hands over a finished, ready-to-live-in space.
                </p>
              </div>
              <div className="bg-sage/15 p-8 md:p-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-sage" />
                    <div className="h-2 flex-1 bg-ivory/60" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-sage" />
                    <div className="h-2 flex-1 bg-ivory/60" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-brass" />
                    <div className="h-2 w-2/3 bg-ivory/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-stone/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-[11px] uppercase tracking-[0.25em] text-brass">What we do</p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title}>
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={s.src}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    alt={s.alt}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl text-charcoal">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-charcoal/70">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-brass">
            Homeowner stories
          </p>
          <h2 className="mb-12 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
            Loved by Homeowners
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <figure className="bg-charcoal p-10 text-ivory md:col-span-2">
              <blockquote className="font-serif text-2xl leading-snug">
                “They understood exactly what we wanted without us having to over-explain. The loft
                feels like it was always meant to be this way.”
              </blockquote>
              <figcaption className="mt-8 text-sm text-ivory/60">
                Loft conversion · London homeowner
              </figcaption>
            </figure>
            <figure className="bg-stone/70 p-8">
              <blockquote className="font-serif text-lg leading-snug text-charcoal">
                “Calm, honest and meticulous. We always knew what was happening next.”
              </blockquote>
              <figcaption className="mt-6 text-sm text-sage">
                Kitchen extension · London homeowner
              </figcaption>
            </figure>
          </div>
          <div className="mt-10">
            <a
              href="https://www.google.com/search?client=ms-android-samsung-ss&hs=TRIB&sca_esv=2e45838e39a05840&sxsrf=APpeQntAi2hikmA0QJ__EOdTlDjk-8lyNA:1789368654736&q=london+dream+lofts+reviews&uds=AJ5uw1__928SWGWkVE3B4ZcFuu6rnQsUjWHOHLDDQjODa7zui01vimYxscCsfbQafmaM0bVTGlLAMs9U7iKGXvo-C9A1P9dtH0gKIYkSNZnuwpe4z_3B3Fea7omx_s0NqWmoW-0UGTRk7H4ms06D5Z_eVHGetA27bzDjDNEUfYZaQdeuEQOho1Hdlubnq_iwnwzY_qi5sCLT9ylVja2gXJ0gWa3JlrG0E25gyr6iDAU6N9Np-41-Mg_36C_xYWOfFQeh3zwFdK-6Z5PuqVWvS-ixm2TqrOUIQgJWlBsE1IsP7-WgNoKuP-Lws1oCP2hxb8HBy9rEVSZPa8_p1qtEdACl9y8dW6N3b1cz9mN7RNbWTTIL7yClKcJGXBCYqv46hkxl-PwiT_ga8L0v0lP3u257r-4MSpl_No5u9VpqahBaXaepDPYMdeXN7EI-QytA-56bqveNz37_QaQBxbPUbcIRkAky2aLNzUr2VVqVSs8_zhwkcWgjpRq_0QRiZ8iYNjp9JzrC6ebl2bxW1y8kcn0jKEUn4KFgBg&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_yo2yYJXjsdpbmc7Wt6s_Df_B7Jtyhv5a29pXeUScm0mPGAf4NERNHOOH2iydyWN95iiNWJbxgX4WWumugcrNdZL_Dh2cJ4y-iuc-oEBD0soxUqdSg%3D%3D&sa=X&sqi=2&ved=2ahUKEwjGqabYve2WAxXgaUEAHaxfCBwQk8gLegQIGRAB&ictx=1#ebo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-brass pb-1 text-sm font-semibold text-charcoal transition-colors duration-300 hover:text-brass"
            >
              More Reviews
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="quote" className="bg-brass/20 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-charcoal md:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-charcoal/70">
            Tell us what you're thinking and we'll help you explore what's possible.
          </p>
          <div className="mt-9">
            <a
              href="#quote"
              className="inline-block rounded-sm bg-charcoal px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory transition-opacity duration-300 hover:opacity-90"
            >
              Get a free quote
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="font-serif text-xl font-semibold">London Dream Lofts</span>
              <p className="mt-2 max-w-sm text-sm text-ivory/50">
                Loft conversions, extensions and renovations across London.
              </p>
              <p className="mt-4 text-sm text-ivory/60">
                Serving Greater London · hello@londondreamsloft.co.uk
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-ivory/60">
              <a href="#work" className="hover:text-ivory">
                Our Work
              </a>
              <a href="#quote" className="hover:text-ivory">
                Services
              </a>
              <a href="#quote" className="hover:text-ivory">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/40 md:flex-row">
            <span>© London Dream Lofts</span>
            <span className="flex gap-6">
              <a href="#quote">Privacy</a>
              <a href="#quote">Terms</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
