# Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Node.js

If you don't have Node.js installed:

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

**Windows:**
```bash
# Using Chocolatey
choco install nodejs

# Or download from https://nodejs.org/
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Or download from https://nodejs.org/
```

### 2️⃣ Install Dependencies

```bash
npm install
```

This will install:
- React & React DOM
- Framer Motion (animations)
- React Icons
- Tailwind CSS
- Vite (build tool)

### 3️⃣ Start Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:3000` 🎉

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## What You'll See

✨ **Hero Section** - Animated landing page with gradient background
🎨 **Product Showcase** - Interactive color selector
⚡ **Features** - Premium technology highlights
🖼️ **Gallery** - Lifestyle images with lightbox
⏰ **Countdown** - Limited edition drop timer
💬 **Testimonials** - Customer reviews slider
📧 **Email Signup** - Newsletter subscription
🌙 **Dark Mode** - Theme toggle in navbar

## Customization Quick Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B35',   // Your brand color
  secondary: '#004E89', // Secondary color
  accent: '#F77F00',    // Accent color
}
```

### Add Real Images
1. Place images in `src/assets/images/`
2. Import in components:
```javascript
import sneaker from '../assets/images/sneaker.png'
```
3. Replace emoji placeholders

### Update Content
- Product info: `src/components/ProductShowcase.jsx`
- Features: `src/components/FeaturesSection.jsx`
- Testimonials: `src/components/TestimonialSection.jsx`

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.js
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## Next Steps

1. ✅ Replace placeholder emojis with real sneaker images
2. ✅ Customize colors to match your brand
3. ✅ Update product information
4. ✅ Add more products to the gallery
5. ✅ Connect email signup to a service (Mailchimp, SendGrid)
6. ✅ Deploy to Vercel, Netlify, or your hosting provider

## Need Help?

- Check `README.md` for detailed documentation
- Review component files for inline comments
- Visit [React docs](https://react.dev)
- Visit [Tailwind docs](https://tailwindcss.com)
- Visit [Framer Motion docs](https://www.framer.com/motion)

Happy coding! 🚀
