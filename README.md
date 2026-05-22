# growplus-site

## Cloudflare R2 media

Runtime media URLs are generated from `VITE_MEDIA_BASE_URL`, which defaults to `https://media.growplus.site`.

To upload the former Cloudinary assets to R2:

1. Create a Cloudflare R2 bucket using Standard storage.
2. Connect the bucket to the production custom domain, for example `media.growplus.site`.
3. Copy `.env.example` to `.env.local` and fill in the `R2_*` values.
4. Run `npm run migrate:r2`.

The upload script uses `scripts/cloudinary-assets.json` as the migration manifest and stores objects under stable keys such as `growplus/Paavani/videos/Pavani_silks.mp4`.
