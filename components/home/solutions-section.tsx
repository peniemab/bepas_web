import Link from "next/link"
import {
  ArrowRightIcon,
  Building2Icon,
  HeartHandshakeIcon,
  MapIcon,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { homeSolutions } from "@/lib/home-content"
import { siteConfig } from "@/lib/site-config"

const solutionIcons = [MapIcon, Building2Icon, HeartHandshakeIcon] as const

export function SolutionsSection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {siteConfig.nosSolutionsLabel}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          De l&apos;achat de parcelle à la construction, BEPAS vous accompagne
          à chaque étape de votre projet immobilier.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {homeSolutions.map((solution, index) => {
          const Icon = solutionIcons[index] ?? MapIcon

          return (
            <Link
              key={solution.href}
              href={solution.href}
              className="group transition-opacity hover:opacity-90"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="size-5 shrink-0 text-primary" />
                    {solution.title}
                  </CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                  <span className="inline-flex items-center gap-1 pt-1 text-sm font-medium text-primary">
                    En savoir plus
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
