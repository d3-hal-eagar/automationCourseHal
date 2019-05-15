
class ProductDetailsPO {
    open(productURL) {
        browser.url(productURL)
    }
    addToCart() {
        $("button.btn-success").click();
        // sleeping while animations are finished
        browser.pause(1000);
    }

    getRegularPrice() {
        const strPrice = $("#box-product .price-wrapper").getText();
        const without$ = strPrice.replace("$", "");
        // Converting to number type
        return Number(without$);
    }
}

module.exports.ProductDetails = new ProductDetailsPO();
