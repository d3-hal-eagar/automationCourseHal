class ConfirmationPO {
    confirmationTitle() {
        const titleText = "h1.title";
        $(titleText).waitForDisplayed(5000);
        return $(titleText).getText();
    }
}

module.exports.Confirmation = new ConfirmationPO();
