const { expect } = require("chai");
const faker = require("faker");
const path = require("path");

describe("Campaign", function() {
    beforeEach(function() {
        browser.url("https://test-ifw.pantheonsite.io/dashboard/login");
        $('input[type="email"]#edit-name').setValue("xotabu4@gmail.com");
        $('input[type="password"]#edit-pass').setValue("12345678");
        $("input#edit-submit.button").click();
        $('a[href="/dashboard"].profile').waitForDisplayed();
        browser.url("https://test-ifw.pantheonsite.io/projects/add");
    });
    it("can be created", function() {
        $("#project-add-form input#edit-f-goal-0-value").setValue("10000");
        $("#project-add-form input#edit-name-0-value").setValue(
            "test " + new Date().getTime()
        );
        $("#project-add-form input#edit-submit").click();

        // Your Info
        $(
            '.tabs-menu-clone-container .vertical-tabs__menu a[href="#edit-group-your-info"]'
        ).click();
        $("input#edit-address-0-address-address-line1").setValue(
            faker.address.streetAddress()
        );
        $("input#edit-address-0-address-locality").setValue(
            faker.address.city()
        );
        $("input#edit-address-0-address-postal-code").setValue("22334");
        $("select#edit-address-0-address-administrative-area").selectByIndex(2);

        // Campaign
        $('.vertical-tabs__menu a[href="#edit-group-campaign"]').click();
        $("input#edit-name-0-value").setValue(faker.company.companyName());
        $("textarea#edit-f-project-overview-0-value").setValue(
            faker.company.catchPhrase()
        );
        // mmddyyyy
        $("input#edit-f-date-0-value-date").setValue("08082019");
        $("input#edit-f-date-0-end-value-date").setValue("08302019");

        // Pitch stage
        $('.vertical-tabs__menu a[href*="pitch"]').click();
        browser.pause(2000);
        // Entering upload frame
        browser.switchToFrame($("iframe#entity_browser_iframe_featured_image"));
        browser.execute(
            `document.querySelector('input[type="file"]').style = "display: block"`
        );
        const fileToUploadPath = path.resolve(
            __dirname,
            "./resources/sample_image_750.png"
        );

        console.log("FILEPATH", fileToUploadPath);
        $(`input[type="file"]`).waitForDisplayed();
        $(`input[type="file"]`).setValue(fileToUploadPath);
        browser.pause(5000); // giving time to upload

        $('#edit-submit[value="Save Image"]').click()
        browser.pause(1000); // giving time to upload
        browser.switchToParentFrame(); // leaving upload iframe


        // Removing marketing iframe, that covers buttons.
        browser.execute(`
        document.querySelector('iframe#drift-widget').parentNode.removeChild(document.querySelector('iframe#drift-widget'))
        `);
        $(
            "#edit-field-state-wrapper input#edit-field-state-0-actions-submit"
        ).click();

        browser.pause(5000)
    });
});
