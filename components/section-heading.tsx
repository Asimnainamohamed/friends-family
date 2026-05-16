type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto items-center text-center'
      : 'items-start text-left'

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment}`}>
      <span className="text-xs font-medium uppercase tracking-[0.32em] text-electric">
        {eyebrow}
      </span>
      <h2 className="display-font text-balance text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
