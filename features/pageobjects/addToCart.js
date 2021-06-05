
const Page = require('./page');

/** 
 * This scripts are to select an item, adding to the cart
 * and verifying the product details
 * */

class AddToCart extends Page {

    get userName() { return $('#email') }
    get password() { return $('#passwd') }
    get signInLink() { return $('a[class="login"]') }
    get signIn() { return $('#SubmitLogin') }
    get categoryLink() { return $('a[class="home"]') }
    get searchBox() { return $('#search_query_top') }
    get submitButton() { return $('button[type="submit"]') }
    get itemSelect() { return $('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]') }
    get addItemCart() { return $('p#add_to_cart>button[class="exclusive"]>span') }
    get checkout() { return $('a[href="http://automationpractice.com/index.php?controller=order"]') }
    get proceedButton() { return $('a[href="http://automationpractice.com/index.php?controller=order&step=1"]') }
    get proceedCheckout() { return $('button[class="button btn btn-default button-medium"]') }
    get termsCheckBox() { return $('#cgv') }
    get finalProceed() { return $('button[name="processCarrier"]') }
    get productDetails() { return $('p[class="product-name"]') }
    get itemPrice() { return $('span[class="price special-price"]') }
    get itemQuantity() { return $('td[class="cart_quantity text-center"]') }

    async login() {
        await (await this.signInLink).click();
        await (await this.userName).setValue('sampleemail38@email.com');
        await (await this.password).setValue('Password123');
        await (await this.signIn).click();
    }

    async addToCart() {

        await (await this.searchBox).setValue('dress');
        await (await this.submitButton).click();
        await (await this.itemSelect).click();
        await (await this.addItemCart).click();
        browser.pause(30000);
        await (await this.checkout).click();
        browser.pause(30000);
        await (await this.proceedButton).click();
        await (await this.proceedCheckout).click();
        await (await this.termsCheckBox).click();
        await (await this.finalProceed).click();
    }

}

module.exports = new AddToCart();