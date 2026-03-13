# Installation Instructions

## Prerequisites

This project requires Node.js and npm (Node Package Manager) to run.

## Step 1: Install Node.js

### macOS

**Option 1: Using Homebrew (Recommended)**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify installation
node --version
npm --version
```

**Option 2: Download Installer**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the macOS installer (LTS version recommended)
3. Run the installer and follow the prompts
4. Verify in Terminal:
   ```bash
   node --version
   npm --version
   ```

### Windows

**Option 1: Download Installer (Recommended)**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the Windows installer (LTS version recommended)
3. Run the installer
4. Follow the installation wizard
5. Restart your computer
6. Verify in Command Prompt or PowerShell:
   ```bash
   node --version
   npm --version
   ```

**Option 2: Using Chocolatey**
```bash
# Install Chocolatey if you don't have it (run as Administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Node.js
choco install nodejs

# Verify installation
node --version
npm --version
```

**Option 3: Using Winget**
```bash
# Windows 10/11 with winget
winget install OpenJS.NodeJS

# Verify installation
node --version
npm --version
```

### Linux

**Ubuntu/Debian:**
```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version

# If you need a newer version, use NodeSource:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Fedora/RHEL/CentOS:**
```bash
# Install Node.js and npm
sudo dnf install nodejs npm

# Verify installation
node --version
npm --version
```

**Arch Linux:**
```bash
# Install Node.js and npm
sudo pacman -S nodejs npm

# Verify installation
node --version
npm --version
```

## Step 2: Install Project Dependencies

Once Node.js is installed, navigate to the project directory and install dependencies:

```bash
# Navigate to project directory
cd sneaker-brand

# Install all dependencies
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion
- React Icons
- PostCSS & Autoprefixer

**Installation time:** 1-3 minutes depending on your internet speed

## Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.2.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Open your browser to `http://localhost:3000` 🎉

## Troubleshooting

### Issue: "npm: command not found"

**Solution:** Node.js/npm not installed correctly
- Restart your terminal/command prompt
- Verify installation: `node --version`
- Reinstall Node.js if needed

### Issue: "Permission denied" (macOS/Linux)

**Solution:** Use sudo or fix npm permissions
```bash
# Option 1: Use sudo (not recommended)
sudo npm install

# Option 2: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Issue: Port 3000 already in use

**Solution:** Kill the process or use a different port
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.js
server: {
  port: 3001
}
```

### Issue: Dependencies not installing

**Solution:** Clear cache and retry
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: "Cannot find module" errors

**Solution:** Reinstall dependencies
```bash
npm install
```

### Issue: Slow installation

**Solution:** Use a faster registry
```bash
# Use npm registry mirror (if in China)
npm config set registry https://registry.npmmirror.com

# Or use yarn instead
npm install -g yarn
yarn install
```

## Alternative Package Managers

### Using Yarn

```bash
# Install Yarn
npm install -g yarn

# Install dependencies
yarn

# Start dev server
yarn dev
```

### Using pnpm

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

## Verify Installation

After installation, verify everything works:

```bash
# Check Node.js version (should be 16+)
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Start development server
npm run dev
```

## System Requirements

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **RAM**: 2GB minimum, 4GB recommended
- **Disk Space**: 500MB for node_modules
- **OS**: macOS, Windows 10+, or Linux

## Next Steps

Once installation is complete:

1. ✅ Development server running at `http://localhost:3000`
2. 📝 Read `QUICKSTART.md` for customization tips
3. 🎨 Replace placeholder images with real sneaker photos
4. 🚀 Check `DEPLOYMENT.md` when ready to deploy

## Getting Help

If you encounter issues:

1. Check the error message carefully
2. Search for the error on Google or Stack Overflow
3. Check Node.js documentation: [nodejs.org/docs](https://nodejs.org/docs)
4. Check npm documentation: [docs.npmjs.com](https://docs.npmjs.com)
5. Check Vite documentation: [vitejs.dev](https://vitejs.dev)

## Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Install a new package
npm install package-name

# Uninstall a package
npm uninstall package-name
```

---

Happy coding! 🚀
