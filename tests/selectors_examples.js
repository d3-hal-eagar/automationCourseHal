describe("Smoke check", function() {
    it("Test #1", function() {
        browser.url("http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/");
        browser.pause(2000); // ms
        let firstProduct = $(".product");
        let firstText = firstProduct.getText();
        console.log(firstText);
        browser.pause(5000); // ms

        let allProducts = $$(".product");
        console.log(allProducts.length);

        let product = allProducts[2];
        console.log("$$", product.getText());
    });

    it("Test #2", function() {
        browser.url("http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/");
        browser.pause(2000);
        let redDuck = $("h2=Categories");

        console.log("Title:", redDuck.getText());

        let rownum = 2;
        $(`//table/tr[${rownum}]`);

        let products = $$(".products");

        redDuck = products.find(function(product) {
            return product.getText() === "Red duck";
        });
    });

    it("Test #3", function() {
        browser.url("http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/");
        browser.pause(2000);

        let allProducts = $$(".products .product");

        console.log("Second product is", allProducts[1].$(".name").getText());
        let elem = $('//xpath').$('.css').$("=Text")
    });
});
