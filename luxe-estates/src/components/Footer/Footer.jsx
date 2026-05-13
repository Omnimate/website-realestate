function Footer() {
  return (
    <footer className="bg-[#11100e] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr] mb-12">
          <div className="space-y-5">
            <h3 className="text-2xl font-heading font-semibold tracking-[0.04em]">Luxe Estates</h3>
            <p className="max-w-xl text-body-text/90">Every residence is curated for discerning buyers who value craftsmanship, legacy, and unmatched privacy.</p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_90px_rgba(0,0,0,0.18)]">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Schedule a private tour</p>
              <p className="mt-3 text-lg font-medium text-white">Connect with our consultants for exclusive portfolio access.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-body-text/90">
              <li><a className="transition hover:text-gold" href="#properties">Properties</a></li>
              <li><a className="transition hover:text-gold" href="#about">About</a></li>
              <li><a className="transition hover:text-gold" href="#investment">Investment</a></li>
              <li><a className="transition hover:text-gold" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact</h3>
            <p className="text-body-text/90">Email: hello@luxeestates.com</p>
            <p className="text-body-text/90">Phone: +1 800 555 0199</p>
            <div className="mt-6 space-y-3 text-body-text/90">
              <a className="block transition hover:text-gold" href="#">Instagram</a>
              <a className="block transition hover:text-gold" href="#">LinkedIn</a>
              <a className="block transition hover:text-gold" href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-body-text/70">
          <p>© 2026 Luxe Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
