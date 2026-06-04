"use client"

import { PlusIcon, XIcon } from "lucide-react"
import { useCallback, useId, useState } from "react"

import { homeParcellesCta } from "@/lib/home-content"
import { cn } from "@/lib/utils"

const faqIconCircleClass =
  "flex size-6 shrink-0 items-center justify-center rounded-full bg-[oklch(65%_0.14_165.612)] transition-colors"

export function ParcellesCtaFaq() {
  const { title, items } = homeParcellesCta.faq
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }, [])

  return (
    <div
      className="mx-auto flex w-full max-w-3xl flex-col gap-5 sm:gap-6 md:max-w-2xl lg:max-w-3xl"
      aria-labelledby="parcelles-faq-title"
    >
      <h3
        id="parcelles-faq-title"
        className="text-center text-xl font-black tracking-tight text-foreground sm:text-2xl"
      >
        {title}
      </h3>

      <ul className="flex list-none flex-col gap-2 sm:gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const answerId = `${baseId}-faq-answer-${index}`

          return (
            <li
              key={item.question}
              className="border-b border-border/50 pb-2 last:border-b-0 sm:pb-3"
            >
              <button
                id={`${baseId}-faq-question-${index}`}
                type="button"
                className="flex w-full cursor-pointer items-center gap-3 rounded-lg text-left transition-opacity hover:opacity-90"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggle(index)}
              >
                <span
                  className={cn(
                    "min-w-0 flex-1 text-sm font-medium leading-snug transition-colors sm:text-base",
                    isOpen
                      ? "text-[oklch(50.8%_0.118_165.612)]"
                      : "text-foreground"
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    faqIconCircleClass,
                    isOpen && "bg-[oklch(50.8%_0.118_165.612)]"
                  )}
                  aria-hidden
                >
                  {isOpen ? (
                    <XIcon className="size-3 text-white" strokeWidth={2.5} />
                  ) : (
                    <PlusIcon className="size-3 text-white" strokeWidth={2.5} />
                  )}
                </span>
              </button>

              <div
                id={answerId}
                role="region"
                aria-labelledby={`${baseId}-faq-question-${index}`}
                hidden={!isOpen}
                className="overflow-hidden pr-9"
              >
                <p className="pt-2 pb-1 text-sm leading-relaxed text-muted-foreground sm:pt-3 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
