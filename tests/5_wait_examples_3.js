describe("Explicit waits", function() {
    it("explicit waits", function() {
        browser.url("/dynamic_loading/2");
        $("div#start button").click();

        $("div#start button").waitForExist(
            500,
            true
        ); // Wait for not Exist!

        $("div#start button").waitForExist(6000, true, 'Expected start button to disappear after clicking') // Wait for not Exist!

        // $("div#finish h4").waitForExist(6000);
        // // $('div').waitForExist()
        // // $('div').waitForEnabled()
        // // $('div').waitForDisplayed(15000, false, 'Expected div to became invisible')

        // console.log("Element exist?: ", $("div#finish h4").isExisting());
        // console.log("Element text:", $("div#finish h4").getText());
    });

    it("explicit waits", function() {
        browser.url("/");

        browser.waitUntil(function() {
            return !$(".loader").isDisplayed() && $("div").isDisplayed();
        });


        browser.waitUntil(function() {
            return !$(".loader").isDisplayed() && $("div").isDisplayed();
        });
    });

    it.only("explicit waits: own condition", function() {
        browser.url("/dynamic_loading/2");
        // $("div#start button").click();

        browser.waitUntil(function () {
            try {
                let text = $('div#finish h4').getText() 
                return text == 'Hello World!'
            } catch {
                return false
            }
        }, 6000, `Expected "div#finish h4" to have text "Hello World!" in 6sec`)

    });
});
