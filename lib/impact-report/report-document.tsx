/* eslint-disable jsx-a11y/alt-text -- l'Image de @react-pdf n'a pas d'attribut alt */
import { readFileSync } from "node:fs"
import path from "node:path"

import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"

import { homePartners, homeTestimonials } from "@/lib/home-content"
import type { ImpactStatsPayload } from "@/lib/impact-stats"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { projetCommunes, projets, projetsPage } from "@/lib/projets-content"
import { siteConfig } from "@/lib/site-config"
import { absoluteUrl, getSiteUrl } from "@/lib/site-url"

const ROOT = process.cwd()

/** Police en data URL : évite que react-pdf prenne un chemin Windows pour une URL */
const fontPath = (file: string) =>
  `data:font/woff;base64,${readFileSync(path.join(ROOT, "assets", "fonts", file)).toString("base64")}`

function imageFile(filePath: string) {
  return {
    data: readFileSync(filePath),
    format: filePath.endsWith(".png") ? ("png" as const) : ("jpg" as const),
  }
}

const publicImage = (src: string) =>
  imageFile(path.join(ROOT, "public", src.replace(/^\//, "")))

Font.register({
  family: "Manrope",
  fonts: [
    { src: fontPath("manrope-latin-400-normal.woff"), fontWeight: 400 },
    { src: fontPath("manrope-latin-500-normal.woff"), fontWeight: 500 },
    { src: fontPath("manrope-latin-700-normal.woff"), fontWeight: 700 },
    { src: fontPath("manrope-latin-800-normal.woff"), fontWeight: 800 },
  ],
})
Font.register({
  family: "Barlow Condensed",
  fonts: [
    { src: fontPath("barlow-condensed-latin-600-normal.woff"), fontWeight: 600 },
    { src: fontPath("barlow-condensed-latin-700-normal.woff"), fontWeight: 700 },
    { src: fontPath("barlow-condensed-latin-800-normal.woff"), fontWeight: 800 },
  ],
})
// Pas de césure automatique (règles anglaises par défaut) sur un texte français
Font.registerHyphenationCallback((word) => [word])

const color = {
  navy: "#0E2238",
  blue: "#0B6FB8",
  sky: "#1E9BD7",
  mint: "#5FD3AE",
  paper: "#F7F5F0",
  white: "#FFFFFF",
  ink: "#1B2733",
  muted: "#5A6B7B",
  line: "#DCE3EA",
  pale: "#BFD3E6",
}

const s = StyleSheet.create({
  page: {
    backgroundColor: color.paper,
    fontFamily: "Manrope",
    fontSize: 10,
    color: color.ink,
    paddingTop: 48,
    paddingBottom: 64,
    paddingHorizontal: 48,
  },
  fullBleed: { paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 },
  kicker: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 8,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: color.blue,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Barlow Condensed",
    fontWeight: 800,
    fontSize: 40,
    lineHeight: 1,
    textTransform: "uppercase",
    color: color.navy,
    marginBottom: 14,
  },
  lead: { fontSize: 12, lineHeight: 1.5, color: color.muted, marginBottom: 18 },
  body: { fontSize: 10, lineHeight: 1.6, color: color.ink, marginBottom: 8 },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: color.line,
    paddingTop: 8,
    fontSize: 7.5,
    color: color.muted,
  },
})

function Footer({ edition, left = 48 }: { edition: string; left?: number }) {
  const siteUrl = getSiteUrl()
  return (
    <View style={[s.footer, { left }]} fixed>
      <Text>BEPAS · Rapport d&apos;impact · {edition}</Text>
      <View style={{ flexDirection: "row", marginLeft: 12 }}>
        <Link src={siteUrl} style={{ color: color.blue, textDecoration: "none" }}>
          {siteUrl.replace(/^https?:\/\//, "")}
        </Link>
        <Text style={{ marginLeft: 10 }} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>
    </View>
  )
}

function Bullet({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 6 }}>
      <View
        style={{
          width: 5,
          height: 5,
          borderRadius: 3,
          backgroundColor: light ? color.mint : color.blue,
          marginTop: 4,
          marginRight: 8,
        }}
      />
      <Text style={{ flex: 1, fontSize: 10, lineHeight: 1.5, color: light ? color.white : color.ink }}>
        {children}
      </Text>
    </View>
  )
}

/** Renvoi cliquable vers la page du site qui détaille l'information */
function MoreLink({
  path: href,
  label,
  light = false,
}: {
  path: string
  label: string
  light?: boolean
}) {
  const url = absoluteUrl(href)
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 8 }}>
      <Text style={{ fontSize: 8.5, fontWeight: 700, color: light ? color.white : color.navy }}>
        {label} :{" "}
      </Text>
      <Link
        src={url}
        style={{ fontSize: 8.5, color: light ? color.mint : color.blue, textDecoration: "underline" }}
      >
        {url.replace(/^https?:\/\//, "")}
      </Link>
    </View>
  )
}

export type ImpactReportProps = {
  stats: ImpactStatsPayload
  generatedAt: Date
}

export function ImpactReport({ stats, generatedAt }: ImpactReportProps) {
  const edition = generatedAt.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  })
  const dateLabel = generatedAt.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const isLive = stats.source === "live"
  const [families, women] = stats.stats
  const zones = stats.activeSites.zones
  const maxZone = Math.max(1, ...zones.map((zone) => zone.count))
  const { about, founding, offer, closing, hero } = notreHistoirePage
  const partnerLogos = homePartners.rows.flatMap(
    (row): readonly { src: string; alt: string }[] => row.logos
  )
  const siteUrl = getSiteUrl()

  const keyFigures = [
    { value: families?.value ?? "—", label: "familles accompagnées" },
    { value: women?.value ?? "—", label: "de femmes propriétaires" },
    { value: "3", label: "communes d'avenir à Kinshasa" },
    { value: "12–24", label: "mois de paiement échelonné" },
  ]

  return (
    <Document
      title={`Rapport d'impact BEPAS — ${edition}`}
      author={siteConfig.companyName}
      subject="Rapport d'impact"
      language="fr"
    >
      {/* 1 — Couverture */}
      <Page size="A4" style={[s.page, s.fullBleed]}>
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image src={publicImage("/heroAccueil10.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </View>
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: color.navy, opacity: 0.55 }} />
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: 48, justifyContent: "space-between" }}>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: color.white, paddingBottom: 10 }}>
              <Text style={{ fontSize: 8, fontWeight: 800, letterSpacing: 2, color: color.white, textTransform: "uppercase" }}>
                Rapport d&apos;impact
              </Text>
              <Text style={{ fontSize: 8, fontWeight: 800, letterSpacing: 2, color: color.white, textTransform: "uppercase" }}>
                Édition {edition}
              </Text>
            </View>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 120, lineHeight: 0.95, color: color.white, marginTop: 14 }}>
              BEPAS
            </Text>
            <Text style={{ fontSize: 9, letterSpacing: 1.5, color: color.white, textTransform: "uppercase", marginTop: 10 }}>
              {siteConfig.fullName}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, color: color.mint, textTransform: "uppercase", marginBottom: 8 }}>
              {hero.taglineAlt}
            </Text>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 64, lineHeight: 0.95, color: color.white, textTransform: "uppercase" }}>
              {hero.tagline}
            </Text>
            <Text style={{ fontSize: 12, lineHeight: 1.5, color: color.white, marginTop: 12, width: 380 }}>
              Comment BEPAS ouvre l&apos;accès à la propriété foncière aux familles congolaises, en RDC comme dans la diaspora.
            </Text>
            <View style={{ flexDirection: "row", marginTop: 24 }}>
              {[
                `${families?.value ?? "—"} familles`,
                `${women?.value ?? "—"} de femmes`,
                "3 communes",
              ].map((teaser) => (
                <Text
                  key={teaser}
                  style={{ fontSize: 9, fontWeight: 700, color: color.navy, backgroundColor: color.mint, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, marginRight: 8 }}
                >
                  {teaser}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Page>

      {/* 2 — Sommaire & édito */}
      <Page size="A4" style={[s.page, s.fullBleed, { flexDirection: "row" }]}>
        <View style={{ width: 200, backgroundColor: color.navy, padding: 36, paddingTop: 48 }}>
          <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 32, color: color.white, textTransform: "uppercase", marginBottom: 24 }}>
            Sommaire
          </Text>
          {[
            ["03", "L'impact en chiffres"],
            ["04", "Notre histoire"],
            ["05", "Nos communes"],
            ["06", "Ce qui fait la différence"],
            ["07", "Ils ont franchi le pas"],
            ["08", "Nos partenaires"],
          ].map(([num, label]) => (
            <View key={num} style={{ flexDirection: "row", marginBottom: 14, borderBottomWidth: 0.5, borderBottomColor: "#2A3F57", paddingBottom: 10 }}>
              <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: 18, color: color.mint, width: 32 }}>{num}</Text>
              <Text style={{ fontSize: 10, color: color.white, flex: 1, marginTop: 4 }}>{label}</Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 1, padding: 48, paddingBottom: 64 }}>
          <Text style={s.kicker}>Édito</Text>
          <Text style={s.title}>
            {about.headline} {about.headlineAccent}
          </Text>
          {about.paragraphs.slice(0, 2).map((paragraph) => (
            <Text key={paragraph} style={[s.body, { fontSize: 11 }]}>
              {paragraph}
            </Text>
          ))}
          <View style={{ marginTop: 18, borderLeftWidth: 3, borderLeftColor: color.blue, paddingLeft: 14 }}>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: 22, lineHeight: 1.15, color: color.navy }}>
              « {about.quote} »
            </Text>
          </View>
          <MoreLink path="/qui-sommes-nous#notre-histoire" label="Pour en savoir plus" />
          <Image
            src={publicImage("/heroAccueil11.jpg")}
            style={{ marginTop: 20, height: 200, objectFit: "cover", borderRadius: 6 }}
          />
        </View>
        <Footer edition={edition} left={248} />
      </Page>

      {/* 3 — Chiffres */}
      <Page size="A4" style={s.page}>
        <Text style={s.kicker}>03 · L&apos;impact en chiffres</Text>
        <Text style={s.title}>Des familles devenues propriétaires</Text>
        <Text style={s.lead}>
          {isLive
            ? `Données issues de notre registre des souscripteurs au ${dateLabel}.`
            : "Chiffres en cours de mise à jour."}
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: -6 }}>
          {keyFigures.map((figure, index) => (
            <View key={figure.label} style={{ width: "50%", padding: 6 }}>
              <View style={{ backgroundColor: index === 0 ? color.navy : color.white, borderRadius: 8, padding: 20, minHeight: 130, justifyContent: "flex-end" }}>
                <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 56, lineHeight: 1, color: index === 0 ? color.mint : color.blue }}>
                  {figure.value}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: index === 0 ? color.white : color.muted, marginTop: 6 }}>
                  {figure.label}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 28, backgroundColor: color.white, borderRadius: 8, padding: 22 }}>
          <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: 20, color: color.navy, textTransform: "uppercase", marginBottom: 4 }}>
            Répartition des familles par site
          </Text>
          <Text style={{ fontSize: 9, color: color.muted, marginBottom: 16 }}>Nombre de souscripteurs par commune</Text>
          {zones.map((zone) => (
            <View key={zone.name} style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
              <Text style={{ width: 90, fontSize: 10, fontWeight: 700 }}>{zone.name}</Text>
              <View style={{ flex: 1, height: 16, backgroundColor: "#EEF2F6", borderRadius: 3 }}>
                <View style={{ width: `${isLive ? Math.max(1.5, (zone.count / maxZone) * 100) : 0}%`, height: 16, backgroundColor: color.sky, borderRadius: 3 }} />
              </View>
              <Text style={{ width: 50, textAlign: "right", fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: 16, color: color.navy }}>
                {isLive ? zone.count : "—"}
              </Text>
            </View>
          ))}
        </View>
        <MoreLink path="/#notre-impact" label="Les chiffres à jour" />
        <MoreLink path="/projets" label="Voir nos sites et projets" />
        <Footer edition={edition} />
      </Page>

      {/* 4 — Histoire */}
      <Page size="A4" style={[s.page, s.fullBleed]}>
        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 230 }}>
          <Image src={publicImage("/ctaAccueilFamille.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </View>
        <View style={{ marginLeft: 230, padding: 40, paddingTop: 48, paddingBottom: 64 }}>
          <Text style={s.kicker}>04 · Notre histoire</Text>
          <Text style={s.title}>{founding.title}</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 16 }}>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 64, lineHeight: 0.9, color: color.blue, marginRight: 10 }}>
              {founding.year}
            </Text>
            <Text style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: color.muted, marginBottom: 6 }}>
              Création le {founding.date}
            </Text>
          </View>
          {founding.paragraphs.map((paragraph) => (
            <Text key={paragraph} style={s.body}>
              {paragraph}
            </Text>
          ))}
          <View style={{ marginTop: 14, backgroundColor: color.white, borderRadius: 8, padding: 18 }}>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: 18, color: color.navy, textTransform: "uppercase", marginBottom: 10 }}>
              Nos engagements
            </Text>
            {about.highlights.map((highlight) => (
              <Bullet key={highlight}>{highlight}</Bullet>
            ))}
          </View>
          <Text style={[s.body, { marginTop: 14 }]}>{notreHistoirePage.team.paragraphs.join(" ")}</Text>
          <MoreLink path="/qui-sommes-nous#notre-histoire" label="Notre histoire" />
          <MoreLink path="/qui-sommes-nous#nos-equipes" label="Nos équipes" />
        </View>
        <Footer edition={edition} left={270} />
      </Page>

      {/* 5 — Communes */}
      <Page size="A4" style={s.page}>
        <Text style={s.kicker}>05 · Nos communes</Text>
        <Text style={s.title}>Là où la ville de demain se dessine</Text>
        {projetCommunes.map((commune) => {
          const communeProjets = projets.filter((projet) => projet.communeSlug === commune.slug)
          return (
            <View key={commune.slug} style={{ flexDirection: "row", backgroundColor: color.white, borderRadius: 8, marginBottom: 14, overflow: "hidden" }} wrap={false}>
              <Image src={publicImage(commune.image.src)} style={{ width: 190, height: 170, objectFit: "cover" }} />
              <View style={{ flex: 1, padding: 18 }}>
                <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 26, color: color.navy, textTransform: "uppercase" }}>
                  {commune.name}
                </Text>
                <Text style={[s.body, { color: color.muted }]}>{commune.description}</Text>
                {communeProjets.map((projet) => (
                  <View key={projet.id} style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: color.line, paddingTop: 6, marginTop: 4 }}>
                    <Link
                      src={absoluteUrl(`/projets/${projet.communeSlug}/${projet.slug}`)}
                      style={{ fontSize: 10, fontWeight: 700, color: color.ink, textDecoration: "none" }}
                    >
                      {projet.name}
                    </Link>
                    <Text style={{ fontSize: 8, fontWeight: 700, color: color.blue, textTransform: "uppercase" }}>{projet.status}</Text>
                  </View>
                ))}
                <MoreLink path={`/projets/${commune.slug}`} label="En savoir plus" />
              </View>
            </View>
          )
        })}
        <Text style={{ fontSize: 9, color: color.muted, marginTop: 4 }}>{offer.parcelSizes}.</Text>
        <Footer edition={edition} />
      </Page>

      {/* 6 — Méthode */}
      <Page size="A4" style={s.page}>
        <Text style={s.kicker}>06 · Ce qui fait la différence</Text>
        <Text style={s.title}>{projetsPage.methodology.title}</Text>
        <Text style={s.lead}>{projetsPage.methodology.lead}</Text>
        <View style={{ flexDirection: "row", marginHorizontal: -6, marginBottom: 22 }}>
          {projetsPage.methodology.points.map((point, index) => (
            <View key={point.title} style={{ flex: 1, padding: 6 }}>
              <View style={{ backgroundColor: color.white, borderRadius: 8, padding: 16, borderTopWidth: 4, borderTopColor: color.blue, minHeight: 150 }}>
                <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 30, color: color.sky }}>0{index + 1}</Text>
                <Text style={{ fontSize: 11, fontWeight: 800, marginBottom: 6 }}>{point.title}</Text>
                <Text style={{ fontSize: 9, lineHeight: 1.5, color: color.muted }}>{point.description}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginTop: -14, marginBottom: 18 }}>
          <MoreLink path="/projets" label="Notre méthode, projet par projet" />
        </View>
        <View style={{ flexDirection: "row", backgroundColor: color.navy, borderRadius: 8, overflow: "hidden" }}>
          <View style={{ flex: 1, padding: 22 }}>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 24, color: color.white, textTransform: "uppercase", marginBottom: 4 }}>
              {offer.title}
            </Text>
            <Text style={{ fontSize: 10, color: color.pale, marginBottom: 14 }}>{offer.lead}</Text>
            {offer.items.map((item) => (
              <Bullet key={item} light>
                {item}
              </Bullet>
            ))}
            <MoreLink path="/nos-solutions" label="Toutes nos solutions" light />
          </View>
          <Image src={publicImage("/terrain_const.jpg")} style={{ width: 200, objectFit: "cover" }} />
        </View>
        <Footer edition={edition} />
      </Page>

      {/* 7 — Témoignages */}
      <Page size="A4" style={s.page}>
        <Text style={s.kicker}>07 · Ils ont franchi le pas</Text>
        <Text style={s.title}>Des propriétaires, pas à pas</Text>
        {homeTestimonials.items.map((item, index) => (
          <View
            key={item.name}
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse", backgroundColor: color.white, borderRadius: 8, marginBottom: 14, overflow: "hidden" }}
            wrap={false}
          >
            <Image src={publicImage(item.image.src)} style={{ width: 160, height: 190, objectFit: "cover" }} />
            <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
              <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 48, lineHeight: 0.6, color: color.sky }}>“</Text>
              <Text style={{ fontSize: 10.5, lineHeight: 1.55, marginBottom: 10 }}>{item.quote}</Text>
              <Text style={{ fontSize: 10, fontWeight: 800, color: color.navy }}>{item.name}</Text>
              <Text style={{ fontSize: 8.5, color: color.muted }}>
                {item.profession} · {item.role}
              </Text>
            </View>
          </View>
        ))}
        <MoreLink path="/#temoignages" label="Plus de témoignages" />
        <MoreLink path="/contact" label="Devenir propriétaire à votre tour" />
        <Footer edition={edition} />
      </Page>

      {/* 8 — Partenaires & contact */}
      <Page size="A4" style={s.page}>
        <Text style={s.kicker}>08 · Nos partenaires</Text>
        <Text style={s.title}>{notreHistoirePage.partners.title}</Text>
        <Text style={s.lead}>{notreHistoirePage.partners.lead}</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: -5, marginBottom: 24 }}>
          {partnerLogos.map((logo) => (
            <View key={logo.alt} style={{ width: "25%", padding: 5 }}>
              <View style={{ backgroundColor: color.white, borderRadius: 6, height: 70, alignItems: "center", justifyContent: "center", padding: 10 }}>
                <Image
                  src={
                    logo.src.endsWith(".webp")
                      ? imageFile(path.join(ROOT, "assets", "regideso_logo.png"))
                      : publicImage(logo.src)
                  }
                  style={{ maxWidth: "100%", maxHeight: 48, objectFit: "contain" }}
                />
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginTop: -16, marginBottom: 20 }}>
          <MoreLink path="/qui-sommes-nous#nos-partenaires" label="Tous nos partenaires" />
        </View>

        <View style={{ flex: 1, backgroundColor: color.navy, borderRadius: 8, padding: 28, justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: 32, lineHeight: 1, color: color.white, textTransform: "uppercase", marginBottom: 10 }}>
              {closing.title}
            </Text>
            <Text style={{ fontSize: 11, lineHeight: 1.5, color: color.pale, width: 400 }}>{closing.text}</Text>
          </View>
          <View style={{ flexDirection: "row", borderTopWidth: 0.5, borderTopColor: "#2A3F57", paddingTop: 16 }}>
            <View style={{ flex: 1.3 }}>
              <Text style={{ fontSize: 8, fontWeight: 800, letterSpacing: 1.5, color: color.mint, textTransform: "uppercase", marginBottom: 6 }}>Nous rendre visite</Text>
              <Text style={{ fontSize: 9.5, lineHeight: 1.5, color: color.white }}>{siteConfig.contact.address}</Text>
              {/* « ᵉ » absent de la police du PDF (s'affichait « 2I ») */}
              <Text style={{ fontSize: 9, lineHeight: 1.5, color: color.pale }}>{siteConfig.contact.accessSteps[2].replace("ᵉ", "ème")}</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 16 }}>
              <Text style={{ fontSize: 8, fontWeight: 800, letterSpacing: 1.5, color: color.mint, textTransform: "uppercase", marginBottom: 6 }}>Nous contacter</Text>
              <Text style={{ fontSize: 9.5, lineHeight: 1.6, color: color.white }}>{siteConfig.contact.phone}</Text>
              <Text style={{ fontSize: 9.5, lineHeight: 1.6, color: color.white }}>{siteConfig.contact.email}</Text>
              <Link src={siteUrl} style={{ fontSize: 9.5, lineHeight: 1.6, color: color.mint, textDecoration: "none" }}>
                {siteUrl.replace(/^https?:\/\//, "")}
              </Link>
              <Link src={absoluteUrl("/contact")} style={{ fontSize: 9.5, lineHeight: 1.6, color: color.mint, textDecoration: "none" }}>
                Formulaire de contact
              </Link>
            </View>
          </View>
        </View>
        <Footer edition={edition} />
      </Page>
    </Document>
  )
}
