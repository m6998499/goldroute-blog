import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">GoldRoute Blog</h1>
          <p className="text-xl text-gray-300">Your journey to success starts here</p>
        </header>

        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Latest Articles</h2>
          
          {/* Featured Blog Post */}
          <Link href="/posts/freight-market-december-2025-outlook">
            <article className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg hover:bg-gray-750 transition-colors cursor-pointer border-l-4 border-amber-500">
              <div className="text-sm text-amber-400 mb-3">freight-market-december-2025Freight Market Outlook: Navigating Peak Season End and Preparing As 2025 draws to a close, the freight industry faces tariff uncertainties, Suez Canal reopening, holiday capacity tightening, and strategic shifts defining the path to 2026. Discover what shippers and carriers need December 16, 2025to know.for 2026-outlook • Featured</div>
              <h3 className="text-3xl font-bold mb-4 hover:text-amber-400 transition-colors">
                freight-market-december-2025Freight Market Outlook: Navigating Peak Season End and Preparing for 2026-outlook
              </h3>
              <p className="text-gray-300 mb-4">
                freight-market-december-2025Freight Market Outlook: Navigating Peak Season End and Preparing As 2025 draws to a close, the freight industry faces tariff uncertainties, Suez Canal reopening, holiday capacity tightening, and strategic shifts defining the path to 2026. Discover what shippers and carriers need to know.for 2026-outlook
              </p>
              <div className="flex items-center text-amber-400 font-semibold">
                Read full article →
              </div>
            </article>
          </Link>
        </section>

        <section className="max-w-4xl mx-auto">
          <article className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Welcome to GoldRoute</h2>
            <p className="text-gray-300 mb-4">
              Your trusted source for freight industry news, logistics insights, and supply chain updates. Stay informed about the latest trends shaping the transportation and shipping sectors.
            </p>
            <p className="text-gray-300">
              Built with Next.js, optimized for performance and SEO.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Fast & Modern</h3>
              <p className="text-gray-300">Built with the latest web technologies for optimal performance.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
              <p className="text-gray-300">Designed to rank well in search engines and drive traffic.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}