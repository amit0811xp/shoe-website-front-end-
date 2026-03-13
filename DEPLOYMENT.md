# Deployment Guide

Deploy your STRIDE sneaker website to production in minutes!

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

**Easiest and fastest deployment for Vite/React apps**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** - That's it! ✨

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite settings
4. Click "Deploy"

### Option 2: Netlify

**Great for continuous deployment**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

**Or use Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder
3. Done!

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages

**Free hosting for static sites**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/sneaker-brand",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/sneaker-brand/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Firebase Hosting

**Google's hosting solution**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure**
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: `Optional`

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Option 5: AWS S3 + CloudFront

**Enterprise-grade hosting**

1. **Build project**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   - Enable static website hosting
   - Set bucket policy for public access

3. **Upload dist folder**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. **Setup CloudFront** (optional)
   - Create distribution
   - Point to S3 bucket
   - Configure SSL certificate

## 📋 Pre-Deployment Checklist

- [ ] Replace all placeholder images with real images
- [ ] Update all text content (product names, descriptions)
- [ ] Test on multiple devices and browsers
- [ ] Optimize images (compress, use WebP)
- [ ] Update meta tags in `index.html`
- [ ] Add favicon
- [ ] Test dark mode toggle
- [ ] Verify all links work
- [ ] Test email signup form
- [ ] Check mobile responsiveness
- [ ] Run production build locally: `npm run build && npm run preview`

## 🔧 Build Optimization

### Image Optimization

```bash
# Install image optimization tool
npm install --save-dev vite-plugin-imagemin

# Add to vite.config.js
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      webp: { quality: 80 }
    })
  ]
})
```

### Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_GA_ID=your-google-analytics-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🌐 Custom Domain Setup

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### GitHub Pages
1. Add `CNAME` file to `public/` folder
2. Content: `yourdomain.com`
3. Update DNS A records to GitHub IPs

## 📊 Analytics Setup

### Google Analytics

1. **Get tracking ID** from [analytics.google.com](https://analytics.google.com)

2. **Add to index.html**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🔒 Security Headers

Add to `netlify.toml` or `vercel.json`:

**Netlify:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Vercel:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

## 🎯 SEO Optimization

### Update index.html

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>STRIDE - Premium Sneaker Collection | Shop Now</title>
  <meta name="description" content="Discover STRIDE's premium sneaker collection. Revolutionary comfort meets cutting-edge design. Free shipping on orders over $100." />
  <meta name="keywords" content="sneakers, premium shoes, athletic footwear, STRIDE" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="STRIDE - Premium Sneaker Collection" />
  <meta property="og:description" content="Experience the future of footwear" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="STRIDE - Premium Sneaker Collection" />
  <meta name="twitter:description" content="Experience the future of footwear" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
</head>
```

## 📱 PWA Setup (Optional)

Make your site installable as a Progressive Web App:

1. **Create manifest.json** in `public/`:
```json
{
  "name": "STRIDE Sneakers",
  "short_name": "STRIDE",
  "description": "Premium Sneaker Collection",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1A1A1D",
  "theme_color": "#FF6B35",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. **Link in index.html**:
```html
<link rel="manifest" href="/manifest.json">
```

## 🔍 Performance Monitoring

### Lighthouse CI

```bash
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

### Web Vitals

```bash
npm install web-vitals

# Add to main.jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🎉 Post-Deployment

1. **Test live site** on multiple devices
2. **Run Lighthouse audit** in Chrome DevTools
3. **Submit sitemap** to Google Search Console
4. **Set up monitoring** (Sentry, LogRocket)
5. **Configure CDN** for global performance
6. **Enable HTTPS** (usually automatic)
7. **Set up backups** and version control

## 📞 Support

Need help deploying? Check these resources:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

Your STRIDE website is ready to go live! 🚀
