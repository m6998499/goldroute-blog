export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">GoldRoute Blog</h1>
          <p className="text-xl text-gray-300">Your journey to success starts here</p>
        </header>

        <section className="max-w-4xl mx-auto">
          <article className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Welcome to GoldRoute</h2>
            <p className="text-gray-300 mb-4">
              This is your new blog platform. Start sharing your thoughts, ideas, and stories with the world.
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