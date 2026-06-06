import { readdir, rename, stat, unlink, writeFile } from "node:fs/promises"
import path from "node:path"

import sharp from "sharp"

const PUBLIC_DIR = path.join(process.cwd(), "public")
const MIN_BYTES = 40 * 1024
const JPEG_QUALITY = 78
const PNG_QUALITY = 80

const rasterExtensions = new Set([".jpg", ".jpeg", ".png"])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }
    files.push(fullPath)
  }

  return files
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!rasterExtensions.has(ext)) return null

  const { size: before } = await stat(filePath)
  if (before < MIN_BYTES) return null

  const image = sharp(filePath, { failOn: "none" }).rotate()
  const metadata = await image.metadata()

  let pipeline = image
  const isHeavy = before > 150 * 1024
  const maxWidth = metadata.width
    ? metadata.width > (isHeavy ? 1200 : 1600)
      ? isHeavy
        ? 1200
        : 1600
      : undefined
    : undefined
  if (maxWidth) {
    pipeline = pipeline.resize({
      width: maxWidth,
      withoutEnlargement: true,
    })
  }

  let output
  if (ext === ".png") {
    output = await pipeline
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer()
  } else {
    output = await pipeline
      .jpeg({
        quality: isHeavy ? 72 : JPEG_QUALITY,
        mozjpeg: true,
      })
      .toBuffer()
  }

  if (output.length >= before) return null

  const tempPath = `${filePath}.opt.tmp`
  await writeFile(tempPath, output)
  try {
    await unlink(filePath)
  } catch {
    // fichier peut être absent si déjà remplacé
  }
  await rename(tempPath, filePath)

  return {
    file: path.relative(PUBLIC_DIR, filePath).replace(/\\/g, "/"),
    before,
    after: output.length,
  }
}

const results = []
for (const filePath of await walk(PUBLIC_DIR)) {
  const result = await optimizeFile(filePath)
  if (result) results.push(result)
}

if (results.length === 0) {
  console.log("No images optimized (already below threshold or unchanged).")
} else {
  let saved = 0
  for (const item of results) {
    saved += item.before - item.after
    console.log(
      `${item.file}: ${Math.round(item.before / 1024)} KB → ${Math.round(item.after / 1024)} KB`
    )
  }
  console.log(`Total saved: ${Math.round(saved / 1024)} KB`)
}
