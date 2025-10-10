/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  trailingSlash: true, // ensures URLs work correctly on static hosts
  images: {
    unoptimized: true, // required for static hosting (Hostinger)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'theninehertz.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
    ],
  },
};

export default nextConfig;
