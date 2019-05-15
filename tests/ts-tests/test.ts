import { expect } from "chai";
import * as faker from "faker";
import { ProductDetails } from "./pageObjects/productDetails";
import { Checkout } from "./pageObjects/checkout";
import { Confirmation } from "./pageObjects/confirmation";

// PageObject example with TypeScript
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
            phone: faker.phone.phoneNumber("044#######")
        });
        Checkout.saveChanges();
        Checkout.confirmOrder();

        expect(Confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );
    });
});
