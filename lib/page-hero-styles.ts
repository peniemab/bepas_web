/** Styles partagés — structure hero « Construire parcelle » / BBC */
export const pageHeroStyles = {
  section: "relative overflow-hidden bg-foreground text-white",
  shellBase:
    "relative flex h-[85vh] min-h-[600px] w-full overflow-hidden",
  shellBottom: "items-end pb-32",
  /** Pages sans CTAs — contenu un peu plus haut dans l'image */
  shellRaised: "items-end pb-52 sm:pb-56 lg:pb-64",
  bgLayer: "absolute inset-0 h-[120%] -top-[10%] will-change-transform",
  content: "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  body: "max-w-5xl",
  breadcrumb:
    "mb-8 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80",
  breadcrumbSep: "text-[oklch(78%_0.14_165)]",
  eyebrow: "text-xs font-bold uppercase tracking-[0.2em] text-[oklch(78%_0.14_165)]",
  title:
    "text-3xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl",
  subtitleRow:
    "mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center",
  subtitle:
    "max-w-3xl text-base font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl",
  subtitleBar: "hidden h-1 w-20 shrink-0 bg-[oklch(78%_0.14_165)] sm:block",
  ctaRow: "mt-8 flex flex-wrap gap-3 sm:mt-10",
  ctaPrimary:
    "h-auto border-2 border-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground hover:brightness-[0.92]",
  ctaSecondary:
    "h-auto border-2 border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:[&_.btn-liquid__content]:!text-foreground",
  gradient:
    "absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80",
  overlay: "absolute inset-0 bg-primary/20 mix-blend-overlay",
  reveal:
    "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
} as const

export type PageHeroCta = {
  label: string
  href: string
}
