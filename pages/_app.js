import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Check if we have a path query parameter (from 404.html redirect)
    const { path } = router.query;
    if (path && !window.location.pathname.includes(path)) {
      // Navigate to the correct path
      router.push(path);
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
