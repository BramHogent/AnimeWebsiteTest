# Final GitHub Upload Script for Anime Review Website
# Repository: https://github.com/BramHogent/anime-review-website.git

Write-Host "🎌 Anime Review Website - Final GitHub Upload" -ForegroundColor Magenta
Write-Host "=============================================" -ForegroundColor Magenta
Write-Host ""

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed or not in PATH!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/windows" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell and run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "🔧 Setting up repository..." -ForegroundColor Yellow

# Initialize git repository (if not already done)
if (-not (Test-Path ".git")) {
    Write-Host "📁 Initializing Git repository..." -ForegroundColor Cyan
    git init
} else {
    Write-Host "📁 Git repository already initialized" -ForegroundColor Green
}

# Configure git user (basic setup)
Write-Host "⚙️  Configuring Git user..." -ForegroundColor Cyan
git config user.name "BramHogent"
git config user.email "bram@example.com"

# Add all files to staging
Write-Host "📋 Adding files to staging area..." -ForegroundColor Cyan
git add .

# Create initial commit (if no commits exist)
$commitCount = git rev-list --count HEAD 2>$null
if ($LASTEXITCODE -ne 0 -or $commitCount -eq 0) {
    Write-Host "💾 Creating initial commit..." -ForegroundColor Cyan
    git commit -m "Initial commit: Angular anime review website

- Created Angular 19 project with TypeScript and SCSS
- Implemented seasonal anime listings with filtering
- Built responsive anime card components with Material Design
- Added user review system with reactive forms
- Integrated Angular Material for modern UI
- Created mock data service with sample anime
- Implemented responsive design for mobile and desktop
- Added custom Material theme with gradient styling"
} else {
    Write-Host "💾 Repository already has commits" -ForegroundColor Green
}

# Set repository URL
$repoUrl = "https://github.com/BramHogent/anime-review-website.git"
Write-Host "🔗 Connecting to repository: $repoUrl" -ForegroundColor Green

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "🔄 Remote origin already exists, updating..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
} else {
    Write-Host "➕ Adding remote origin..." -ForegroundColor Cyan
    git remote add origin $repoUrl
}

# Set main branch
Write-Host "🌿 Setting up main branch..." -ForegroundColor Cyan
git branch -M main

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "This may take a moment..." -ForegroundColor Gray

try {
    git push -u origin main
    Write-Host ""
    Write-Host "🎉 SUCCESS! Your anime review website is now on GitHub!" -ForegroundColor Green
    Write-Host "📁 Repository: $repoUrl" -ForegroundColor Cyan
    Write-Host "🌐 View your project: https://github.com/BramHogent/anime-review-website" -ForegroundColor Cyan
    
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Blue
    Write-Host "1. ✅ README.md is already updated with correct repository URL" -ForegroundColor White
    Write-Host "2. 🌐 Consider setting up GitHub Pages for live demo" -ForegroundColor White
    Write-Host "3. 🏷️  Add topics/tags to your repository for better discoverability" -ForegroundColor White
    Write-Host "4. 📄 Add a LICENSE file if you want to specify licensing terms" -ForegroundColor White
    
} catch {
    Write-Host "❌ Error pushing to GitHub: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 This might be due to:" -ForegroundColor Yellow
    Write-Host "   - Repository doesn't exist on GitHub" -ForegroundColor White
    Write-Host "   - Authentication issues" -ForegroundColor White
    Write-Host "   - Network connectivity" -ForegroundColor White
    Write-Host ""
    Write-Host "🔧 Try these solutions:" -ForegroundColor Cyan
    Write-Host "   1. Make sure the repository exists: https://github.com/BramHogent/anime-review-website" -ForegroundColor White
    Write-Host "   2. Set up Git credentials: git config --global credential.helper manager" -ForegroundColor White
    Write-Host "   3. Try pushing manually: git push -u origin main" -ForegroundColor White
}

Write-Host ""
Read-Host "Press Enter to exit"
