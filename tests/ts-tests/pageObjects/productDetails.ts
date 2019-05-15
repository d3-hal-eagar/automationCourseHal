class ProductDetailsPO {
    open(productURL: string) {
        browser.url(productURL);
    }
    addToCart() {
        $("button.btn-success").click();
        // sleeping while animations are finished
        browser.pause(1500);
    }

    getRegularPrice(): number {
        const strPrice = $("#box-product .price-wrapper").getText();
        const without$ = strPrice.replace("$", "");
        return Number(without$);
    }
}

export const ProductDetails = new ProductDetailsPO();
