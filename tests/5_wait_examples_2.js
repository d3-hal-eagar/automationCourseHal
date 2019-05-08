const { expect } = require("chai");

describe("Implicit waits examples:", function() {
    it("simple example with implicit waits", function() {
        browser.setTimeout({
            implicit: 10000
        });
        browser.url("/dynamic_loading/2");
        $("div#start button").click();

        console.log("Element exist?: ", $("div#finish h4").isExisting());
        console.log("Element text:", $("div#finish h4").getText()); // WORKS!
    });

    it("when implicit are bad: verifying that elements not exist", function() {
        browser.setTimeout({
            implicit: 5000
        });
        browser.url("/dynamic_loading/2");
        // No clicking (!)
        //$("div#start button").click();
        console.log(">>>", new Date().getTime());
        const exists = $("div#finish h4").isExisting();
        console.log("Element exist?: ", exists);
        expect(exists).to.be.false;
        console.log("<<<", new Date().getTime());
    });

    it.only("when implicit are bad: verifying that elements not exist - workaround", function() {
        browser.setTimeout({
            implicit: 10000
        });
        browser.url("/dynamic_loading/2");
        // No clicking (!)
        
        console.log(">>>", new Date().getTime() / 1000);
        // Switching off implicit waits
        browser.setTimeout({
            implicit: 0
        });
        const exists = $("div#finish h4").isExisting();
        console.log("Element exist?: ", exists);
        expect(exists).to.be.false;
        console.log("<<<", new Date().getTime() / 1000);

        // Switching on again after checks
        browser.setTimeout({
            implicit: 10000
        });

        let timeout = browser.getTimeouts()
        $("div#start button").click();
        console.log("Element exist?: ", $("div#finish h4").isExisting());
        console.log("Element text:", $("div#finish h4").getText()); // WORKS!
    });
});
