export default function PagePlaceholder({ title, description }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-muted p-8 text-sm text-slate-500">
          Content for this page has not been built yet.
        </div>
      </div>
    </section>
  )
}
