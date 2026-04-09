"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Something went wrong!
        </h1>
        <p className="text-gray-600 mb-6">
          An unexpected error occurred. Please try again or contact support if
          the problem persists.
        </p>
        {error.message && (
          <p className="text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg">
            {error.message}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
