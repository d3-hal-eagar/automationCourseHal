
describe("Commands examples", function() {
    it.only('text', function() {
        browser.url("http://ip-5236.sunline.net.ua:38015/customer-service-s-0?page_id=0");

        $('form[name="contact_form"] input[name="name"]').setValue('Alex')
        $('form[name="contact_form"] input[name="email"]').setValue('alex@test.com')
        $('form[name="contact_form"] input[name="subject"]').setValue('Test Subject')
        $('form[name="contact_form"] textarea[name="message"]').setValue('Message text!')

        $('form[name="contact_form"] button[name="send"]').click()
        
        let alertText = $('div.alert').getText()
        if (!alertText.includes('Your email has successfully been sent')) {
            throw new Error(`Expected ${alertText} to contain 'Your email has successfully been sent'`)
        }
    })

    it("Tabs switch", function() {
        browser.url("http://ip-5236.sunline.net.ua:38015");
        console.log("CURRENT URL", browser.getUrl());
        browser.newWindow("http://google.com");
        console.log(browser.getWindowHandles())
        browser.pause(5000);
        console.log("CURRENT URL", browser.getUrl());
        browser.pause(5000);
        browser.switchWindow("http://ip-5236.sunline.net.ua:38015");
        browser.pause(5000);
        console.log("CURRENT URL", browser.getUrl());
        browser.pause(5000);
    });

    it("get attribute", function() {
        browser.url("http://ip-5236.sunline.net.ua:38015");
        const firstProduct = $(".product");

        const name = firstProduct.getAttribute("data-name");
        const price = firstProduct.getAttribute("data-price");
        console.log("NAME", name, "PRICE", price);
    });

    it("exist vs displayed", function() {
        browser.url("http://ip-5236.sunline.net.ua:38015");
        const products = $$(".product");
        const firstProduct = products[0];

        const displayed = firstProduct.isDisplayed();
        const exist = firstProduct.isExisting();

        console.log(`First product visible: ${displayed}, exist: ${exist}`);

        const forthProduct = products[5];
        const displayed4 = forthProduct.isDisplayed();
        const exist4 = forthProduct.isExisting();
        console.log(`#4 product visible: ${displayed4}, exist: ${exist4}`);
    });

    it('cookies', function () {
        browser.setWindowSize(600, 400)
        browser.url("http://ip-5236.sunline.net.ua:38015");
        console.log('COOKIES', browser.getCookies())
        browser.setCookies([{name: 'cookies_accepted', value: '1'}])
        browser.pause(2000)
        console.log('COOKIES', browser.getCookies())
        browser.refresh()
        browser.deleteCookie('currency_code')
        browser.setCookies([{name: 'currency_code', value: 'EUR'}])
        browser.refresh()
        console.log('COOKIES', browser.getCookies())
        browser.pause(5000)
    })

});