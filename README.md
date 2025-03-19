# Zaheer Bijapure Portfolio Website

A sleek, modern, and visually engaging portfolio website for Zaheer Bijapure, a VFX Layout Artist and 3D Artist with 9 years of experience.

![Zaheer Bijapure Portfolio](https://via.placeholder.com/1200x600?text=Zaheer+Bijapure+Portfolio)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Theme**: Modern dark theme with vibrant accent colors
- **Interactive Elements**: Smooth animations and transitions for an engaging user experience
- **Portfolio Showcase**: Separate sections for VFX and AI projects with filtering capabilities
- **Contact Form**: Interactive contact form for potential clients or collaborators

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zaheer-portfolio.git
   cd zaheer-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
zaheer-portfolio/
├── app/                   # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── portfolio/         # Portfolio pages
│   │   ├── ai/            # AI portfolio
│   │   └── vfx/           # VFX portfolio
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Footer component
│   └── Navbar.tsx         # Navigation component
├── public/                # Static assets
│   └── logo/              # Logo files
├── styles/                # Additional styles
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind configuration
└── README.md              # Project documentation
```

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      background: '#121212',       // Main background
      primary: '#1E1E1E',          // Card backgrounds
      secondary: '#2A2A2A',        // Secondary elements
      accent1: '#7B68EE',          // Primary accent (purple)
      accent2: '#00CCFF',          // Secondary accent (cyan)
      textPrimary: '#FFFFFF',      // Main text
      textSecondary: '#AAAAAA',    // Secondary text
    },
  }
}
```

### Adding Projects

To add new projects to the portfolio, edit the data in the respective portfolio page files.

## Deployment

This website can be easily deployed to Vercel, Netlify, or other platforms that support Next.js:

```bash
# Build for production
npm run build
# or
yarn build
```

## License

[MIT](LICENSE)

## Credits

- Design and Development: [Your Name]
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Fonts: Google Fonts (Montserrat, Raleway)

---

Designed and built with ❤️ for Zaheer Bijapure 