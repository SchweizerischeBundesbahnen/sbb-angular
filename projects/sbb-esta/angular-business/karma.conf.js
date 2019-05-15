// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

if (process.env.CONTINUOUS_INTEGRATION) {
  process.env.CHROME_BIN = require('puppeteer').executablePath();
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(
        __dirname,
        '../../../coverage/sbb-esta/angular-business'
      ),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    captureTimeout: 100000,
    browserNoActivityTimeout: 100000,
    browserDisconnectTimeout: 100000,
    browserDisconnectTolerance: 3
  });
};
