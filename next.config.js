/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Awesome-Vibe-Coding',
  assetPrefix: '/Awesome-Vibe-Coding',
};

export default nextConfig;
