const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html']], // Use HTML reporter
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    headless: false,
    viewport: null,
    video: 'on',
  },
});
