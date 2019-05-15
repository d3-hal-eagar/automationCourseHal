/**
 * Same config as wdio.config.js but with debug and typescript support
 */
/// <reference types="@wdio/sync/webdriverio-core"/>
// Registering on-fly typescript compiler, so no need to compile manually
process.env.TS_NODE_FILES = true;
require("ts-node").register();

const wdioConfig = {
    specs: ["./tests/ts-tests/test.ts"],
    sync: true,
    services: ["selenium-standalone"],
    capabilities: [
        {
            browserName: "chrome",
            maxInstances: 1
        }
    ],
    reporters: ["spec"],
    baseUrl: "http://ip-5236.sunline.net.ua:38015",
    framework: "mocha",
    logLevel: "silent",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000 // in ms
    },
    before: function(capabilities, specs) {
        if (process.env.DEBUG == "1") {
            // Giving debugger some time to connect...
            return new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};

// Only if env variable present
if (process.env.DEBUG == "1") {
    console.log("###### Running in debug mode! ######");
    wdioConfig.debug = true;
    wdioConfig.execArgv = ["--inspect=127.0.0.1:5858"];
    // Increasing test timeout
    wdioConfig.mochaOpts.timeout = 360000;
}

module.exports.config = wdioConfig;
