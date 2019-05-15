class ConfirmationPO {
    confirmationTitle() {
        const titleText = "h1.title";
        $(titleText).waitForDisplayed(5000);
        return $(titleText).getText();
    }
}

export const Confirmation = new ConfirmationPO();
