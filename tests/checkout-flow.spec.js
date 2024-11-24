const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

test.describe('Checkout Flow Test', () => {
  test('Complete checkout flow with 3 random items', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    //  Login
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');

    // Add random items to the cart
    await inventoryPage.addRandomItems(3);
    await inventoryPage.goToCart();

    //Verify cart items and proceed to checkout
    await cartPage.verifyItemsCount(3);
    await cartPage.proceedToCheckout();

    //Fill details and complete checkout
    await checkoutPage.fillCheckoutDetails('Deep', 'Halder', '603103');
    await checkoutPage.completeCheckout();
  });
});
