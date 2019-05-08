exports.config = {
    hostname: "ip-5236.sunline.net.ua",
    specs: ["./tests/*.js"],
    sync: true,
    services: ["selenium-standalone"],
    capabilities: [
        {
            browserName: "chrome",
            "selenoid:options": {
                enableVNC: true
            }
        }
    ],
    reporters: ["spec"],
    baseUrl: "http://the-internet.herokuapp.com",
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000 // in ms
    }
};
