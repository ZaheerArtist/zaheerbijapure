# Script to fix 404 error in GitHub Pages with Next.js
Write-Host "Starting to fix 404 error for GitHub Pages..." -ForegroundColor Green

# Step 1: Clean build directories
Write-Host "Cleaning build directories..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force
    Write-Host ".next directory removed" -ForegroundColor Yellow
}

if (Test-Path "out") {
    Remove-Item -Path "out" -Recurse -Force
    Write-Host "out directory removed" -ForegroundColor Yellow
}

# Step 2: Create a custom 404.html file
Write-Host "Creating custom 404.html file..." -ForegroundColor Cyan
$html404 = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script>
        // GitHub Pages returns 404.html for all routes not found
        // This script redirects to the index page with a route parameter
        const path = window.location.pathname;
        const segmentCount = path.split('/').length;
        const repo = '/zaheerbijapure';
        
        // Strip the repo name if present
        const cleanPath = path.includes(repo) 
            ? path.substring(path.indexOf(repo) + repo.length) 
            : path;
            
        // Handle root redirects
        const redirectUrl = window.location.origin + repo + (cleanPath === '/' ? '' : '?path=' + cleanPath);
        
        window.location.replace(redirectUrl);
    </script>
</head>
<body>
    <h1>Page not found</h1>
    <p>Redirecting to home page...</p>
</body>
</html>
"@

# Create public directory if it doesn't exist
if (-not (Test-Path "public")) {
    New-Item -Path "public" -ItemType Directory -Force | Out-Null
    Write-Host "public directory created" -ForegroundColor Yellow
}

# Create the 404.html file
$html404 | Out-File -FilePath "public/404.html" -Encoding utf8 -Force
Write-Host "Custom 404.html file created in public directory" -ForegroundColor Yellow

# Step 3: Create or modify _app.js to handle route redirection
Write-Host "Creating _app.js file for route handling..." -ForegroundColor Cyan
$appJs = @"
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
"@

# Create pages directory if it doesn't exist
if (-not (Test-Path "pages")) {
    New-Item -Path "pages" -ItemType Directory -Force | Out-Null
    Write-Host "pages directory created" -ForegroundColor Yellow
}

# Create the _app.js file
$appJs | Out-File -FilePath "pages/_app.js" -Encoding utf8 -Force
Write-Host "_app.js file created to handle redirects" -ForegroundColor Yellow

# Step 4: Create .nojekyll file for GitHub Pages
Write-Host "Creating .nojekyll file..." -ForegroundColor Cyan
New-Item -Path "public/.nojekyll" -ItemType File -Force | Out-Null
Write-Host ".nojekyll file created in public directory" -ForegroundColor Yellow

# Step 5: Build the Next.js site
Write-Host "Building the Next.js site..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Aborting." -ForegroundColor Red
    exit 1
}

# Step 6: Add .nojekyll file to out directory
Write-Host "Adding .nojekyll to output directory..." -ForegroundColor Cyan
New-Item -Path "out/.nojekyll" -ItemType File -Force | Out-Null

# Step 7: Copy 404.html to out directory
Write-Host "Copying 404.html to output directory..." -ForegroundColor Cyan
Copy-Item "public/404.html" -Destination "out/404.html" -Force

# Step 8: Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan

# Commit latest changes
git add .
git commit -m "Add 404 page and redirect handler"

# Create and switch to a new gh-pages branch
git checkout --orphan gh-pages-new
git reset --hard

# Add all files from out directory
Copy-Item -Path "out/*" -Destination "./" -Recurse -Force
git add .
git commit -m "Fix 404 error for GitHub Pages"

# Force push to gh-pages
git push -f origin gh-pages-new:gh-pages

# Go back to main branch
git checkout main

Write-Host "404 error fix deployed to GitHub Pages!" -ForegroundColor Green
Write-Host "Your site should be available at https://zaheerartist.github.io/zaheerbijapure/ in a few minutes." -ForegroundColor Green
