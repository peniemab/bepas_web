import { createElement, type ReactElement } from "react"
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer"

import { getImpactStats } from "@/lib/impact-stats"
import { ImpactReport } from "@/lib/impact-report/report-document"

/** Le magazine est régénéré au plus une fois par heure (chiffres live Supabase). */
export const revalidate = 3600

export async function GET() {
  const stats = await getImpactStats()
  const pdf = await renderToBuffer(
    createElement(ImpactReport, {
      stats,
      generatedAt: new Date(),
    }) as unknown as ReactElement<DocumentProps>
  )

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="rapport-impact-bepas.pdf"',
    },
  })
}
