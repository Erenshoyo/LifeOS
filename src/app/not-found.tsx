import Link from "next/link";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <Search className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 inline-flex"
          >
            <Home className="w-5 h-5" />
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
