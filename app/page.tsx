export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-2">LOGIK SYSTEMS</h1>
      <p className="text-lg text-gray-600 mb-12 italic text-center">Software House & Utility Suite 2026</p>
      
      {/* Updated grid to handle 3 items nicely */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* 1. AI Tool */}
        <a href="https://ai.logik.website" className="p-8 bg-white border-2 border-blue-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-700">AI Visibility Report →</h2>
            <p className="mt-2 text-gray-500">Professional SEO and AI-readiness auditing tool.</p>
          </div>
        </a>

        {/* 2. World Cup Tool */}
        <a href="https://worldcup.logik.website" className="p-8 bg-white border-2 border-green-100 rounded-3xl hover:border-green-500 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-green-700">World Cup 2026 →</h2>
            <p className="mt-2 text-gray-500">Live countdowns and utility tracking for the FIFA World Cup.</p>
          </div>
        </a>

        {/* 3. NEW: GTA Navigator */}
        <a href="https://gta.logik.website" className="p-8 bg-white border-2 border-purple-100 rounded-3xl hover:border-purple-500 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-purple-700">GTA VI Navigator →</h2>
            <p className="mt-2 text-gray-500">Vice City interactive map, PC Audit system, and vehicle database.</p>
          </div>
        </a>

      </div>

      <footer className="mt-16 text-center">
        <a href="/privacy" className="text-blue-500 hover:underline mx-4">Privacy Policy</a>
        <span className="text-gray-300">|</span>
        <span className="mx-4 text-gray-500">© 2026 Logik Group</span>
      </footer>
    </main>
  );
}