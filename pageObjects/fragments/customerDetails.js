const { Input } = require("./input");
const { Dropdown } = require("./dropdown");

class CustomerDetails {
    get container() {
        return $("#box-checkout-customer .billing-address")
    }

    get lastName() {
        return new Input(this.container.$('input[name="lastname"]'));
    }

    get firstName() {
        return new Input(this.container.$('input[name="firstname"]'));
    }

    get phone() {
        return new Input(this.container.$('input[name="phone"]'));
    }

    get city() {
        return new Input(this.container.$('input[name="city"]'));
    }

    get email() {
        return new Input(this.container.$('input[name="email"]'));
    }

    get postCode() {
        return new Input(this.container.$('input[name="postcode"]'));
    }

    get address1() {
        return new Input(this.container.$('input[name="address1"]'));
    }

    get address2() {
        return new Input(this.container.$('input[name="address2"]'));
    }

    get taxID() {
        return new Input(this.container.$('input[name="tax_id"]'));
    }

    get company() {
        return new Input(this.container.$('input[name="company"]'));
    }
    get country() {
        return new Dropdown(
            this.container.$('select[name="country_code"]')
        );
    }
    get state() {
        return new Dropdown(
            this.container.$('select[name="zone_code"]')
        );
    }

    enterCustomerDetails(customerDetails) {
        $(".loader-wrapper").waitForDisplayed(undefined, true); // invisibility of loader
        this.firstName.type(customerDetails.firstName);
        this.lastName.type(customerDetails.lastName);
        this.phone.type(customerDetails.phone);
        this.city.type(customerDetails.city);
        this.email.type(customerDetails.email);
        this.postCode.type(customerDetails.postCode);
        this.address1.type(customerDetails.address1);
        this.address2.type(customerDetails.address2);

        // Optional fields
        if (customerDetails.country) {
            this.country.selectByValueAttribute(customerDetails.country);
        }
        if (customerDetails.company) {
            this.company.type(customerDetails.company);
        }
        if (customerDetails.taxID) {
            this.taxID.type(customerDetails.taxID);
        }
        if (customerDetails.state) {
            this.state.selectByValueAttribute(customerDetails.state);
        }
    }
}

module.exports.CustomerDetails = CustomerDetails;
