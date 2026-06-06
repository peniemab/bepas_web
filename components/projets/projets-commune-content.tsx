import Link from "next/link"

import { ConstruireProjectCard } from "@/components/construire-parcelle/construire-project-card"
import { ProjetsFilterBar } from "@/components/projets/projets-filter-bar"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  getProjetHref,
  getProjetsByCommune,
  type CommuneSlug,
} from "@/lib/projets-content"

type ProjetsCommuneContentProps = {
  communeSlug: CommuneSlug
}

export function ProjetsCommuneContent({ communeSlug }: ProjetsCommuneContentProps) {
  const projetsCommune = getProjetsByCommune(communeSlug)

  return (
    <section className="parallax-content-overlap min-h-[50vh] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjetsFilterBar activeFilter={communeSlug} />

        {projetsCommune.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {projetsCommune.map((projet, index) => (
              <ScrollReveal key={projet.id} delay={index * 50}>
                <ConstruireProjectCard
                  image={projet.image}
                  category={projet.commune}
                  title={projet.name}
                  summary={projet.summary}
                  href={getProjetHref(projet)}
                  linkLabel="Voir le projet →"
                  priority={index === 0}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 border border-dashed border-border bg-muted/30 px-6 py-32 text-center">
            <p className="text-lg font-black uppercase tracking-widest text-muted-foreground">
              Aucun projet répertorié pour le moment.
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              Contactez-nous pour connaître les disponibilités à venir dans cette
              commune.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button nativeButton={false} variant="outline" render={<Link href="/projets" />}>
                Voir toutes les communes
              </Button>
              <Button nativeButton={false} render={<Link href="/contact" />}>
                Nous contacter
              </Button>
            </div>
          </div>
        )}

        <div className="mt-24 border-t border-border/60 pt-12 text-center">
          <p className="mb-4 text-muted-foreground">Vous cherchez autre chose ?</p>
          <Button
            nativeButton={false}
            className="h-auto border-transparent bg-foreground px-8 py-3 text-xs font-bold uppercase tracking-widest text-background hover:bg-primary"
            render={<Link href="/projets" />}
          >
            Voir toutes les communes
          </Button>
        </div>
      </div>
    </section>
  )
}
