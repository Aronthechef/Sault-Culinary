import { motion } from "framer-motion";

/*
  SAULT landing page
  Notes:
  - All icons are inline SVGs so the preview does not depend on external icon CDNs.
  - The hero image is intentionally set to a masculine chef/knife visual direction.
  - Tailwind utility classes control layout, spacing, color, and responsive behavior.
*/

function ArrowIcon({ className = "", size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CircleIcon({ className = "", size = 88 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

function SignalIcon({ className = "", size = 34 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
    </svg>
  );
}

function SpeedIcon({ className = "", size = 34 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 24L34 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 32H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function SparkIcon({ className = "", size = 34 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6L28.5 19.5L42 24L28.5 28.5L24 42L19.5 28.5L6 24L19.5 19.5L24 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M37 7V15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M33 11H41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon({ className = "", size = 34 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="12" y="21" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 21V16C17 11.6 20.1 8 24 8C27.9 8 31 11.6 31 16V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}

const heroImageUrl = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop";
const founderImageUrl = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop";

const engagements = [
  {
    label: "01",
    title: "SAULT SIGNAL SESSION™",
    desc: "Rapid white-space intelligence and immediate concept direction for brands that need sharper external perspective now.",
  },
  {
    label: "02",
    title: "SAULT EMBED™",
    desc: "A private ongoing culinary intelligence partnership for teams that need outside thinking integrated into the innovation rhythm.",
  },
  {
    label: "03",
    title: "SAULT TERRITORY MAP™",
    desc: "Category opportunity architecture before development dollars are spent chasing incremental ideas.",
  },
  {
    label: "04",
    title: "SAULT LAB ACCESS™",
    desc: "Proprietary culinary experience systems, future concept platforms, and next-generation flavor formats.",
  },
];

const pillars = [
  {
    Icon: SignalIcon,
    title: "Outside Signal",
    desc: "We identify emerging menu, flavor, and behavioral white space beyond internal repetition.",
  },
  {
    Icon: SpeedIcon,
    title: "Compressed Speed",
    desc: "Built to move faster than traditional internal development loops.",
  },
  {
    Icon: SparkIcon,
    title: "Ownable Thinking",
    desc: "Rituals, systems, and flavor architecture designed for distinction.",
  },
  {
    Icon: LockIcon,
    title: "Confidential Access",
    desc: "Senior-level external ideation without permanent internal expansion.",
  },
];

const expectedEngagementTitles = [
  "SAULT SIGNAL SESSION™",
  "SAULT EMBED™",
  "SAULT TERRITORY MAP™",
  "SAULT LAB ACCESS™",
];

// Lightweight runtime checks to catch accidental content deletions while editing.
console.assert(engagements.length === 4, "Expected four SAULT engagement models.");
console.assert(pillars.length === 4, "Expected four SAULT value pillars.");
console.assert(
  expectedEngagementTitles.every((title) => engagements.some((item) => item.title === title)),
  "Expected all core SAULT offers to render."
);
console.assert(heroImageUrl.includes("unsplash"), "Expected a valid hero image URL.");

export default function SaultLandingPage() {
  return (
    <main className="min-h-screen bg-[#f3eee3] text-[#10100e] selection:bg-[#10100e] selection:text-[#f3eee3]">
      {/* Hero section: the first major brand impression. The right-side image is the masculine chef/knife visual. */}
      <section className="relative overflow-hidden border-b border-[#1f1b16]/20">
        <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full border border-[#1f1b16]/10" />
        <div className="absolute right-[-10rem] bottom-[-10rem] h-[28rem] w-[28rem] rounded-full border border-[#1f1b16]/10" />

        <nav className="flex items-center justify-between px-6 py-7 md:px-14">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#10100e]">
              <div className="h-[2px] w-7 bg-[#10100e]" />
            </div>
            <div className="text-xs font-semibold tracking-[0.35em]">SAULT CULINARY</div>
          </div>

          <a className="hidden items-center gap-2 text-xs font-semibold tracking-[0.25em] md:flex" href="#contact">
            INQUIRE <ArrowIcon size={15} />
          </a>
        </nav>

        <div className="grid min-h-[82vh] grid-cols-1 items-stretch md:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-center px-6 py-16 md:px-14">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#8c7449]"
            >
              Private culinary innovation partner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-5xl text-[12vw] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[6.6rem]"
            >
              Sharper Signal.
              <br />
              Faster Concepts.
              <br />
              Ownable Territory.
            </motion.h1>

            <div className="mt-10 grid max-w-3xl gap-8 border-l border-[#10100e] pl-7 md:grid-cols-[1.2fr_.8fr]">
              <p className="text-lg leading-8 text-[#3f3a32]">
                SAULT helps restaurant, QSR, CPG, and emerging food brands uncover the menu white space, flavor systems, and consumer experiences internal teams often miss.
              </p>
              <div className="text-xs font-semibold uppercase leading-7 tracking-[0.24em] text-[#8c7449]">
                Stealth development
                <br />
                Strategic concept generation
                <br />
                Confidential partnership
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-[#111] md:min-h-full">
            {/* Hero image: chosen/positioned to read as a male chef hand with a knife. */}
            <div
              className="absolute inset-5 rounded-[2rem] bg-cover bg-center grayscale-[15%]"
              style={{ backgroundImage: `url(${heroImageUrl})` }}
              aria-label="Masculine chef hands working with a knife in a dark culinary setting"
            />
            <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 rounded-3xl border border-white/20 bg-black/30 p-6 text-[#f3eee3] backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c4a15f]">
                Built for brands that need what internal teams miss
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem section: establishes why an external innovation partner matters. */}
      <section className="grid grid-cols-1 border-b border-[#1f1b16]/20 md:grid-cols-[.8fr_1.2fr]">
        <div className="border-b border-[#1f1b16]/20 p-8 md:border-b-0 md:border-r md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8c7449]">The problem</p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-6xl">
            Most food innovation is happening inside the same walls.
          </h2>
        </div>
        <div className="p-8 md:p-14">
          <p className="max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-[#2d2923]">
            Brands do not lose relevance because they stop developing. They lose relevance because they stop seeing what is no longer visible from inside.
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#514b41]">
            SAULT operates as a discreet external innovation unit — built to bring outside signal, strategic culinary intelligence, and commercially aware concept development into the moments where internal innovation begins to plateau.
          </p>
        </div>
      </section>

      {/* Pillars: quick proof points that explain the SAULT advantage. */}
      <section className="px-6 py-20 md:px-14">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#8c7449]">Why brands engage SAULT</p>
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">
              Outside signal.
              <br />
              Internal impact.
            </h2>
          </div>
          <CircleIcon className="hidden text-[#8c7449] md:block" />
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-[#10100e]/25 bg-[#10100e]/25 md:grid-cols-4">
          {pillars.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-[#f3eee3] p-8">
              <Icon className="mb-12 text-[#8c7449]" />
              <h3 className="mb-4 text-xl font-black uppercase tracking-[-0.02em]">{title}</h3>
              <p className="leading-7 text-[#514b41]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement suite: maps SAULT offers into clear buying doors. */}
      <section className="bg-[#11100e] px-6 py-24 text-[#f3eee3] md:px-14">
        <div className="mb-14 grid gap-8 md:grid-cols-[.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4a15f]">Strategic engagements</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">
            Flexible access to private culinary intelligence.
          </h2>
        </div>

        <div className="space-y-4">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="group grid items-center gap-6 rounded-[2rem] border border-white/15 bg-white/[0.03] p-6 transition-all hover:bg-white/[0.07] md:grid-cols-[.16fr_.5fr_1fr_.12fr] md:p-8"
            >
              <div className="text-sm font-semibold tracking-[0.3em] text-[#c4a15f]">{item.label}</div>
              <h3 className="text-2xl font-black uppercase tracking-[0.05em]">{item.title}</h3>
              <p className="max-w-3xl leading-7 text-[#cfc8b9]">{item.desc}</p>
              <ArrowIcon className="text-[#c4a15f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Founder section: reinforces credibility and makes the practice feel human. */}
      <section className="grid grid-cols-1 border-b border-[#1f1b16]/20 md:grid-cols-2">
        <div
          className="min-h-[520px] bg-cover bg-center grayscale-[30%]"
          style={{ backgroundImage: `url(${founderImageUrl})` }}
          aria-label="Founder credibility image"
        />
        <div className="flex flex-col justify-center p-8 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8c7449]">Founder authority</p>
          <h2 className="mb-8 text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">Led by Aron Habiger</h2>
          <p className="text-xl leading-9 text-[#3f3a32]">
            Corporate culinary innovation executive operating at the intersection of QSR commercialization, flavor systems, menu trend intelligence, and disruptive concept development.
          </p>
          <div className="mt-10 grid gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8c7449] md:grid-cols-2">
            <div className="border-t border-[#10100e]/25 pt-4">QSR commercialization</div>
            <div className="border-t border-[#10100e]/25 pt-4">Flavor architecture</div>
            <div className="border-t border-[#10100e]/25 pt-4">Concept systems</div>
            <div className="border-t border-[#10100e]/25 pt-4">Innovation strategy</div>
          </div>
        </div>
      </section>

      {/* Final CTA: gives prospects one clear action. */}
      <section id="contact" className="relative overflow-hidden px-6 py-28 text-center md:px-14">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10100e]/10" />
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#8c7449]">
          Private engagements are selectively limited
        </p>
        <h2 className="mx-auto max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">
          Let's build what's next.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#514b41]">
          For brands that need sharper concepts, faster signal, and more ownable menu territory.
        </p>
        <button className="mt-10 rounded-full border border-[#10100e] px-9 py-5 text-xs font-semibold uppercase tracking-[0.28em] transition-all hover:bg-[#10100e] hover:text-[#f3eee3]">
          Start a conversation
        </button>
      </section>
    </main>
  );
}
