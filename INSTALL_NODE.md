# How to Install Node.js and npm on Your Mac

## Method 1: Using Homebrew (Recommended - Easiest)

### Step 1: Install Homebrew
Open your Terminal and paste this command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Press ENTER
- Enter your Mac password when asked (you won't see it typing - that's normal)
- Wait for it to finish (may take 5-10 minutes)

### Step 2: Install Node.js
After Homebrew is installed, run:

```bash
brew install node
```

Wait for it to finish.

### Step 3: Verify Installation
Check if it worked:

```bash
node --version
npm --version
```

You should see version numbers!

### Step 4: Run Your App
Now you can run:

```bash
npm install
npm run dev
```

---

## Method 2: Direct Download (If Homebrew doesn't work)

### Step 1: Download Node.js
1. Open Safari or Chrome
2. Go to: **https://nodejs.org/**
3. Click the big green button that says "LTS" (Long Term Support)
4. Download will start automatically

### Step 2: Install
1. Find the downloaded file (usually in Downloads folder)
2. Double-click the `.pkg` file
3. Follow the installation wizard
4. Click "Continue" → "Agree" → "Install"
5. Enter your Mac password when asked
6. Click "Close" when done

### Step 3: Restart Terminal
1. Close your Terminal completely (Cmd+Q)
2. Open Terminal again

### Step 4: Verify Installation
```bash
node --version
npm --version
```

### Step 5: Run Your App
```bash
npm install
npm run dev
```

---

## Troubleshooting

**If you still see "command not found: npm":**
1. Make sure you closed and reopened Terminal after installation
2. Try running: `which node` - if it shows nothing, Node.js didn't install correctly
3. Try the other installation method

**Need help?**
- Make sure you're connected to the internet
- Make sure you have enough disk space (at least 500MB free)
- Try restarting your Mac after installation

---

## What These Commands Do

- `npm install` - Downloads all the project dependencies
- `npm run dev` - Starts the development server
- Your app will open at `http://localhost:5173`
