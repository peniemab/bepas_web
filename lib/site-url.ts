/** URL publique canonique du site (sans slash final). */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  const url = fromEnv || "https://www.bepas-sarl.com"
  return url.replace(/\/$/, "")
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl()
  if (!path || path === "/") return `${base}/`
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
