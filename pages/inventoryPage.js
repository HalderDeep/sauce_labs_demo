class InventoryPage {
    constructor(page) {
      this.page = page;
      this.items = '.inventory_item .btn_inventory';
      this.cartIcon = '.shopping_cart_link';
    }
  
    async addRandomItems(count = 3) {
      const items = await this.page.locator(this.items);
      const totalItems = await items.count();
      const selectedItems = new Set();
  
      while (selectedItems.size < count) {
        const randomIndex = Math.floor(Math.random() * totalItems);
        if (!selectedItems.has(randomIndex)) {
          selectedItems.add(randomIndex);
          await items.nth(randomIndex).click();
        }
      }
    }
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  }
  
  module.exports = InventoryPage;
  