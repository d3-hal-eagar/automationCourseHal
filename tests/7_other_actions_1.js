const faker = require("faker");
const request = require("request-promise-native");
/**
 * - keys
 * - mouse move
 * - drag and drop
 * - execute script
 * - define own commands
 * - multiremote
 */

describe("Other actions on page", function() {
    it("low level actions - key press", function() {
        // https://w3c.github.io/webdriver/#keyboard-actions
        browser.url("http://the-internet.herokuapp.com/key_presses");

        browser.pause(1000);
        browser.keys("Shift");
        browser.pause(5000);
        browser.pause(5000);
        browser.keys(["Tab", "a"]);
        browser.pause(5000);
    });

    it("low level actions - mouse hover", function() {
        browser.url("http://the-internet.herokuapp.com/hovers");
        const figures = $$(".figure");
        figures[0].moveTo();
        browser.pause(5000);
        figures[1].moveTo();
        browser.pause(5000);
        figures[2].moveTo();
        browser.pause(5000);
    });

    it("execute js on page: fill registration form", function() {
        browser.url("/create_account");
        const email = faker.internet.email(
            undefined,
            undefined,
            "ip-5236.sunline.net.ua"
        );
        browser.execute(function(_email) {
            // This function will be executed inside browser, not on nodejs side
            document.querySelector('input[name="firstname"]').value =
                "TestFirstName";
            document.querySelector('input[name="lastname"]').value =
                "TestLastName";
            document.querySelector('select[name="country_code"]').value = "UA";
            document
                .querySelector('[name="customer_form"] input[name="email"]')
                .click();
            document.querySelector(
                '[name="customer_form"] input[name="email"]'
            ).value = _email;
            document.querySelector('input[name="phone"]').value =
                "+380441112233";
            document.querySelector(
                '[name="customer_form"] input[name="password"]'
            ).value = "123456";
            document.querySelector('input[name="confirmed_password"]').value =
                "123456";
            document.querySelector('button[name="create_account"]').click();
        }, email);
    });

    it("js click: doing javascript click", function() {
        browser.url("http://the-internet.herokuapp.com/dynamic_loading/2");
        browser.pause(2000);
        browser.execute(elem => elem.click(), $("div#start button"));

        $("div#finish h4").waitForDisplayed(6500);
        console.log("Element exist?: ", $("div#finish h4").isExisting());
        console.log("Element text:", $("div#finish h4").getText());
    });

    it("define own command", function() {
        browser.url("http://the-internet.herokuapp.com/hovers");
        browser.addCommand("JSclick", function(selector) {
            browser.execute(function(_selector) {
                document.querySelector(_selector).click();
            }, selector);
        });

        browser.JSclick("div.button");
    });

    it("browser.call to use async operations", function() {
        const email = browser.call(function() {
            return request("http://faker.hook.io/?property=internet.email", {
                json: true
            });
        });
        console.log("Got email", email);
        browser.url("/create_account");
        // browser.pause(5000);
        browser.execute(function(_email) {
            // This function will be executed inside browser, not on nodejs side
            document.querySelector('input[name="firstname"]').value =
                "TestFirstName";
            document.querySelector('input[name="lastname"]').value =
                "TestLastName";
            document.querySelector('select[name="country_code"]').value = "UA";
            document
                .querySelector('[name="customer_form"] input[name="email"]')
                .click();
            document.querySelector(
                '[name="customer_form"] input[name="email"]'
            ).value = _email;
            document.querySelector('input[name="phone"]').value =
                "+380441112233";
            document.querySelector(
                '[name="customer_form"] input[name="password"]'
            ).value = "123456";
            document.querySelector('input[name="confirmed_password"]').value =
                "123456";
            document.querySelector('button[name="create_account"]').click();
        }, email);
        // browser.pause(5000);
    });

    it("Using async operations on browser side", function() {
        browser.url("/create_account");
        browser.pause(10000);
        browser.executeAsync(async function(callback) {
            // This function will be executed inside browser, not on nodejs side
            let response = await fetch(
                "http://faker.hook.io/?property=internet.email"
            );
            let _email = await response.json();
            document.querySelector('input[name="firstname"]').value =
                "TestFirstName";
            document.querySelector('input[name="lastname"]').value =
                "TestLastName";
            document.querySelector('select[name="country_code"]').value = "UA";
            document
                .querySelector('[name="customer_form"] input[name="email"]')
                .click();
            document.querySelector(
                '[name="customer_form"] input[name="email"]'
            ).value = _email;
            document.querySelector('input[name="phone"]').value =
                "+380441112233";
            document.querySelector(
                '[name="customer_form"] input[name="password"]'
            ).value = "123456";
            document.querySelector('input[name="confirmed_password"]').value =
                "123456";
            document.querySelector('button[name="create_account"]').click();
            callback();
        });
        console.log("Registration complete!");
        browser.pause(20000);
    });

    it("execute js on page: returning data from page", function() {
        browser.url(
            "http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/blue-duck-p-4"
        );

        const duckInfo = browser.execute(function() {
            const duckInfo = {};
            duckInfo.name = $("#box-product").attr("data-name");
            duckInfo.price = $("#box-product").attr("data-price");
            duckInfo.sku = $("#box-product").attr("data-sku");
            duckInfo.shortDescription = $("#box-product .short-description")
                .text()
                .trim();
            return duckInfo;
        });
        console.log("Got duck information from page: ");
        console.dir(duckInfo);
    });

    it("execute js on page: return async data", function() {
        browser.url(
            "http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/blue-duck-p-4"
        );
        let res = browser.executeAsync(function(callback) {
            const duckInfo = {};
            duckInfo.name = $("#box-product").attr("data-name");
            duckInfo.price = $("#box-product").attr("data-price");
            duckInfo.sku = $("#box-product").attr("data-sku");
            duckInfo.shortDescription = $("#box-product .short-description")
                .text()
                .trim();
            callback(duckInfo);
        });

        console.log("Got duck information from page: ");
        console.dir(res);
    });
});
