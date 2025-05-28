# GitHub Upload Script for Anime Review Website
# Run this script after creating your GitHub repository

Write-Host "🎌 Anime Review Website - GitHub Upload Script" -ForegroundColor Magenta
Write-Host "=============================================" -ForegroundColor Magenta
Write-Host ""

# Get repository URL from user
$repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/anime-review-website.git)"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ Repository URL is required!" -ForegroundColor Red
    exit 1
}

Write-Host "🔗 Connecting to repository: $repoUrl" -ForegroundColor Green

# Add remote origin
git remote add origin $repoUrl
Write-Host "✅ Remote origin added successfully" -ForegroundColor Green

# Create main branch
git branch -M main
Write-Host "✅ Main branch created" -ForegroundColor Green

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "🎉 SUCCESS! Your anime review website is now on GitHub!" -ForegroundColor Green
Write-Host "📁 Repository: $repoUrl" -ForegroundColor Cyan
Write-Host "🌐 You can now view it on GitHub and set up GitHub Pages if desired" -ForegroundColor Cyan

Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Blue
Write-Host "1. Update README.md with correct repository URL" -ForegroundColor White
Write-Host "2. Consider setting up GitHub Pages for live demo" -ForegroundColor White
Write-Host "3. Add collaborators if this is a team project" -ForegroundColor White

Read-Host "Press Enter to exit"
