export default function SettingsPage() {
    return (
      <div className="h-screen flex items-center justify-center flex-col bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Cresco: 90 Days to Build a Lifestyle</h1>
        <p className="mb-8">Reset your life, one habit at a time.</p>
        <a href="/signup" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md">
          Start Your Journey
        </a>
      </div>
    );
  }
  