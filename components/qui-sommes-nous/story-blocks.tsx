import type { ReactNode } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export function StoryImageBlock({
  image,
  className,
  imageClassName,
  priority = false,
}: {
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  className?: string
  imageClassName?: string
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className={cn("object-cover", imageClassName)}
        sizes="(min-width: 1280px) 1216px, 100vw"
      />
    </div>
  )
}

export function StoryTextImageSection({
  title,
  paragraphs,
  image,
  imagePosition = "right",
  priority = false,
  naturalImage = false,
  cropNaturalImageOnMobile = false,
  titleOnImage = false,
  titleId,
  sectionClassName,
  containerClassName,
  children,
}: {
  title: string
  titleId?: string
  paragraphs: readonly string[]
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  imagePosition?: "left" | "right"
  priority?: boolean
  naturalImage?: boolean
  cropNaturalImageOnMobile?: boolean
  titleOnImage?: boolean
  sectionClassName?: string
  containerClassName?: string
  children?: ReactNode
}) {
  const textBlock = (
    <div
      className={cn(
        "flex flex-col justify-center gap-4 lg:max-w-xl",
        imagePosition === "right" && "order-2 lg:order-none"
      )}
    >
      {!titleOnImage ? (
        <h2
          id={titleId}
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
      ) : null}
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="text-base leading-relaxed text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
      {children}
    </div>
  )

  const imageOrderClass =
    imagePosition === "right" ? "order-1 lg:order-none" : undefined

  const imageBlock = naturalImage ? (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted/30",
        imageOrderClass
      )}
    >
      <div
        className={cn(
          cropNaturalImageOnMobile && "-mt-[2cm] -mb-[4cm] lg:m-0"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      {titleOnImage ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 pt-16 pb-5 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
          <h2
            id={titleId}
            className="text-center text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl lg:text-left lg:text-3xl"
          >
            {title}
          </h2>
        </div>
      ) : null}
    </div>
  ) : (
    <StoryImageBlock
      image={image}
      priority={priority}
      className={cn(
        "aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[420px]",
        imageOrderClass
      )}
    />
  )

  return (
    <div
      className={cn(
        "border-b border-border",
        sectionClassName
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16",
          containerClassName
        )}
      >
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  )
}
