const { defineConfig } = require('cypress');
const { installPlugin } = require('@chromatic-com/cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
