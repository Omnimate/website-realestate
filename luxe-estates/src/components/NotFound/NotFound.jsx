import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="min-h-screen bg-warm-white text-dark-text flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gold mb-6">404</p>
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">Page not found</h1>
        <p className="text-body-text text-lg leading-relaxed mb-8">
          The page you were looking for does not exist. Return to the home experience and continue exploring our premium residences.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-opacity-90"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
