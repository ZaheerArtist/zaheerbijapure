import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zaheer Bijapure | VFX Layout & 3D Artist',
  description: 'Portfolio of Zaheer Bijapure, a VFX Layout Artist and 3D Artist with 9 years of experience specializing in visual effects and AI-driven projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Raleway:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Image loading fallback script */}
        <Script id="image-fallback" strategy="beforeInteractive">
          {`
            // Create a base64 placeholder image
            const placeholderBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAM1BMVEUeIzZIUWRMWGpQWm1UXXBZYHRdZHhkbH9qdIVxe4x3gJKBipuIkaCQl6iXnq6eoq6jqLPJneTJAAAEa0lEQVR4nO3d63KbMBCGYckgsLk0vf/brVtPm3QmTRwJSav1vv8JeGYxRpeVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhRUqyOOa15XZiXRYzL6tJ6o7SsHsZJfTKP6qF6a73Z2qnIqkNVZMmvqrSsVrI6VLlkFdJqTaxDlbOysiqtdyWrJ1ZHlkWbtN6VrI5YpbbeXfJmvavOJavR1nuT1ZmVlVW6rI6t92Z1ZpXS+uqZVTk3q1RW6ayuVu+uL6sr1o82q0tWaaz3Lquz9X6zOs92f5LVUV9SWN2w+ta6ZHUwl/S+mNy+1taJVfnR+sWsvtplH0xuvfpb66LVWv4dOdbrztpM6VnVUjx663VmnZTV01qvL6sQfMf8sBLX+rM2r+f5GyuOqZq2rFJ4stbrxtrk+XXJylSuIquU16OxdqqF1Z+sSm9Waa23v6zCetD86vxifeBLSfHa0pVVTOu9YzWl8WP+9Nt9rddLVhGsRVsfWUlIa70erMJ2PupLQpLr7c4qinXT+npXVuKttxur9axPvrKSUvv2hSwXVtGtL2elsjpr67tbj2Z9/XvXEn0X12yd2x5ZieO2rDjrZ9+KlbgdbZ1Zv9uX9ffWG7Pevb0rK7G9SYtZ7/9Tv7OSvs2aWR/4u/7BSrqdUTHrY/cdP1lJN+tX+2S1eNoW7zR8YiWutlUUrI5s+GYlnrrFGz/3rKR1u2LW53cXv7ISJ9bbsvr2gZ+sxEe7cJVsw0qcrJesYl62X7IS8VCtO1bdnRB+sRLx0C3aKMn6e/LJSsRBuWR7snsvcqXkgVVQDnLBKimHRo+sJIlVUg5KM6xEO5jMsBLtYDTDSrSDOVYi8iP4zpMd3cQBLZWDCVYiDkYzrEQ7FGZYiXYYzbB6Uo5GWB0Vg1FWC2r+1y0dXbBa1LTMSlRjYYbVrBpHM6xm1Wh1pTKopqOrjgbVNJphNanG0RCrRfWu62SlIKtrrWY1WZ2o9Nq+LFXlUJhhtSrXrKWpWk1mJ6jC13HxK6tFM2ZWWc2aMTPMalKMo2FWs2LMDLOaBbViGbVLVrZZCVklZFXCKiGrElYJWZXUsfRZ6WLJsxJYmbA6xZJnJbDan5W6lje2FLG8sVWAldHJMwJW5sFKYGUerARW5sFKYGUerARW5sFKYGUerARW5sFKYGXeYKHrKKzBRPbJQvbJQujJAivzmX/rZWAFq/1hvQ6szFuVicDKetJn3dCypUKf9bKw+sCKrBKyKmGVkFVJGUuelcDK6q+eZVZCn3W0NGSrK2AVWBkHK4GVebASWJkHK4GVebASWJkHK4GVebASWJkHK4GVefzvDOwPq2ewMg5WAivzYCWwMg9WsnPyDCuBlXmwEliZByuBlXmwEliZByuBlXmjfVaLXdmr4njYLBzC58HCmUDQJw+9bCy0ErIqKWPJs5J6sXvyStdfVKwSsiphldBnneFgPiGrElaJ9VZHvfDuF9a9dlW9tFa7xb35uWm9q+nM+tPe9+PnbfvXfh/zot6PrwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8OMP3yhUSvz8KfEAAAAASUVORK5CYII=';
            
            // Handle image loading errors
            window.addEventListener('error', function(e) {
              if (e.target.tagName === 'IMG') {
                console.log('Image failed to load:', e.target.src);
                
                // Make sure the image is visible even if broken
                e.target.style.opacity = '1';
                e.target.style.backgroundColor = '#1e293b';
                
                // Try different path variations
                if (e.target.src.includes('/thumbnail/')) {
                  // Already using thumbnail path, try images folder
                  if (e.target.src.includes('https://zaheerartist.github.io')) {
                    const fileName = e.target.src.split('/').pop();
                    if (fileName) {
                      e.target.src = 'https://zaheerartist.github.io/zaheerbijapure/images/' + fileName;
                      console.log('Trying images folder path:', e.target.src);
                      return;
                    }
                  }
                }
                
                // If a previous attempt failed or if not using thumbnail path
                if (!e.target.dataset.usedPlaceholder) {
                  // Use our base64 placeholder to ensure something displays
                  e.target.src = placeholderBase64;
                  e.target.dataset.usedPlaceholder = 'true';
                  e.target.style.objectFit = 'cover';
                  console.log('Using base64 placeholder image');
                }
              }
            }, true);
            
            // Force all images visible after page load
            window.addEventListener('load', function() {
              setTimeout(function() {
                document.querySelectorAll('img').forEach(function(img) {
                  img.style.opacity = '1';
                });
                
                document.querySelectorAll('.image-fade-in').forEach(function(el) {
                  el.classList.add('force-visible');
                });
                
                document.querySelectorAll('.thumbnail-skeleton').forEach(function(el) {
                  el.style.display = 'none';
                });
              }, 3000);
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-background text-textPrimary min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 