const { YourInfo } = require("./fragments/yourInfo");
const { Campaign } = require("./fragments/campaign");
const { Pitch } = require("./fragments/pitch");

class ProjectWizard {
    constructor() {
        this.yourInfo = new YourInfo();
        this.campaign = new Campaign();
        this.pitch = new Pitch();
    }

    saveAsDraft() {
        // Removing marketing iframe, that covers buttons.
        browser.execute(`
                document.querySelector('iframe#drift-widget').parentNode.removeChild(document.querySelector('iframe#drift-widget'))
                `);
        $(
            "#edit-field-state-wrapper input#edit-field-state-0-actions-submit"
        ).click();
    }
}

module.exports.ProjectWizard = new ProjectWizard();
