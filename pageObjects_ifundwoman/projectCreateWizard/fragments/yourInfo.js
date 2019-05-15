class YourInfo {
    constructor(container) {
        this.container = container;
    }

    open() {
        $(
            '.tabs-menu-clone-container .vertical-tabs__menu a[href="#edit-group-your-info"]'
        ).click();
    }

    enterYourInfo(options) {
        $("input#edit-address-0-address-address-line1").setValue(
            options.streetAddress1
        );
        $("input#edit-address-0-address-locality").setValue(options.city);
        $("input#edit-address-0-address-postal-code").setValue(
            options.postalCode
        );
        $("select#edit-address-0-address-administrative-area").selectByIndex(
            options.state
        );
    }
}

module.exports.YourInfo = YourInfo