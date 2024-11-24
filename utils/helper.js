class Helper {
    static async randomDelay(min = 100, max = 500) {
      const delay = Math.random() * (max - min) + min;
      return new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  
  module.exports = Helper;
  