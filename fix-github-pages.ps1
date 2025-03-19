# PowerShell script to fix GitHub Pages deployment

# Build the Next.js site
Write-Host "Building the Next.js site..." -ForegroundColor Green
npm run build

# Ensure we're on the main branch
git checkout main

# Create a backup of the gh-pages branch
Write-Host "Creating a backup of the current gh-pages branch..." -ForegroundColor Green
git branch -D gh-pages-backup 2>$null
git branch -D gh-pages-new 2>$null
git checkout -b gh-pages-new

# Copy the direct access page as index.html
Write-Host "Setting up the direct access page..." -ForegroundColor Green
Copy-Item -Path out\direct-access.html -Destination out\index.html -Force
Copy-Item -Path out\direct-access.html -Destination out\minimal-index.html -Force

# Create a .nojekyll file to disable Jekyll processing
Write-Host "Creating .nojekyll file..." -ForegroundColor Green
"" | Out-File -FilePath out\.nojekyll -Encoding utf8 -NoNewline

# Add all files in the out directory
Write-Host "Adding files to Git..." -ForegroundColor Green
git add out\*

# Commit the changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Fix GitHub Pages: Replace minimal-index.html with direct access page"

# Force push to gh-pages branch
Write-Host "Pushing to gh-pages branch..." -ForegroundColor Green
git push -f origin gh-pages-new:gh-pages

# Return to main branch
git checkout main

Write-Host "Done! GitHub Pages should now show your portfolio instead of the minimal test page." -ForegroundColor Green
Write-Host "Please check https://zaheerartist.github.io/zaheerbijapure/ in a few minutes." -ForegroundColor Yellow 