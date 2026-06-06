import Image from "next/image"
import Link from "next/link"

import { ConstruireScrollReveal } from "@/components/construire-parcelle/construire-scroll-reveal"
import { construireParcellePage } from "@/lib/construire-parcelle-content"

export function ConstruireParcelleProcess() {
  const { eyebrow, title, lead, split, items } = construireParcellePage.process

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 text-center sm:mb-12">
          <ConstruireScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </span>
          </ConstruireScrollReveal>
          <ConstruireScrollReveal delay={100}>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          </ConstruireScrollReveal>
        </div>

        <ul className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((phase, index) => (
            <li
              key={phase.title}
              className="rounded-xl border border-border/60 bg-white p-5 shadow-xs"
            >
              <ConstruireScrollReveal delay={index * 80}>
                <span className="text-3xl font-black text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug text-foreground">
                  {phase.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </ConstruireScrollReveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 border-t border-border/40 lg:grid-cols-2">
        <div className="relative flex min-h-[420px] flex-col justify-between border-b border-border/40 p-10 text-white lg:min-h-[480px] lg:border-b-0 lg:border-r lg:p-16 xl:p-24">
          <Image
            src={split.left.image.src}
            alt={split.left.image.alt}
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-foreground/85" />

          <div className="relative z-10">
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.3em] text-[oklch(78%_0.14_165)]">
              {split.left.eyebrow}
            </span>
            <h3 className="text-4xl font-black leading-tight md:text-5xl">
              {split.left.title}
              <br />
              {split.left.titleLine2}
            </h3>
          </div>

          <div className="relative z-10 mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {split.left.stats.map((stat) => (
              <div key={stat.label}>
                <span className="mb-1 block text-4xl font-black">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[420px] flex-col justify-center bg-gradient-to-br from-primary to-[oklch(0.48_0.14_242)] p-10 text-white lg:min-h-[480px] lg:p-16 xl:p-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] [background-size:18px_18px] opacity-40" />

          <div className="relative z-10 max-w-xl">
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.3em] text-white/60">
              {split.right.eyebrow}
            </span>
            <h3 className="mb-8 text-4xl font-black leading-tight md:text-5xl">
              {split.right.title}
              <br />
              {split.right.titleLine2}
            </h3>
            <p className="mb-10 text-lg font-light leading-relaxed text-white/90">
              {split.right.lead}
            </p>
            <Link
              href={split.right.cta.href}
              className="inline-block bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-lg transition-colors hover:bg-[oklch(78%_0.14_165)] hover:text-foreground"
            >
              {split.right.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
