# STRIDE - Premium Sneaker Brand Website

A modern, interactive promotional website for a premium sneaker brand built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Stunning Hero Section** - Eye-catching landing with animated elements
- **Interactive Product Showcase** - Color selector with smooth transitions
- **Premium Features Display** - Highlight product technology with animated cards
- **Lifestyle Gallery** - Masonry grid with lightbox image preview
- **Limited Edition Countdown** - Real-time countdown timer for exclusive drops
- **Customer Testimonials** - Horizontal slider with ratings
- **Email Signup** - Newsletter subscription with animated feedback
- **Dark Mode Toggle** - Seamless theme switching
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion powered interactions
- **Accessibility** - ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library

## 📦 Installation

### Prerequisites

Make sure you have Node.js (v16 or higher) installed on your system.

### Setup Steps

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use a package manager:
     ```bash
     # macOS (using Homebrew)
     brew install node
     
     # Windows (using Chocolatey)
     choco install nodejs
     ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to `http://localhost:3000`
   - The site will automatically reload on file changes

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
sneaker-brand/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with dark mode toggle
│   │   ├── HeroSection.jsx         # Landing section with CTA
│   │   ├── ProductShowcase.jsx     # Interactive product display
│   │   ├── FeaturesSection.jsx     # Product features grid
│   │   ├── SneakerGallery.jsx      # Image gallery with lightbox
│   │   ├── CountdownDrop.jsx       # Limited edition countdown
│   │   ├── TestimonialSection.jsx  # Customer reviews slider
│   │   ├── EmailSignup.jsx         # Newsletter subscription
│   │   └── Footer.jsx              # Footer with links
│   ├── styles/
│   │   └── global.css              # Global styles and utilities
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
├── index.html                      # HTML template
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#FF6B35',    // Main brand color
  secondary: '#004E89',  // Secondary color
  accent: '#F77F00',     // Accent color
  dark: '#1A1A1D',       // Dark theme background
  light: '#F5F5F5',      // Light theme background
}
```

### Images

Replace placeholder emojis with actual sneaker images:

1. Add images to `src/assets/images/`
2. Import in components:
   ```javascript
   import sneakerImage from '../assets/images/sneaker.png'
   ```
3. Replace emoji placeholders with `<img>` tags

### Content

Update text content in each component file:
- Product names and descriptions in `ProductShowcase.jsx`
- Features in `FeaturesSection.jsx`
- Testimonials in `TestimonialSection.jsx`
- Footer links in `Footer.jsx`

## 🌟 Key Features Explained

### Color Selector
Interactive color picker that updates the product image in real-time with smooth animations.

### Countdown Timer
Automatically calculates time remaining until product drop (set to 7 days from current date).

### Dark Mode
Toggle between light and dark themes with smooth transitions throughout the site.

### Responsive Design
Mobile-first approach with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance Optimizations

- Lazy loading for images
- Code splitting with React
- Optimized animations with Framer Motion
- Minimal bundle size with Vite
- CSS purging in production

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for images (add when replacing placeholders)
- Color contrast compliance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to customize and extend this project for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 Next Steps

1. Replace emoji placeholders with high-quality sneaker images
2. Add actual product data from a CMS or API
3. Implement shopping cart functionality
4. Add payment integration
5. Connect email signup to a mailing service
6. Add more product pages
7. Implement user authentication
8. Add product reviews system

## 💡 Tips

- Use high-resolution images (at least 1920x1080 for hero section)
- Optimize images before adding (use WebP format)
- Test on multiple devices and browsers
- Consider adding Google Analytics
- Implement SEO best practices

---

Built with ❤️ for sneaker enthusiasts
# shoe-website-front-end-
# jarvis
