const faker = require("faker");
const request = require("request-promise-native");
/**
 * - keys
 * - mouse move
 * - drag and drop
 * - execute script
 * - define own commands
 * - multiremote
 */

describe("Other actions on page", function() {
    it("Multiremote", function() {
        // executed in all multiremote browsers
        browser.url("https://socketio-chat-example.now.sh/");
        user1.pause(1000);
        user2.pause(1000);
        user1.$("input#m").setValue("Hello from browser 1!");
        user1.$("button=Send").click();
        user2.$("input#m").setValue("Hello from browser 2!");
        user2.$("button=Send").click();
        browser.pause(5000);
        console.log("Messages", $("ul#messages").getText());
    });
    after(function () {
        // For some reason webdriverio does not close windows in multiremote mode
        browser.closeWindow()
    })
});
