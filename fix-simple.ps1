# Simple script to fix GitHub Pages 404 error
Write-Host "Starting simple fix for 404 error on GitHub Pages..." -ForegroundColor Green

# Step 1: Create a custom 404.html file
Write-Host "Creating custom 404.html file..." -ForegroundColor Cyan
$html404 = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Zaheer Bijapure</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #00aaff;
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        .btn {
            display: inline-block;
            background-color: #00aaff;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background-color: #0088cc;
            transform: translateY(-2px);
        }
    </style>
    <script>
        // This script redirects all 404s to the home page
        window.location.href = '/zaheerbijapure/';
    </script>
</head>
<body>
    <div class="container">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <p>You will be redirected to the home page shortly...</p>
        <a href="/zaheerbijapure/" class="btn">Go to Homepage</a>
    </div>
</body>
</html>
"@

# Save 404.html file to the current directory
$html404 | Out-File -FilePath "404.html" -Encoding utf8 -Force
Write-Host "Custom 404.html file created" -ForegroundColor Yellow

# Step 2: Add and commit the file
Write-Host "Adding 404.html to git..." -ForegroundColor Cyan
git add 404.html
git commit -m "Add 404.html page for GitHub Pages"

# Step 3: Checkout gh-pages branch, add the file, and push
Write-Host "Checking out gh-pages branch..." -ForegroundColor Cyan
git checkout gh-pages

Write-Host "Copying 404.html to gh-pages branch..." -ForegroundColor Cyan
Copy-Item -Path "../404.html" -Destination "404.html" -Force
git add 404.html
git commit -m "Add 404.html page to fix GitHub Pages navigation"

Write-Host "Pushing changes to gh-pages branch..." -ForegroundColor Cyan
git push origin gh-pages

# Step 4: Switch back to main branch
Write-Host "Switching back to main branch..." -ForegroundColor Cyan
git checkout main

Write-Host "404.html file added to GitHub Pages!" -ForegroundColor Green
Write-Host "Your site should handle 404 errors properly now at https://zaheerartist.github.io/zaheerbijapure/" -ForegroundColor Green
