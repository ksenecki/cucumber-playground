const { expect } = require('chai');

class LoginPage {
  async navigateToLoginScreen() {
    await page.goto('https://www.saucedemo.com/');
  }

  async submitLoginForm(login, password) {
    await page.fill('#user-name', login);
    await page.fill('#password', password);
    await page.click('#login-button');
  }

  async loginError() {
    await page.waitForSelector('div.error-message-container');
  }
}

module.exports = {
  LoginPage,
};
