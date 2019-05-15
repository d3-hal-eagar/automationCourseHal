const { expect } = require("chai");
const faker = require("faker");
const { ProductDetails } = require("../pageObjects/productDetails");
const { Checkout } = require("../pageObjects/checkout");
const { Confirmation } = require("../pageObjects/confirmation");

// PageObject example
describe("Guest", function() {
    it("should be able to buy item", function() {
        ProductDetails.open("/rubber-ducks-c-1/red-duck-p-3");
        ProductDetails.addToCart();

        Checkout.open();
        Checkout.customerDetails.enterCustomerDetails({
            firstName: "TestFirstName",
            lastName: "TestLastName",
            address1: "address line 1",
            address2: "address line 2",
            country: "UA",
            postCode: faker.address.zipCode(),
            city: "CityName",
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber('044#######')
        });
        Checkout.saveChanges();
        Checkout.confirmOrder();
        
        expect(Confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );
    });
});
