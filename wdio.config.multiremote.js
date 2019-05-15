exports.config = {
    specs: ["./tests/7_other_actions_2.js"],
    sync: true,
    services: ["selenium-standalone"],
    // multiremote
    capabilities: {
        user1: {
            capabilities: {
                browserName: "chrome"
            }
        },
        user2: {
            capabilities: {
                browserName: "chrome"
            }
        }
    },
    reporters: ["spec"],
    baseUrl: "http://ip-5236.sunline.net.ua:38015",
    framework: "mocha",
    logLevel: "silent",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000, // in ms
    }
};
