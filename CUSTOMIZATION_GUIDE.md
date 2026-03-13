# Customization Guide

Step-by-step guide to customize the STRIDE website for your brand.

## 🎨 1. Change Brand Colors

### Edit `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF6B35',    // Change to your primary brand color
      secondary: '#004E89',  // Change to your secondary color
      accent: '#F77F00',     // Change to your accent color
      dark: '#1A1A1D',       // Dark theme background
      light: '#F5F5F5',      // Light theme background
    }
  }
}
```

**Color Picker Tools:**
- [Coolors.co](https://coolors.co/) - Generate color palettes
- [Adobe Color](https://color.adobe.com/) - Color wheel
- [Paletton](https://paletton.com/) - Color scheme designer

**After changing colors:**
```bash
# Restart dev server to see changes
npm run dev
```

---

## 🏷️ 2. Change Brand Name

### Update in Multiple Files

**1. Navbar (`src/components/Navbar.jsx`)**
```javascript
<motion.div className="text-3xl font-bold text-gradient">
  YOUR BRAND  {/* Change from STRIDE */}
</motion.div>
```

**2. Hero Section (`src/components/HeroSection.jsx`)**
```javascript
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
  YOUR TAGLINE
  <br />
  <span className="text-gradient">YOUR SLOGAN</span>
</h1>
```

**3. Footer (`src/components/Footer.jsx`)**
```javascript
<h3 className="text-4xl font-black text-gradient mb-4">
  YOUR BRAND
</h3>
```

**4. HTML Title (`index.html`)**
```html
<title>YOUR BRAND - Premium Sneaker Collection</title>
```

**5. Email Signup (`src/components/EmailSignup.jsx`)**
```javascript
<h2 className="text-4xl md:text-6xl font-black text-white mb-4">
  JOIN THE YOUR BRAND COMMUNITY
</h2>
```

---

## 📸 3. Add Real Product Images

### Step 1: Prepare Images

**Recommended Sizes:**
- Hero sneaker: 1200x1200px
- Product showcase: 800x800px
- Gallery images: 600x600px
- Minimum: 500x500px

**Format:** JPG or WebP (for better performance)

**Optimization:** Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

### Step 2: Add Images to Project

```bash
# Create images folder
mkdir -p src/assets/images

# Add your images
# - hero-sneaker.jpg
# - product-black.jpg
# - product-white.jpg
# - product-red.jpg
# - product-blue.jpg
# - product-green.jpg
# - gallery-1.jpg through gallery-8.jpg
```

### Step 3: Import and Use Images

**Hero Section (`src/components/HeroSection.jsx`)**
```javascript
import heroSneaker from '../assets/images/hero-sneaker.jpg'

// Replace emoji div with:
<img 
  src={heroSneaker} 
  alt="Premium sneaker" 
  className="w-full h-full object-contain"
/>
```

**Product Showcase (`src/components/ProductShowcase.jsx`)**
```javascript
import blackSneaker from '../assets/images/product-black.jpg'
import whiteSneaker from '../assets/images/product-white.jpg'
import redSneaker from '../assets/images/product-red.jpg'
import blueSneaker from '../assets/images/product-blue.jpg'
import greenSneaker from '../assets/images/product-green.jpg'

const colorImages = {
  black: blackSneaker,
  white: whiteSneaker,
  red: redSneaker,
  blue: blueSneaker,
  green: greenSneaker,
}

// Replace emoji div with:
<img 
  src={colorImages[selectedColor]} 
  alt={`Sneaker in ${selectedColor}`}
  className="w-full h-full object-contain"
/>
```

**Gallery (`src/components/SneakerGallery.jsx`)**
```javascript
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
// ... import all 8 images

const galleryImages = [
  { id: 1, title: 'Urban Style', category: 'Lifestyle', image: gallery1 },
  { id: 2, title: 'Sport Performance', category: 'Athletic', image: gallery2 },
  // ... update all 8 items
]

// Replace emoji div with:
<img 
  src={image.image} 
  alt={image.title}
  className="w-full h-full object-cover"
/>
```

---

## 📝 4. Update Product Information

### Product Showcase (`src/components/ProductShowcase.jsx`)

```javascript
const product = {
  name: 'YOUR PRODUCT NAME',           // Change product name
  price: '$XXX.XX',                    // Change price
  description: 'Your product description...', // Change description
  features: [
    'Your Feature 1',                  // Change features
    'Your Feature 2',
    'Your Feature 3',
    'Your Feature 4'
  ]
}
```

### Features Section (`src/components/FeaturesSection.jsx`)

```javascript
const features = [
  {
    icon: <FiZap />,                   // Change icon
    title: 'Your Feature Title',       // Change title
    description: 'Your description...', // Change description
    color: 'from-primary to-accent'
  },
  // ... update all 4 features
]
```

---

## 💬 5. Update Testimonials

### Testimonials Section (`src/components/TestimonialSection.jsx`)

```javascript
const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    role: 'Customer Role',
    avatar: '👤',  // Or use image: import avatar from '../assets/avatars/1.jpg'
    rating: 5,
    text: 'Customer review text...',
    location: 'City, Country'
  },
  // ... add your real testimonials
]
```

**To use real avatar images:**
```javascript
import avatar1 from '../assets/avatars/avatar1.jpg'

// Then in testimonial object:
avatar: avatar1,

// And in JSX:
<img 
  src={testimonials[currentIndex].avatar} 
  alt={testimonials[currentIndex].name}
  className="w-20 h-20 rounded-full object-cover"
/>
```

---

## 🔗 6. Update Links and Contact Info

### Footer (`src/components/Footer.jsx`)

```javascript
// Update contact info
<div className="flex items-center gap-3 text-gray-400">
  <FiMail className="text-primary" />
  <span className="text-sm">your-email@domain.com</span>
</div>
<div className="flex items-center gap-3 text-gray-400">
  <FiPhone className="text-primary" />
  <span className="text-sm">+1 (XXX) XXX-XXXX</span>
</div>
<div className="flex items-center gap-3 text-gray-400">
  <FiMapPin className="text-primary" />
  <span className="text-sm">Your Address</span>
</div>

// Update social links
const socialLinks = [
  { icon: <FiInstagram />, label: 'Instagram', href: 'https://instagram.com/yourbrand' },
  { icon: <FiTwitter />, label: 'Twitter', href: 'https://twitter.com/yourbrand' },
  { icon: <FiFacebook />, label: 'Facebook', href: 'https://facebook.com/yourbrand' },
  { icon: <FiYoutube />, label: 'YouTube', href: 'https://youtube.com/yourbrand' }
]
```

---

## ⏰ 7. Customize Countdown Timer

### Countdown Drop (`src/components/CountdownDrop.jsx`)

```javascript
// Change target date
const targetDate = new Date('2024-12-31T00:00:00') // Set your launch date

// Update pricing and quantity
<div>
  <div className="text-3xl font-bold">XXX</div>  // Change quantity
  <div className="text-sm text-white/80">Limited Pairs</div>
</div>
<div>
  <div className="text-3xl font-bold">$XXX</div>  // Change price
  <div className="text-sm text-white/80">Special Price</div>
</div>
```

---

## 🎨 8. Change Fonts

### Option 1: Use Google Fonts

**1. Update `index.html`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

**2. Update `tailwind.config.js`:**
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'Arial Black', 'sans-serif'],
}
```

### Option 2: Use Local Fonts

**1. Add fonts to `src/assets/fonts/`**

**2. Import in `src/styles/global.css`:**
```css
@font-face {
  font-family: 'YourFont';
  src: url('../assets/fonts/YourFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

**3. Update `tailwind.config.js`:**
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

---

## 🌐 9. Update SEO Meta Tags

### Edit `index.html`

```html
<head>
  <!-- Basic Meta Tags -->
  <title>Your Brand - Your Tagline</title>
  <meta name="description" content="Your brand description for search engines" />
  <meta name="keywords" content="your, keywords, here" />
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Your Brand - Your Tagline" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Brand - Your Tagline" />
  <meta name="twitter:description" content="Your description" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />
</head>
```

---

## 🎬 10. Customize Animations

### Adjust Animation Speed

**In component files:**
```javascript
// Slower animation
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 5 }}  // Increase duration
>

// Faster animation
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 1 }}  // Decrease duration
>
```

### Disable Animations

**In `tailwind.config.js`:**
```javascript
// Comment out or remove animations
animation: {
  // 'float': 'float 3s ease-in-out infinite',
}
```

---

## 📧 11. Connect Email Signup

### Option 1: Mailchimp

```javascript
// In EmailSignup.jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('YOUR_MAILCHIMP_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  
  if (response.ok) {
    setIsSubmitted(true)
  }
}
```

### Option 2: SendGrid

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  
  if (response.ok) {
    setIsSubmitted(true)
  }
}
```

---

## 🛒 12. Add Shopping Cart Functionality

### Create Cart Context

**1. Create `src/context/CartContext.jsx`:**
```javascript
import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
```

**2. Wrap App in `src/main.jsx`:**
```javascript
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
```

**3. Use in components:**
```javascript
import { useCart } from '../context/CartContext'

const ProductShowcase = () => {
  const { addToCart } = useCart()
  
  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: product.name,
      price: product.price,
      color: selectedColor
    })
  }
  
  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  )
}
```

---

## 🎯 Quick Customization Checklist

- [ ] Change brand colors in `tailwind.config.js`
- [ ] Update brand name in all components
- [ ] Replace emoji placeholders with real images
- [ ] Update product information
- [ ] Customize features section
- [ ] Add real customer testimonials
- [ ] Update contact information
- [ ] Change social media links
- [ ] Customize countdown date and pricing
- [ ] Update SEO meta tags
- [ ] Change fonts (optional)
- [ ] Connect email signup service
- [ ] Add favicon
- [ ] Test on multiple devices

---

## 💡 Pro Tips

1. **Use consistent image sizes** for better performance
2. **Optimize images** before adding to project
3. **Test dark mode** after color changes
4. **Keep animations subtle** for better UX
5. **Test on mobile** frequently
6. **Use real content** as soon as possible
7. **Backup before major changes**
8. **Commit to Git** regularly

---

## 🆘 Need Help?

- Check component files for inline comments
- Review `README.md` for detailed documentation
- Test changes in development mode: `npm run dev`
- Use browser DevTools to inspect elements
- Check console for errors

---

Happy customizing! 🎨
