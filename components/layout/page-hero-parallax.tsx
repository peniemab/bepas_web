"use client"

import Image from "next/image"
import Link from "next/link"
import {
  useCallback,
  useEffect,
  useState,
} from "react"

import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/hooks/use-mounted"
import { useParallaxBackground } from "@/lib/hooks/use-parallax-background"
import {
  pageHeroStyles as s,
  type PageHeroCta,
} from "@/lib/page-hero-styles"
import { cn } from "@/lib/utils"

export type PageHeroBreadcrumb = {
  label: string
  href: string
}

export type PageHeroSlide = {
  src: string
  alt: string
}

export type PageHeroParallaxProps = {
  image?: { src: string; alt: string }
  imageClassName?: string
  breadcrumb?: readonly PageHeroBreadcrumb[]
  eyebrow?: string
  title: string
  srTitle?: string
  subtitle?: string
  slides?: readonly PageHeroSlide[]
  slideIntervalMs?: number
  ctaPrimary?: PageHeroCta
  ctaSecondary?: PageHeroCta
  /** `raised` remonte le bloc texte (sans CTAs) ; `bottom` par défaut */
  contentAlign?: "bottom" | "raised"
  /** Tous les segments du fil d'Ariane sont des liens (navigation intra-page) */
  breadcrumbAllLinks?: boolean
  className?: string
}

export function PageHeroParallax({
  image,
  imageClassName,
  breadcrumb,
  eyebrow,
  title,
  srTitle,
  subtitle,
  slides,
  slideIntervalMs = 10_000,
  ctaPrimary,
  ctaSecondary,
  contentAlign = "bottom",
  breadcrumbAllLinks = false,
  className,
}: PageHeroParallaxProps) {
  const { heroRef, bgRef, luxuryEase } = useParallaxBackground()
  const mounted = useMounted()
  const [revealed, setRevealed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const hasSlides = Boolean(slides && slides.length > 0)
  const activeSlide = hasSlides ? slides![activeIndex] : null
  const displayImage = activeSlide
    ? { src: activeSlide.src, alt: activeSlide.alt }
    : image

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    setRevealed(true)
  }, [])

  useEffect(() => {
    if (!mounted || !hasSlides || slides!.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides!.length)
    }, slideIntervalMs)

    return () => window.clearInterval(timer)
  }, [mounted, hasSlides, slideIntervalMs, slides])

  if (!displayImage) return null

  const hasCtas = Boolean(ctaPrimary || ctaSecondary)

  return (
    <section className={cn(s.section, className)}>
      <div
        ref={heroRef}
        data-parallax-hero
        className={cn(
          s.shellBase,
          contentAlign === "raised" ? s.shellRaised : s.shellBottom
        )}
      >
        <div
          ref={bgRef}
          className={s.bgLayer}
          style={{ transform: "translate3d(0, 0, 0) scale(1.08)" }}
        >
          {hasSlides ? (
            slides!.map((slide, index) => {
              const isActive = index === activeIndex

              return (
                <div
                  key={slide.src}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className={cn("object-cover object-center", imageClassName)}
                    sizes="100vw"
                  />
                </div>
              )
            })
          ) : (
            <Image
              src={displayImage.src}
              alt={displayImage.alt}
              fill
              priority
              className={cn("object-cover object-center", imageClassName)}
              sizes="100vw"
            />
          )}
          <div className={s.gradient} />
          <div className={s.overlay} />
        </div>

        <div className={s.content}>
          {breadcrumb && breadcrumb.length > 0 ? (
            <nav
              aria-label="Fil d'Ariane"
              className={cn(
                s.breadcrumb,
                s.reveal,
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
              )}
              style={{ transitionTimingFunction: luxuryEase }}
            >
              {breadcrumb.map((item, index) => (
                <span key={item.href} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span className={s.breadcrumbSep}>/</span>
                  ) : null}
                  {index === breadcrumb.length - 1 && !breadcrumbAllLinks ? (
                    <span className="text-white">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors hover:text-[oklch(78%_0.14_165)]",
                        index === breadcrumb.length - 1 && breadcrumbAllLinks
                          ? "text-white"
                          : undefined
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          ) : null}

          <div className={s.body}>
            {srTitle ? <p className="sr-only">{srTitle}</p> : null}

            {eyebrow ? (
              <div
                className={cn(
                  "mb-4 overflow-hidden",
                  s.reveal,
                  revealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                )}
                style={{
                  transitionDelay: "80ms",
                  transitionTimingFunction: luxuryEase,
                }}
              >
                <p className={s.eyebrow}>{eyebrow}</p>
              </div>
            ) : null}

            <h1 className={s.title}>{title}</h1>

            {subtitle ? (
              <div className={s.subtitleRow}>
                <div className={s.subtitleBar} aria-hidden />
                <p className={s.subtitle}>{subtitle}</p>
              </div>
            ) : null}

            {hasCtas ? (
              <div className={s.ctaRow}>
                {ctaPrimary ? (
                  <Button
                    nativeButton={false}
                    size="lg"
                    className={s.ctaPrimary}
                    render={<Link href={ctaPrimary.href} />}
                  >
                    {ctaPrimary.label}
                  </Button>
                ) : null}
                {ctaSecondary ? (
                  <Button
                    nativeButton={false}
                    size="lg"
                    variant="outline"
                    liquidColors={{
                      from: "transparent",
                      to: "transparent",
                    }}
                    className={s.ctaSecondary}
                    render={<Link href={ctaSecondary.href} />}
                  >
                    {ctaSecondary.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {hasSlides && slides!.length > 1 ? (
          <div
            className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8"
            role="tablist"
            aria-label="Images du hero"
          >
            {slides!.map((slide, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Image ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "size-2.5 rounded-full transition-colors",
                    isActive
                      ? "bg-[oklch(78%_0.14_165)]"
                      : "bg-white/40 hover:bg-white/70"
                  )}
                />
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}
