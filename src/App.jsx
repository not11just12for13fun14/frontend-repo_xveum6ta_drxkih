import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Search, Home, Building2 } from 'lucide-react'

function App() {
  const [query, setQuery] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const onSearch = (e) => {
    e.preventDefault()
    // For now, just log the search. Backend endpoints can be added later.
    console.log({ query, minPrice, maxPrice })
    alert(`Search submitted:\nLocation/Keyword: ${query || 'Any'}\nMin: ${minPrice || '—'}\nMax: ${maxPrice || '—'}`)
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* NAVBAR */}
      <header className="relative z-20">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
              <Home className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-wide">LuxLiving</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#featured" className="hover:text-white">Featured</a>
            <a href="#neighborhoods" className="hover:text-white">Neighborhoods</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-white/90">
            <Building2 className="h-4 w-4" />
            List a Property
          </button>
        </nav>
      </header>

      {/* HERO with Spline cover */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        {/* 3D Spline Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient overlays (do not block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Curated Luxury Spaces • Urban Living
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Discover elevated living in the heart of the city
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Explore contemporary residences with panoramic views, refined interiors, and amenities designed for modern life.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={onSearch}
              className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4"
            >
              <div className="col-span-2">
                <label className="mb-1 block text-xs text-white/70">Location or building</label>
                <div className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 backdrop-blur">
                  <Search className="h-4 w-4 text-white/60" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. Downtown, Hudson Tower, 2BR"
                    className="w-full bg-transparent placeholder-white/50 text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/70">Min price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="$500k"
                  className="w-full rounded-md bg-white/10 px-3 py-2 text-sm placeholder-white/50 focus:outline-none backdrop-blur"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/70">Max price</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="$2.5M"
                    className="w-full rounded-md bg-white/10 px-3 py-2 text-sm placeholder-white/50 focus:outline-none backdrop-blur"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-white/90"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Highlights / Feature strip */}
      <section id="featured" className="relative z-10 -mt-10 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Skyline Views',
                desc: 'Floor-to-ceiling windows with breathtaking panoramas.',
              },
              {
                title: 'Amenity-Rich',
                desc: 'Concierge, rooftop pool, fitness, and co-working lounges.',
              },
              {
                title: 'Prime Locations',
                desc: 'Walkable neighborhoods with dining, arts, and transit.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 py-10 text-white/70">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LuxLiving. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
