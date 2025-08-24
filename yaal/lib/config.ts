import { githubConfig } from './githubConfig';

// Unified environment detection and path configuration
// 更清晰的环境检测逻辑
const isBuildTime = typeof window === 'undefined';
const isProductionBuild = process.env.NODE_ENV === 'production';

// 运行时检测是否在 GitHub Pages
const isRuntimeGitHubPages =
  typeof window !== 'undefined' &&
  window.location.hostname.endsWith('.github.io');

// 最终判断：构建时使用环境变量，运行时使用域名检测
const isGitHubPages = isBuildTime ? isProductionBuild : isRuntimeGitHubPages;

export const config = {
  // Environment detection
  environment: {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    isGitHubPages,
  },

  // Base paths
  basePath: isGitHubPages ? `/${githubConfig.repo}` : '',

  // Data paths (build-time)
  dataPath: {
    tools: `${isGitHubPages ? `/${githubConfig.repo}` : ''}/data/tools.json`,
    categories: `${isGitHubPages ? `/${githubConfig.repo}` : ''}/data/categories.json`,
  },

  // Helper function to get full path (build-time)
  getFullPath: (path: string) =>
    `${isGitHubPages ? `/${githubConfig.repo}` : ''}${path}`,

  // Runtime path utilities for client-side
  runtime: {
    // Get base path for client-side routing
    getBasePath: () => {
      if (typeof window !== 'undefined') {
        const repoName = githubConfig.repo;
        const hostname = window.location.hostname;
        const pathname = window.location.pathname;

        // 检测是否在 GitHub Pages 上（通用检测，支持所有用户）
        if (hostname.endsWith('.github.io')) {
          return `/${repoName}`;
        }

        // 备用检测：如果路径已经包含仓库名
        if (
          pathname === `/${repoName}` ||
          pathname.startsWith(`/${repoName}/`)
        ) {
          return `/${repoName}`;
        }
      }
      return '';
    },

    // Get data path for client-side fetch
    getDataPath: (filename: string) => {
      const base = config.runtime.getBasePath();
      return `${base}/data/${filename}`;
    },

    // Get full path for any resource
    getResourcePath: (path: string) => {
      const base = config.runtime.getBasePath();
      return `${base}${path}`;
    },
  },
};
