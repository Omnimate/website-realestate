function Footer() {
  return (
    <footer className="bg-[#11100e] px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <h3 className="font-heading text-2xl font-semibold">Luxe Estates</h3>
            <p className="max-w-xl text-sm leading-7 text-white/68">
              Every residence is considered for buyers who value craftsmanship,
              privacy, and a quieter process.
            </p>
            <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.18)]">
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                Schedule a private tour
              </p>
              <p className="mt-3 text-base font-medium leading-7 text-white">
                Connect with our consultants for exclusive portfolio access.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold">Explore</h3>
            <ul className="space-y-3 text-sm text-white/68">
              <li><a className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="#properties">Properties</a></li>
              <li><a className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="#about">About</a></li>
              <li><a className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="#investment">Investment</a></li>
              <li><a className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold">Contact</h3>
            <p className="text-sm leading-7 text-white/68">Email: hello@luxeestates.com</p>
            <p className="text-sm leading-7 text-white/68">Phone: +1 800 555 0199</p>
            <div className="mt-6 space-y-3 text-sm text-white/68">
              <span className="block">Instagram</span>
              <span className="block">LinkedIn</span>
              <span className="block">Facebook</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/55">
          <p>Copyright 2026 Luxe Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
