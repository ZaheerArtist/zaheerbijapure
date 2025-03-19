# Zaheer Bijapure Portfolio

A professional portfolio showcasing VFX, AI art, and creative work by Zaheer Bijapure.

## Project Structure

```
├── app/               # Next.js App Router files
│   ├── about/         # About page
│   ├── components/    # App-specific components
│   ├── experience/    # Experience page
│   ├── portfolio/     # Portfolio pages
│   │   ├── ai/        # AI artwork portfolio
│   │   └── vfx/       # VFX work portfolio
│   ├── utils/         # Utility functions
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/            # Static assets
│   ├── ai-gallery/    # AI artwork images
│   ├── images/        # General images
│   ├── logos/         # Logo images
│   ├── thumbnail/     # Thumbnail images for projects
│   └── videos/        # Video assets
└── node_modules/      # Dependencies
```

## Development Workflow

### Local Development

1. **Clone the repository**
   ```
   git clone https://github.com/ZaheerArtist/zaheerbijapure.git
   cd zaheerbijapure
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Run the development server**
   ```
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)

### Adding New Content

#### Adding New Projects
1. To add new film/TV projects, add images to `public/thumbnail/` with naming format: `[Title]-[Year].jpg`
2. Update the projects array in `app/about/page.tsx`

#### Adding AI Artwork
1. Add new images to `public/ai-gallery/`
2. Update the gallery in `app/portfolio/ai/page.tsx` 

#### Adding VFX Work
1. Add new images to `public/images/`
2. Update the portfolio in `app/portfolio/vfx/page.tsx`

### Deployment

#### GitHub Pages Deployment

1. **Build the site**
   ```
   npm run build
   ```

2. **Export static files**
   ```
   npm run export
   ```

3. **Commit and push to the gh-pages branch**
   ```
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

## Troubleshooting

### Image Issues
- Make sure all image paths include the repository name when deployed on GitHub Pages
- Use the `getGitHubPagesUrl()` function from `app/utils/imagePathFixer.ts` for image paths
- Check browser console for image loading errors

### Local Development
- If port 3000 is in use, the site will automatically use the next available port
- Clear the `.next` cache if you encounter strange build issues: `rm -rf .next/` 