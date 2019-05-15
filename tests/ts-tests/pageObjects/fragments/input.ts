export class Input {
    container: WebdriverIO.Element;
    /**
     * @param {*} container WebElement, that is starting node for this Input
     */
    constructor(container) {
        this.container = container;
    }
    type(value) {
        this.container.waitForDisplayed();
        this.container.click();
        this.container.clearValue();
        browser.pause(50);
        console.log("Typing into", this.container["selector"], "=>", value);
        this.container.setValue(value);
    }
}
