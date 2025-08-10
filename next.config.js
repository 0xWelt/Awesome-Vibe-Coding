/** @type {import('next').NextConfig} */

// 统一环境检测 - 构建时确定
const isGitHubPages = process.env.NODE_ENV === 'production';
const repositoryName = '/Awesome-Vibe-Coding';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? repositoryName : '',
  assetPrefix: isGitHubPages ? repositoryName : '',
};

export default nextConfig;
