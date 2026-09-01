export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="soft-gradient border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
