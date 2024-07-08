// next.config.js
module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Add a custom loader
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });

    return config;
  },
};