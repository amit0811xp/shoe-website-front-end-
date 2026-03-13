# 🚀 Deploy STRIDE to Vercel

This guide will help you deploy your sneaker brand website to Vercel in minutes!

## Prerequisites

✅ Your project is ready (already done!)
✅ Git installed on your computer
✅ GitHub account
✅ Vercel account (free)

---

## Step 1: Create a GitHub Repository

### Option A: Using GitHub Desktop (Easiest)
1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Select your project folder
5. Click "Publish repository"
6. Name it: `stride-sneaker-brand`
7. Click "Publish Repository"

### Option B: Using Command Line
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - STRIDE Sneaker Brand"

# Create a new repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/stride-sneaker-brand.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Method 1: Using Vercel Website (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" (use GitHub to sign in)

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your `stride-sneaker-brand` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes ⏳
   - Your site is live! 🎉

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? stride-sneaker-brand
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## Step 3: Your Live Website

After deployment, you'll get a URL like:
```
https://stride-sneaker-brand.vercel.app
```

Or your custom domain if you set one up!

---

## 🎯 Automatic Deployments

Every time you push to GitHub, Vercel will automatically:
- Build your project
- Deploy the new version
- Give you a preview URL

### To Update Your Site:

```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Updated hero section"
git push
```

Vercel will automatically deploy! ✨

---

## 🌐 Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS instructions
5. Your site will be live on your domain!

---

## 🔧 Environment Variables (If Needed)

If you add API keys or secrets later:

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add your variables
5. Redeploy

---

## 📊 Project Settings

Your project is already configured with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `vite.config.js` - Build configuration
- ✅ `package.json` - Dependencies and scripts

---

## 🐛 Troubleshooting

### Build Failed?
- Check that all dependencies are in `package.json`
- Make sure `npm run build` works locally first
- Check Vercel build logs for errors

### Images Not Loading?
- All Unsplash images should work fine
- If using local images, make sure they're in the `public` folder

### 404 Errors?
- The `vercel.json` file handles routing
- All routes redirect to `index.html` (already configured)

---

## 🎉 You're Done!

Your STRIDE sneaker brand website is now live on the internet!

Share your link:
- On social media
- With friends
- In your portfolio
- On your resume

---

## 📈 Next Steps

1. **Analytics**: Add Vercel Analytics to track visitors
2. **SEO**: Add meta tags for better Google ranking
3. **Performance**: Vercel automatically optimizes your site
4. **Custom Domain**: Connect your own domain name

---

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repo

---

**Built with ❤️ for sneaker enthusiasts**

STRIDE - Step Into Greatness 👟
