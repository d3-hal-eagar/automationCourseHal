const { expect } = require("chai");
const chai = require("chai");
const chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));

describe(`chai assertions`, function() {
    it("assert", function() {
        browser.url(
            "http://ip-5236.sunline.net.ua:38015/customer-service-s-0?page_id=0"
        );

        $('form[name="contact_form"] input[name="name"]').setValue("Alex");
        $('form[name="contact_form"] input[name="email"]').setValue(
            "alex@test.com"
        );
        $('form[name="contact_form"] input[name="subject"]').setValue(
            "Test Subject"
        );
        $('form[name="contact_form"] textarea[name="message"]').setValue(
            "Message text!"
        );

        $('form[name="contact_form"] button[name="send"]').click();

        // Notice! chai-webdriverio supports only selector strings
        // This will play a bad joke with pageobjects
        expect("div.alert").to.be.displayed();
        
        // chai-webdriverio does not support "contain"
        expect($("div.alert").getText()).to.contain(
            "Your email has successfully been sent",
            `Expected ${alertText} to contain 'Your email has successfully been sent'`
        );
    });
});
