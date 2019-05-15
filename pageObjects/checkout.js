const { CustomerDetails } = require("./fragments/customerDetails");

class CheckoutPO {
    constructor() {
        this.customerDetails = new CustomerDetails();
    }

    open() {
        browser.url("/checkout");
    }

    saveChanges() {
        const saveCustomerBtn = $('button[name="save_customer_details"]');
        browser.waitUntil(
            function() {
                return saveCustomerBtn.getAttribute("disabled") == null;
            },
            undefined,
            "Save changes button expected to become enabled to click"
        );

        saveCustomerBtn.click();
    }

    confirmOrder() {
        const confirmBtn = $('button[name="confirm_order"]');
        browser.waitUntil(
            function() {
                return confirmBtn.getAttribute("disabled") == null;
            },
            undefined,
            "Confirm order button expected to become enabled to click"
        );
        confirmBtn.click();
    }
}

module.exports.Checkout = new CheckoutPO();
