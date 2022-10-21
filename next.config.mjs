import { withContentlayer } from 'next-contentlayer';

export default withContentlayer({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error'
    };
    return config;
  }
});
