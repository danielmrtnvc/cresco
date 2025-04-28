export default function LandingPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-6">Cresco: 90 Days to Build a Lifestyle</h1>
        <p className="text-lg mb-10">Change your habits. Reset your life.</p>
        <div className="space-x-4">
          <a href="/signup" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Start Now
          </a>
          <a href="/login" className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition">
            Log In
          </a>
        </div>
      </div>
    );
  }
  