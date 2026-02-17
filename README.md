# Optylize Consulting Website

A modern, professional website for Optylize Consulting - GenAI Solutions provider. Built with Next.js 14, React, TypeScript, and Tailwind CSS based on the Figma design template.

## Features

- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Works seamlessly on all devices
- **Multiple Pages**: Home, About, Contact, Services, Industries
- **Modern UI**: Clean, professional design with gradient effects
- **Component-Based**: Reusable React components

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open: http://localhost:3000

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── Industries.tsx      # Industries section
│   ├── Testimonials.tsx    # Testimonials section
│   ├── Insights.tsx        # Blog/Insights section
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer component
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Pages

1. **Home** (`/`): Complete landing page with all sections
2. **About** (`/about`): Company information and history
3. **Contact** (`/contact`): Contact form and information
4. **Services**: GenAI consulting services
5. **Industries**: Industries served

## Customization

### Update Company Information

Edit the component files in `/components` to update:
- Company name and branding
- Service descriptions
- Contact information
- Statistics and testimonials

### Modify Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
    },
  },
}
```

### Add New Pages

Create new page files in the `app/` directory following Next.js App Router conventions.

## Technologies Used

- **Next.js 14**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## Development

```bash
# Run development server with hot reload
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Optylize Consulting. All rights reserved.
