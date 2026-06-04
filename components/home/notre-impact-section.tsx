import Link from "next/link"
import { FileDownIcon } from "lucide-react"

export function NotreImpactSection() {
  // TODO: À connecter à la BDD pour récupérer les vraies données
  const stats = [
    {
      value: "2,847",
      label: "Familles accompagnées",
    },
    {
      value: "68%",
      label: "de femmes propriétaires",
    },
    {
      value: "94.2%",
      label: "taux de satisfaction clients",
    },
    {
      value: "4.2M $",
      label: "Patrimoine foncier sécurisé",
    },
  ]

  return (
    <section className="bg-muted/40 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex w-full max-w-3xl flex-col gap-3 sm:mb-14 mx-auto">
          <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-[oklch(50.8%_0.118_165.612)] to-[oklch(54%_0.158_242)] bg-clip-text text-transparent">
              Notre Impact
            </span>
          </h2>
          <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            Chiffres clés mis à jour en décembre 2025
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 rounded-lg border border-border/60 bg-white p-8 text-center shadow-xs"
            >
              <div className="text-3xl font-black text-primary sm:text-4xl">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-muted-foreground leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Rapport */}
        <div className="flex justify-center">
          <Link
            href="#rapport"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <FileDownIcon className="size-4" />
            Découvrir notre rapport d'impact complet
          </Link>
        </div>
      </div>
    </section>
  )
}
