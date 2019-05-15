class Dropdown {
    /**
     * @param {*} container WebElement, that is starting node for this Dropdown
     */
    constructor(container) {
        this.container = container;
    }
    selectByValueAttribute(value) {
        this.container.waitForDisplayed();
        console.log(
            "Selecting dropdown option",
            this.container["selector"],
            "by value",
            value
        );
        this.container.selectByAttribute("value", value);
    }
}

module.exports.Dropdown = Dropdown;
