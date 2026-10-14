export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="bg-primary-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
