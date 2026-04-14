const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#arsenal", label: "Arsenal" },
];

const focusAreas = [
  "Immersive software systems",
  "Game engine workflows",
  "Mobile product development",
  "Applied AI and machine learning",
];

const experienceHighlights = [
  "Spearheaded research and development initiatives from early exploration through technical implementation.",
  "Worked at the intersection of new ideas, prototyping, and practical software engineering decisions.",
  "Resigned in March 2026 to deepen technical knowledge and continue building more advanced systems.",
];

const skillGroups = [
  {
    label: "Languages",
    tone: "from-cyan-400/12 to-cyan-500/4 text-cyan-100",
    items: ["C++", "Python"],
  },
  {
    label: "Game & 3D Engines",
    tone: "from-emerald-400/12 to-emerald-500/4 text-emerald-100",
    items: ["Unreal Engine 5", "Maya", "Blender"],
  },
  {
    label: "Mobile Development",
    tone: "from-amber-300/14 to-amber-500/5 text-amber-50",
    items: ["Android Development", "iOS Development"],
  },
  {
    label: "Core Concepts",
    tone: "from-sky-400/12 to-sky-500/5 text-sky-100",
    items: ["AI & Machine Learning"],
  },
  {
    label: "Tools",
    tone: "from-white/10 to-white/4 text-slate-100",
    items: ["VS Code", "Git", "GitHub"],
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-white transition hover:text-accent"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[0.7rem] font-semibold">
              PM
            </span>
            PUNAL MANALAN
          </a>
          <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/4 p-1 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 lg:px-8">
        <section className="grid gap-10 pb-16 pt-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-end lg:gap-14 lg:pt-20">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/8 px-4 py-2 font-mono text-xs uppercase tracking-[0.34em] text-accent">
              Software Developer | Research & Development
            </p>

            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.36em] text-slate-400">
                Personal Resume & Portfolio
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Punal Manalan builds software with a researcher&apos;s curiosity and an engineer&apos;s discipline.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Developer with a strong foundation in research and development,
                constantly exploring new technologies. Passionate about immersive
                experiences and intelligent systems, with focus across software
                engineering, game engines, and mobile development.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#79eadc]"
              >
                Explore Experience
              </a>
              <a
                href="#arsenal"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                View Technical Arsenal
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Discipline", "Software Engineering"],
                ["Specialty", "R&D Prototyping"],
                ["Direction", "Intelligent + Immersive Systems"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/8 bg-white/[0.045] p-4 backdrop-blur-sm"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,26,40,0.94),rgba(6,17,27,0.84))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)] lg:p-8">
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-accent/18 blur-2xl" />
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-400">
                  Current Trajectory
                </p>
                <p className="text-2xl leading-9 text-white">
                  Deepening expertise across real-time systems, engine tooling,
                  mobile engineering, and applied intelligence.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.6rem] border border-white/8 bg-white/[0.035] p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Focus Matrix</span>
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent-warm">
                    Active
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                    Base Layer
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Research to implementation
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                    Tools of Choice
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    UE5, Python, C++
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="about"
          className="grid gap-8 border-t border-white/8 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
        >
          <header className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Rooted in experimentation, built for real software delivery.
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <article className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 leading-8 text-slate-300 backdrop-blur-sm">
              <p>
                Punal Manalan approaches development through research and
                iteration. The work starts with curiosity, moves through
                exploration, and ends with software that can actually be used,
                tested, and improved.
              </p>
              <p className="mt-5">
                That mindset shows up in cross-disciplinary interests: engine
                tooling, immersive experiences, mobile products, and intelligent
                systems. The throughline is consistent: understand the problem
                deeply, then build with precision.
              </p>
            </article>

            <div className="rounded-[2rem] border border-white/8 bg-panel p-6 backdrop-blur-sm">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                Strength Profile
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ["Research", "Exploring unfamiliar systems and technologies quickly"],
                  ["Execution", "Translating concepts into practical software structure"],
                  ["Range", "Comfort across engines, mobile, and intelligent systems"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/8 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            <header className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
                Experience
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Research-driven product thinking with hands-on technical follow-through.
              </h2>
            </header>

            <article className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <div className="flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                    Featured Role
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    R&amp;D Developer at OpEzee
                  </h3>
                </div>
                <p className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-slate-300">
                  Through March 2026
                </p>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                Spearheaded research and development initiatives, bridging the
                gap between innovative concepts and technical implementation.
                The role centered on discovering what could work, validating the
                technical path, and moving promising ideas into buildable form.
              </p>

              <ul className="mt-8 grid gap-4 lg:grid-cols-3">
                {experienceHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5 text-sm leading-7 text-slate-300 transition duration-300 hover:border-accent/30 hover:bg-white/[0.055]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="arsenal" className="border-t border-white/8 py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
                Technical Arsenal
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Built from strong fundamentals, shaped across multiple domains.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Each category represents a working area rather than a keyword list.
              The emphasis stays on usable engineering breadth and depth.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.label}
                className="group rounded-[1.8rem] border border-white/8 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.055]"
              >
                <div
                  className={`inline-flex rounded-full border border-white/8 bg-gradient-to-r px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.32em] ${group.tone}`}
                >
                  {group.label}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition duration-300 group-hover:border-accent/30 group-hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Punal Manalan Portfolio</p>
          <p className="font-mono uppercase tracking-[0.28em] text-slate-500">
            Software Developer | Research &amp; Development
          </p>
        </div>
      </footer>
    </div>
  );
}
