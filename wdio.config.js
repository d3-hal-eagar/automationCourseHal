exports.config = {
    specs: ["./tests/*.js"],
    sync: true,
    services: ["selenium-standalone"],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    reporters: ["spec"],
    baseUrl: "http://the-internet.herokuapp.com",
    framework: "mocha",
    logLevel: "silent",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000 // in ms
    },
    // Change global default timeout for all waitFor commands
    // waitforTimeout: 6000,
    before: function(capabilities, specs) {
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
