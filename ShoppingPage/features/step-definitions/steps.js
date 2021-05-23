const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pageobjects/homepage');
const ShoppingCart = require('../pageobjects/addToCart');

const pages = {
    createAccount: HomePage,
    login: ShoppingCart
}

Given(/^User is on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^User clicks on the link (\w+)$/, async (email) => {
    await HomePage.createAccount(email)
});

Then(/^User enters data in the (\w+)$/, async (input) => {
    await HomePage.registrationForm(input)
});

Then(/^User selects (\w+) from the dropdown and register$/, async (input) => {
    await HomePage.dropdownAndRegister(input)
});

Then(/^User should see the expected text (.*)$/, async (message) => {
    await expect(HomePage.fullName).toBeExisting();
    await expect(HomePage.fullName).toHaveTextContaining(message);

});

When(/^User logins the shopping website$/, async () => {
    await ShoppingCart.login();
});

Then(/^User adds items to the shoppingCart$/, async () => {
    await ShoppingCart.addToCart()

});

Then(/^User should see the (.*) in checkOut page$/, async (items) => {
    await expect(ShoppingCart.productDetails).toBeExisting();
    await expect(ShoppingCart.productDetails).toHaveTextContaining(items);
});

Then(/^User should see the (.*) in price section$/, async (price) => {
    await expect(ShoppingCart.itemPrice).toBeExisting();
    await expect(ShoppingCart.itemPrice).toHaveTextContaining(price);
    // console.log(price)
});

Then(/^User should see the (.*) in quantity section$/, async (quantity) => {
    await expect(ShoppingCart.itemQuantity).toBeExisting();
    await expect(ShoppingCart.itemQuantity).toHaveTextContaining(quantity);
    // console.log(quantity)
});





