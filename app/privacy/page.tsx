// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Last Updated: March 2, 2026</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black">1. Information We Collect</h2>
        <p className="mb-4">
          At <strong>Logik Systems</strong> (logik.website), we collect minimal data to provide our services, including the AI Visibility Report and World Cup utilities. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Usage Data:</strong> IP addresses, browser types, and pages visited via Google Analytics.</li>
          <li><strong>Payment Data:</strong> Transaction processing is handled securely by <strong>Dodo Payments</strong>. We do not store your credit card details on our servers.</li>
          <li><strong>Input Data:</strong> URLs or queries entered into our audit tools.</li>
        </ul>
      </section>

      <section className="mb-8 border-l-4 border-blue-500 pl-4 bg-blue-50 py-2">
        <h2 className="text-2xl font-semibold mb-4">2. Advertising & Cookies</h2>
        <p className="mb-4">
          We use <strong>Google AdSense</strong> to serve ads. Google uses cookies to serve ads based on a user's prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline">Ads Settings</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <footer className="mt-12 pt-8 border-t text-sm">
        <p>Contact us at: <span className="font-mono">support@logik.website</span></p>
        <a href="/" className="text-blue-600 mt-4 inline-block">← Back to Home</a>
      </footer>
    </main>
  );
}