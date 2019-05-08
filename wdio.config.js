exports.config = {
    specs: ["./tests/*.js"],
    sync: true,
    services: ["selenium-standalone"],
    capabilities: [
        {
            browserName: "chrome",
        }
    ],
    reporters: ["spec"],
    baseUrl: "http://the-internet.herokuapp.com",
    framework: "mocha",
    logLevel: 'silent',
    mochaOpts: {
        ui: "bdd",
        timeout: 120000 // in ms
    }
};
