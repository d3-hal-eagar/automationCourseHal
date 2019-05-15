exports.config = {
    specs: ["./tests/4_mocha_*.js"],
    sync: true,
    // hostname: 'ip-5236.sunline.net.ua',
    port: 4444,
    path: "/wd/hub",
    // services: ["selenium-standalone"],
    
    capabilities: [
        {
            browserName: "chrome",
            maxInstances: 4
            // "goog:chromeOptions": {
            //     // to run chrome headless the following flags are required
            //     // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            //     args: ["--headless", "--disable-gpu"]
            // }
        }
    ],
    reporters: ["spec"],
    baseUrl: "http://ip-5236.sunline.net.ua:38015",
    framework: "mocha",
    logLevel: 'silent',
    mochaOpts: {
        ui: "bdd",
        timeout: 120000 // in ms
    },
    // Change global default timeout for all waitFor commands
    // waitforTimeout: 6000,
    before: function(capabilities, specs) {
        // browser.addCommand("JSclick", function(selector) {
        //     browser.execute(function(_selector) {
        //         document.querySelector(_selector).click();
        //     }, selector);
        // });
        // RECOMMENDED: if you use implicit waits, better to set them once for whole browser before tests
        // browser.setTimeout({
        //     implicit: 10000
        // });
    },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function(suite) {
        // console.log("GLOBAL beforeSuite: Suite started");
    },

    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    beforeTest: function(test) {
        // console.log("GLOBAL beforeTest: Test started");
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    afterTest: function(test) {
        // console.log("GLOBAL afterTest: Test finished", test);
        // RECOMMENDED: if you use implicit waits, better to reset them back to default after each test
        // browser.setTimeout({
        //     implicit: 10000
        // });
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: function(suite) {
        // console.log("GLOBAL afterSuite: Suite finished", suite);
    }
};
