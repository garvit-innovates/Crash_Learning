const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    fullyParallel: false,

    retries: 1,

    workers: 1,

    reporter: 'html',

    outputDir: 'test-results',

    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium-headed',
            use: {
                ...devices['Desktop Chrome'],
                headless: false // npx playwright test --project=chromium-headed
            }
        },
        {
            name: 'chromium-headless',
            use: {
                ...devices['Desktop Chrome'],
                headless: true // npx playwright test --project=chromium-headless
            }
        }
    ]
});