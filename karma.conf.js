// How we want to run our test
// Karma: A simple tool that allows you to execute JavaScript code in multiple real browsers.
// We’ll also need the karma-mocha adapter so we can use mocha as a test framework with karma

var webpackConfig = require('./webpack.config.js')

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'], // We want to use Chrome to test
    singleRun: true,
    frameworks: ['mocha'], // Testing framework with describe and it (like rspec)
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ], // Which files to test
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // Run these before process test files
    },
    reporters: ['mocha'], // Clean up the output
    client: { // Send the details down to individual frameworks
      mocha: { // Tell mocha we want to wait 5 secs before test timeout
        timeout: '5000'
      }
    },
    webpack: webpackConfig, // Allow us to use webpack.config.js, the purpose of config webpack in karma is in order to use 'require' in test files
    webpackServer: {
      noInfo: true // Don't care webpack server config
    }
  })
}
