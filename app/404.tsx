import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-background">
      <h1 className="text-5xl font-bold mb-4 text-accent1">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-accent1 text-white rounded-md font-semibold hover:bg-accent1/80 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
} 