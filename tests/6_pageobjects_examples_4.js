const { expect } = require("chai");
const faker = require("faker");
const path = require("path");
const { Login } = require("../pageObjects_ifundwoman/loginPage");
const { CreateProject } = require("../pageObjects_ifundwoman/createProject");
const {
    ProjectWizard
} = require("../pageObjects_ifundwoman/projectCreateWizard/projectCreateWizard");

describe("Campaign", function() {
    beforeEach(function() {
        Login.open();
        Login.login("xotabu4@gmail.com", "12345678");

        CreateProject.open();
    });
    it("can be created", function() {
        CreateProject.createProject({
            goal: "10000",
            name: "test " + new Date().getTime()
        });
        // Your Info
        ProjectWizard.yourInfo.open();
        ProjectWizard.yourInfo.enterYourInfo({
            streetAddress1: faker.address.streetAddress(),
            city: faker.address.city(),
            postalCode: "22334",
            state: 2
        });

        // Campaign
        ProjectWizard.campaign.open();
        const campaignTitle =  faker.company.companyName();
        ProjectWizard.campaign.enterCampaignInfo({
            campaignTitle: campaignTitle,
            description: faker.company.catchPhrase(),
            // mmddyyyy
            startDate: "08082019",
            endDate: "08302019"
        });

        // Pitch stage
        ProjectWizard.pitch.open();
        ProjectWizard.pitch.enterPitchInfo({
            filepath: path.resolve(
                __dirname,
                "./resources/sample_image_750.png"
            )
        });

        ProjectWizard.saveAsDraft()

        exper
        browser.pause(5000);
    });
});
