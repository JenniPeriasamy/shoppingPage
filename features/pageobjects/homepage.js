const Page = require('./page');

/** 
 * These scripts are to create an account, registration process
 *  and verifying the firstName and lastName of the customer
 * */  

class HomePage extends Page {

    get signInLink() { return $('a[class="login"]') }
    get emailInputField() { return $('#email_create') }
    get buttonSubmit() { return $('#SubmitCreate') }
    get firstName() { return $('#customer_firstname') }
    get lastName() { return $('#customer_lastname') }
    get password() { return $('#passwd') }
    get address1() { return $('#address1') }
    get state() { return $('#id_state') }
    get city() { return $('#city') }
    get additionalinformation() { return $('#other') }
    get zipCode() { return $('#postcode') }
    get mobile() { return $('#phone_mobile') }
    get alias() { return $('#alias') }
    get submitAccount() { return $('#submitAccount') }
    get fullName() { return $('a[class="account"]') }


    async createAccount(email) {
        await (await this.signInLink).click();
        await (await this.emailInputField).setValue('sampleTestemail@email.com');
        await (await this.buttonSubmit).click();
    }

    async registrationForm(input) {
        await (await this.firstName).setValue('James');
        await (await this.lastName).setValue('Brown');
        await (await this.password).setValue('Pass123word');
        await (await this.address1).setValue('TestAddress');
        await (await this.city).setValue('TestCity');
        await (await this.additionalinformation).setValue('Test information');
        await (await this.zipCode).setValue('60011');
        await (await this.mobile).setValue('123456789');
        await (await this.alias).setValue('TestAlias');
    }

    async dropdownAndRegister() {
        await (await this.state).selectByAttribute('value', '5');
        await (await this.submitAccount).click();
    }

    open() {
        return super.open('createAccount');
    }
}

module.exports = new HomePage();
