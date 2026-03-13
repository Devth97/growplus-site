# Switch Domain from Old Netlify Site to New Site

## Step 1: Remove Domain from Old Site

1. Go to https://app.netlify.com/sites
2. Click on your **old project** (the half-completed one)
3. Go to **Domain management** (left sidebar)
4. Click the **"..."** menu next to your custom domain
5. Click **"Remove domain"** or **"Delete"**
6. Confirm the removal

---

## Step 2: Create New Netlify Site

### Option A: Drag & Drop (Fastest)
1. Go to https://app.netlify.com/drop
2. Drag your entire `dist/` folder onto the drop zone
3. Wait for upload to complete

### Option B: Using Netlify CLI
```bash
# Install if needed
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

---

## Step 3: Connect Your Domain

1. Once the new site is created, click on it
2. Go to **Domain management**
3. Click **"Add custom domain"**
4. Enter your domain name (e.g., `growplus.site`)
5. Click **"Verify"** and **"Add domain"**
6. Choose DNS configuration:

### Option 1: Use Netlify DNS (Recommended)
- Click **"Set up Netlify DNS"**
- Netlify will provide nameservers (e.g., `dns1.p01.nsone.net`, `dns2.p01.nsone.net`)
- Go to your domain registrar (where you bought the domain)
- Update the nameservers to the ones Netlify provided
- Wait for propagation (can take up to 48 hours)

### Option 2: Use External DNS
If you want to keep your current DNS provider, add these records:

**For root domain (@):**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [your-new-site-name].netlify.app
TTL: 3600
```

---

## Step 4: Verify SSL/HTTPS

1. In your new Netlify site, go to **Domain management**
2. Under **HTTPS**, click **"Verify DNS configuration"**
3. Netlify will automatically provision an SSL certificate
4. Enable **"Force HTTPS"** to redirect HTTP to HTTPS

---

## Troubleshooting

**Domain still shows old site?**
- Clear browser cache (Ctrl+Shift+R)
- Wait for DNS propagation (up to 48 hours)
- Check DNS propagation at https://dnschecker.org

**SSL certificate not working?**
- Wait 24 hours for certificate provisioning
- Make sure DNS is fully propagated first
- Click "Renew certificate" in Netlify if needed

**Getting 404 errors?**
- Make sure all files were uploaded in the `dist/` folder
- Check that `_redirects` file is present in dist/
- Verify all media files are in the client subfolders

---

## Quick Checklist

- [ ] Removed domain from old Netlify site
- [ ] Deployed new site to Netlify
- [ ] Added custom domain to new site
- [ ] Updated DNS settings (nameservers or records)
- [ ] Verified HTTPS/SSL is working
- [ ] Tested all pages and media content
- [ ] Confirmed email contact@growplus.site works

---

## Contact for Help

If you get stuck, you can:
1. Check Netlify docs: https://docs.netlify.com
2. Contact Netlify support from your dashboard
3. Or email: connect@growplus.site

---

## Current Project Status

**Build completed:** February 1, 2026
**Total size:** 122MB
**Files included:**
- All 9 client portfolios (31 content items)
- Videos, posters, and thumbnails
- Updated contact: connect@growplus.site
- Optimized assets for production

**Dev Tunnel (for testing):**
https://pete-lat-korea-baker.trycloudflare.com

