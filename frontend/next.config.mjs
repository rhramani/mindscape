/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all for initial setup, you can restrict this later
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
