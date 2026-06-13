# 🚀 Deployment Guide

Complete guide to deploying Chekameh to production environments.

---

## 📋 Pre-Deployment Checklist

### Code Quality

- [ ] All code tested locally
- [ ] No console errors in DevTools
- [ ] All features working as expected
- [ ] Performance optimized
- [ ] Images compressed
- [ ] CSS/JS minified (optional)

### Security

- [ ] Dependencies updated (`npm audit fix`)
- [ ] No hardcoded secrets or API keys
- [ ] HTTPS enabled on domain
- [ ] Security headers configured
- [ ] Dependencies scanned for vulnerabilities

### Content

- [ ] All poets/cities data verified
- [ ] Links are working
- [ ] Documentation updated
- [ ] Changelog created
- [ ] Version bumped in package.json

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

**Easiest option for static sites**

#### Step 1: Prepare Repository

```bash
# Make sure everything is committed
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

#### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and choose your repository
4. Configure build settings:
   - **Build command**: `npm run build` (or leave empty for static)
   - **Publish directory**: `.` (root) or `md_site` (for docs)

#### Step 3: Configure Domain

```
Netlify Settings → Domain Management → Add custom domain
```

#### Step 4: Enable HTTPS

```
Netlify automatically provides free HTTPS via Let's Encrypt
```

#### Step 5: Deploy

```bash
# Just push to main branch
git push origin main
# Netlify automatically deploys!
```

---

### Option 2: Vercel

**Alternative static hosting**

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Deploy

```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

#### Step 3: Configure Domain

```bash
vercel domains add yourdomain.com
```

---

### Option 3: GitHub Pages

**Free hosting directly from GitHub**

#### Step 1: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "GitHub Pages" section
3. Select source: `main` branch, `/root` or `/docs` folder

#### Step 2: Configure Domain

1. Add custom domain in Settings
2. Create CNAME file in root:

```
yourdomain.com
```

#### Step 3: Wait for DNS

DNS changes can take 24-48 hours

---

### Option 4: Traditional Hosting

**Using FTP/SSH**

#### Step 1: Build for Production

```bash
# Minimize/optimize files
npm run build

# Or manually prepare files
```

#### Step 2: Upload Files

```bash
# Using FTP
ftp user@host.com
# or using SCP
scp -r ./* user@host:/path/to/public_html/

# or using rsync
rsync -avz ./* user@host:/path/to/public_html/
```

#### Step 3: Configure Server

- Set proper MIME types
- Enable gzip compression
- Configure caching headers
- Enable HTTPS

---

## 🔒 Security Configuration

### HTTPS Setup

**Self-signed certificate** (testing only):

```bash
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

**Let's Encrypt** (free, recommended):

```bash
# Using certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d yourdomain.com
```

### Security Headers

Add to your hosting config:

```
# Netlify: netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

```
# Vercel: vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 📊 Performance Optimization

### Caching Strategy

**Netlify configuration**:

```toml
# netlify.toml
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[headers]]
  for = "/"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Compression

Enable gzip and brotli compression:

```bash
# Verify compression is enabled
curl -I -H "Accept-Encoding: gzip" https://chekameh.xyz | grep -i content-encoding
```

### Image Optimization

Before deployment:

```bash
# Use ImageMagick
convert image.png -quality 85 image-optimized.png

# Or use imagemin
npx imagemin img/* --out-dir=img-min
```

---

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test

      - name: Build
        run: npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: "./md_site"
          production-deploy: true
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Set up secrets:

```bash
# In GitHub repository Settings → Secrets
NETLIFY_AUTH_TOKEN=<your-token>
NETLIFY_SITE_ID=<your-site-id>
```

---

## 📈 Monitoring & Analytics

### Performance Monitoring

**Google PageSpeed Insights**:

- Visit https://pagespeed.web.dev
- Enter your domain
- Check performance score

**WebPageTest**:

- Visit https://www.webpagetest.org
- Detailed performance analysis

### Error Tracking

**Sentry Integration** (optional):

```javascript
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://key@sentry.io/project",
  environment: "production",
});
```

### Analytics

**Google Analytics**:

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

---

## 📝 Post-Deployment

### Verification Steps

1. **Test the site**:
   - [ ] Homepage loads
   - [ ] Map displays correctly
   - [ ] Time slider works
   - [ ] Cities/poets open
   - [ ] Chatbot responds
   - [ ] Documentation accessible

2. **Check performance**:

   ```bash
   # Test homepage load time
   curl -w "Total time: %{time_total}s\n" -o /dev/null -s https://chekameh.xyz
   ```

3. **Verify HTTPS**:

   ```bash
   # Should show certificate info
   echo | openssl s_client -servername chekameh.xyz -connect chekameh.xyz:443
   ```

4. **Check security headers**:
   ```bash
   curl -I https://chekameh.xyz | grep -i "x-content-type"
   ```

### Create Release

```bash
# Tag the release
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0

# Create GitHub release
# Go to Releases → Create Release
```

---

## 🔄 Rollback Procedure

### If Something Goes Wrong

**Netlify**:

1. Go to Netlify dashboard
2. Scroll to "Deploy history"
3. Click "Restore" on previous deployment

**Vercel**:

1. Go to Deployments
2. Click on previous deployment
3. Click "Promote to Production"

**GitHub Pages**:

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# GitHub Pages automatically redeploys
```

---

## 📊 Environment Variables

**For API keys or secrets** (if needed):

### Netlify

```bash
# In Netlify dashboard
Settings → Build & Deploy → Environment
```

### Vercel

```bash
# In vercel.json
{
  "env": {
    "API_KEY": "@api_key"
  }
}
```

### Local Development

```bash
# Create .env file (add to .gitignore)
API_KEY=your_key_here

# Load with js-dotenv or similar
```

---

## 🚨 Troubleshooting Deployment

### Site Shows 404

**Solution**: Check that publish directory is correct

- For static site: root `.`
- For docs: `md_site` or `build`

### Map Not Loading

**Solution**: Check that CDN links work

```bash
curl -I https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js
```

### Fonts Missing

**Solution**: Verify Google Fonts import

```bash
curl -I https://fonts.googleapis.com/css2?family=Vazirmatn
```

### Slow Performance

**Solution**: Enable compression and caching

- Check gzip is enabled
- Optimize images
- Use CDN for static files

---

## 📚 Related Documentation

- [Installation Guide](installation.md)
- [Development Overview](overview.md)

---

**Ready to deploy? Follow the checklist and choose your platform!** 🚀
