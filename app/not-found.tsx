import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-4">
      <h1 className="text-5xl font-bold mb-4 glow">404</h1>
      <p className="text-lg mb-6">Page not found.</p>
      <Link href="/" className="px-6 py-3 bg-accent text-black rounded-md hover:scale-105 transition">
        Return Home
      </Link>
    </div>
  );
}