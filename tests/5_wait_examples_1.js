describe("Browser pause: ", function() {
    it("element is renedered after click, working as is", function() {
        browser.url("/dynamic_loading/2");
        $("div#start button").click();

        console.log("Element exist?: ", $("div#finish h4").isExisting());
        console.log("Element text:", $("div#finish h4").getText()); // Exception!
    });

    it("element is renedered after click, with browser pause", function() {
        browser.url("/dynamic_loading/2");
        $("div#start button").click();
        browser.pause(6000); // Works fine because our example has static render time
        console.log("Element exist?: ", $("div#finish h4").isExisting());
        console.log("Element text:", $("div#finish h4").getText());
    });

    it("element is renedered after click, own pooling implementation", function() {
        browser.url("/dynamic_loading/2");
        $("div#start button").click();

        const timeoutTime = new Date().getTime() + 6000; // 6 seconds in future
        let tickNumber = 0;
        while (timeoutTime > new Date().getTime()) {
            console.log(">>>", tickNumber);
            if ($("div#finish h4").isExisting()) {
                console.log("Element text:", $("div#finish h4").getText());
                break; // breaking the while loop, since we got what we want
            } else {
                tickNumber = tickNumber + 1;
                console.log("Element not exist yet");
                browser.pause(500); // 500ms interval of checking
            }
        }
    });
});
