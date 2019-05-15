/**
 * Same config as wdio.config.js but with debug
 */
const wdioConfig = {
    specs: ["./tests/3_commands_examples.js"],
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
            console.log(`###### Waiting for debugger to attach ######`)
            return new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};

if (process.env.DEBUG == "1") {
    console.log("###### Running in debug mode! ######");
    wdioConfig.debug = true;
    wdioConfig.execArgv = ["--inspect=127.0.0.1:5858"];
    wdioConfig.mochaOpts.timeout = 9999999;
}

module.exports.config = wdioConfig;
