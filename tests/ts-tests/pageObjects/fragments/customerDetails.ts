import { Input } from "./input";
import { Dropdown } from "./dropdown";

export class CustomerDetails {
    get container(): WebdriverIO.Element {
        return $("#box-checkout-customer .billing-address");
    }

    get lastName(): Input {
        return new Input(this.container.$('input[name="lastname"]'));
    }

    get firstName(): Input {
        return new Input(this.container.$('input[name="firstname"]'));
    }

    get phone(): Input {
        return new Input(this.container.$('input[name="phone"]'));
    }

    get city(): Input {
        return new Input(this.container.$('input[name="city"]'));
    }

    get email(): Input {
        return new Input(this.container.$('input[name="email"]'));
    }

    get postCode(): Input {
        return new Input(this.container.$('input[name="postcode"]'));
    }

    get address1(): Input {
        return new Input(this.container.$('input[name="address1"]'));
    }

    get address2(): Input {
        return new Input(this.container.$('input[name="address2"]'));
    }

    get taxID(): Input {
        return new Input(this.container.$('input[name="tax_id"]'));
    }

    get company(): Input {
        return new Input(this.container.$('input[name="company"]'));
    }
    get country(): Dropdown {
        return new Dropdown(this.container.$('select[name="country_code"]'));
    }
    get state(): Dropdown {
        return new Dropdown(this.container.$('select[name="zone_code"]'));
    }

    enterCustomerDetails(customerDetails): void {
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
