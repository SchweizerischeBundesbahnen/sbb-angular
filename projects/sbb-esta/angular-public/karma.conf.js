// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

if (process.env.BUILD_NUMBER) {
  process.env.CHROME_BIN = require('puppeteer').executablePath();
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-browserstack-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-sonarqube-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-sourcemap-loader'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        timeout: 20000
      }
    },
    sonarqubeReporter: {
      basePath: 'projects/sbb-esta/angular-public/src',
      outputFolder: require('path').join(
        __dirname,
        '../../../coverage/sbb-esta/angular-public'
      ),
      reportName: () => 'sonarqube.xml'
    },
    coverageIstanbulReporter: {
      dir: require('path').join(
        __dirname,
        '../../../coverage/sbb-esta/angular-public'
      ),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'sonarqube'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
