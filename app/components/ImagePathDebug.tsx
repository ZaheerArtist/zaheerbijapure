'use client';

export default function ImagePathDebug() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs z-50">
      <h4 className="font-bold mb-2">Image Path Debug</h4>
      <p>Base Path: {process.env.NEXT_PUBLIC_BASE_PATH || '/'}</p>
      <p>Environment: {process.env.NODE_ENV}</p>
    </div>
  );
} 