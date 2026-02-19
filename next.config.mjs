/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.winxmarketingmedia.in" }],
        destination: "https://winxmarketingmedia.in/:path*",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
 images: {
  formats: ['image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
  minimumCacheTTL: 60,
  unoptimized: false,
  dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "media.winxmarketingmedia.in" },
    { protocol: "https", hostname: "cdn.prod.website-files.com" },
    { protocol: "https", hostname: "a.storyblok.com" },
  ],
},

}

export default nextConfig
