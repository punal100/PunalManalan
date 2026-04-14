import Image from "next/image";
import { portfolioData } from "./portfolio-data";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#featured-work", label: "Featured Work" },
  { href: "#open-source", label: "Open Source" },
  { href: "#arsenal", label: "Arsenal" },
];

export default function Home() {
  const {
    identity,
    about,
    experience,
    featuredProjects,
    selectedProjects,
    unrealRepositoryGroups,
    contributions,
    legacyProjects,
    skillDomains,
  } = portfolioData;

  const totalFeaturedScreenshots = featuredProjects.reduce(
    (count, project) => count + project.gallery.length,
    0,
  );

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-white transition hover:text-accent"
          >
            <Image
              src="/profile.jpeg"
              alt="Punal Manalan"
              width={40}
              height={40}
              className="size-10 rounded-full border border-white/12 object-cover"
            />
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
        <section className="grid gap-10 pb-16 pt-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start lg:gap-14 lg:pt-20">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/8 px-4 py-2 font-mono text-xs uppercase tracking-[0.34em] text-accent">
              {identity.headline}
            </p>

            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.36em] text-slate-400">
                Personal Resume & Portfolio
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {identity.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                {identity.focus}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#featured-work"
                className="inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#79eadc]"
              >
                Explore Featured Work
              </a>
              <a
                href="#open-source"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                Browse Open Source Work
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {identity.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-accent/35 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {identity.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/8 bg-white/[0.045] p-4 backdrop-blur-sm"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-panel p-6 backdrop-blur-sm">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                Public Profiles
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                {identity.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 basis-48 rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4 transition hover:border-accent/30 hover:bg-white/[0.05]"
                  >
                    <p className="text-sm font-semibold text-white">{link.label}</p>
                    <p className="mt-2 break-all text-sm leading-6 text-slate-400">{link.href}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,26,40,0.94),rgba(6,17,27,0.84))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)] lg:p-8">
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-accent/18 blur-2xl" />
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-400">
                  Current Focus
                </p>
                <p className="text-2xl leading-9 text-white">
                  Building cross-platform systems, Unreal Engine workflows, and AI-adjacent tooling with production-minded engineering.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.6rem] border border-white/8 bg-white/[0.035] p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>At a Glance</span>
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent-warm">
                    Snapshot
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {[
                    `${experience.length} professional roles across R&D, engine, and systems work`,
                    `${selectedProjects.length} selected public project highlights`,
                    `${unrealRepositoryGroups.length} grouped Unreal tooling and repository tracks`,
                    `${featuredProjects.length} featured interactive project case studies`,
                    `${totalFeaturedScreenshots} featured project screenshots`,
                  ].map((area) => (
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
                    Systems Focus
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Backend, networking, and cross-platform runtime work
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                    Engine Focus
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Unreal Engine, XR workflows, and shipped game production
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="about"
          className="space-y-8 border-t border-white/8 py-16"
        >
          <header className="max-w-2xl space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Cross-platform systems thinking with production-level engine and infrastructure depth.
            </h2>
          </header>

          <article className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 leading-8 text-slate-300 backdrop-blur-sm">
            <p>{about.introduction}</p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
              {about.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="experience" className="space-y-8 border-t border-white/8 py-16">
          <header className="max-w-2xl space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
              Experience
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Professional work spanning Unreal R&amp;D, runtime systems, networking, and shipped products.
            </h2>
          </header>

          <div className="grid gap-5">
              {experience.map((role) => (
                <article
                  key={`${role.company}-${role.title}`}
                  className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                >
                  <div className="flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                        {role.company}
                        {role.location ? `, ${role.location}` : ""}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{role.title}</h3>
                    </div>
                    <p className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-slate-300">
                      {role.period}
                    </p>
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-300">{role.summary}</p>

                  <ul className="mt-6 grid gap-4 md:grid-cols-2">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.4rem] border border-white/8 bg-white/[0.035] p-4 text-sm leading-7 text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {role.links && role.links.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {role.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-accent/30 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
        </section>

        <section id="featured-work" className="border-t border-white/8 py-16">
          <div className="space-y-10">
            <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
                  Featured Work
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Unreal Engine case studies spanning real-time collaboration, combat systems, and direct ownership.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                A focused selection of projects where the work centered on systems depth, gameplay execution,
                and hands-on delivery rather than only concept exploration.
              </p>
            </header>

            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="space-y-6 rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, index) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            index === 0
                              ? "inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#79eadc]"
                              : "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                          }
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </header>

                  <p className="text-lg font-medium text-accent-warm">{project.analogy}</p>
                  <p className="text-base leading-8 text-slate-300">{project.summary}</p>

                    <div className="grid gap-5 lg:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-slate-500">
                          Capabilities
                        </p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                          {project.capabilities.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-slate-500">
                          Personal Contributions
                        </p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                          {project.contributions.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-accent-warm" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {project.gallery.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-slate-950/60"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="h-56 w-full object-cover"
                          />
                          <figcaption className="border-t border-white/8 px-4 py-3 text-sm text-slate-300">
                            {image.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="open-source" className="border-t border-white/8 py-16">
          <div className="space-y-10">
            <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent-warm">
                  Open Source and Public Work
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Maintained products, engine tooling, public contributions, and legacy projects.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                This section includes the selected project highlights, grouped Unreal repository families,
                outside contributions, and older API-dependent work described in the resume.
              </p>
            </header>

            <section className="space-y-5">
              <h3 className="text-2xl font-semibold text-white">Selected Projects and Achievements</h3>
              <div className="grid gap-5 xl:grid-cols-2">
                {selectedProjects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 transition hover:border-white/16 hover:bg-white/[0.055]"
                  >
                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                    {project.traction ? (
                      <p className="mt-3 text-sm text-accent-warm">{project.traction}</p>
                    ) : null}
                    {project.links.length > 0 ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/30 hover:text-white"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h3 className="text-2xl font-semibold text-white">Additional Unreal Engine Public Repositories</h3>
              <div className="grid gap-5 xl:grid-cols-2">
                {unrealRepositoryGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6"
                  >
                    <h4 className="text-xl font-semibold text-white">{group.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{group.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.repositories.map((repo) => (
                        <a
                          key={repo.href}
                          href={repo.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/30 hover:text-white"
                        >
                          {repo.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h3 className="text-2xl font-semibold text-white">Other Open Source Contributions</h3>
              <div className="grid gap-5 xl:grid-cols-3">
                {contributions.map((contribution) => (
                  <article
                    key={contribution.project}
                    className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6"
                  >
                    <h4 className="text-xl font-semibold text-white">{contribution.project}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{contribution.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {contribution.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/30 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h3 className="text-2xl font-semibold text-white">Legacy API-Dependent Projects</h3>
              <div className="grid gap-5 xl:grid-cols-2">
                {legacyProjects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6"
                  >
                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                    {project.links.length > 0 ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/30 hover:text-white"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
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
              Each category reflects the technical domains explicitly covered in the resume rather than a short keyword cloud.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {skillDomains.map((group, index) => (
              <article
                key={group.label}
                className="group rounded-[1.8rem] border border-white/8 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.055]"
              >
                <div
                  className={`inline-flex rounded-full border border-white/8 bg-gradient-to-r px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.32em] ${[
                    "from-cyan-400/12 to-cyan-500/4 text-cyan-100",
                    "from-emerald-400/12 to-emerald-500/4 text-emerald-100",
                    "from-amber-300/14 to-amber-500/5 text-amber-50",
                    "from-sky-400/12 to-sky-500/5 text-sky-100",
                    "from-white/10 to-white/4 text-slate-100",
                  ][index % 5]}`}
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
          <p>{identity.name} Portfolio</p>
          <p className="font-mono uppercase tracking-[0.28em] text-slate-500">
            Professional Software Engineer | Unreal Engine | Systems | AI Tooling
          </p>
        </div>
      </footer>
    </div>
  );
}
