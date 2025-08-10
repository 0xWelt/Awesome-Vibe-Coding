// Unified environment detection and path configuration
const isGitHubPages = process.env.NODE_ENV === 'production';
const repositoryName = '/Awesome-Vibe-Coding';

export const config = {
  // Environment detection
  environment: {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    isGitHubPages,
  },

  // Base paths
  basePath: isGitHubPages ? repositoryName : '',

  // Data paths (build-time)
  dataPath: {
    tools: `${isGitHubPages ? repositoryName : ''}/data/tools.json`,
    categories: `${isGitHubPages ? repositoryName : ''}/data/categories.json`,
  },

  // Helper function to get full path (build-time)
  getFullPath: (path: string) =>
    `${isGitHubPages ? repositoryName : ''}${path}`,

  // Runtime path utilities for client-side
  runtime: {
    // Get base path for client-side routing
    getBasePath: () => {
      if (typeof window !== 'undefined') {
        return window.location.pathname.startsWith('/Awesome-Vibe-Coding')
          ? '/Awesome-Vibe-Coding'
          : '';
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
