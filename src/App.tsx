import siteConfig from '../site.config.json'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">{siteConfig.courseName}</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">{siteConfig.description}</p>
          <a
            href={siteConfig.bookingUrl}
            className="inline-block mt-8 px-8 py-3 rounded-lg text-lg font-semibold transition"
            style={{ backgroundColor: siteConfig.themeColor }}
          >
            Book a Tee Time
          </a>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Course Details</h3>
            <p className="text-gray-600">Experience our beautifully maintained course.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Pro Shop</h3>
            <p className="text-gray-600">Visit our fully stocked pro shop.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p className="text-gray-600">Host your next event with us.</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {siteConfig.courseName}. Powered by Flagstik.</p>
        </div>
      </footer>
    </div>
  )
}