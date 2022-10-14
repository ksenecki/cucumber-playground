class HomePage {
  async verifyLoginUser() {
    await page.waitForSelector('.inventory_list');
  }
}

module.exports = {
  HomePage,
};
