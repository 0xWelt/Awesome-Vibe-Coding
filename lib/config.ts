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

  // Data paths
  dataPath: {
    tools: `${isGitHubPages ? repositoryName : ''}/data/tools.json`,
    categories: `${isGitHubPages ? repositoryName : ''}/data/categories.json`,
  },

  // Helper function to get full path
  getFullPath: (path: string) =>
    `${isGitHubPages ? repositoryName : ''}${path}`,
};
