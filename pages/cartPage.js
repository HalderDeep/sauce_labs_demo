const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItems = '.cart_item';
      this.checkoutButton = '#checkout';
    }
  
    async verifyItemsCount(expectedCount) {
      const items = await this.page.locator(this.cartItems);
      await expect(items).toHaveCount(expectedCount);
    }
  
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = CartPage;
  