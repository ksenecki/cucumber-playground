const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
const { HomePage } = require('../page-objects/home-page');
const { validLogin, validPassword } = require('../utils/credentials');

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I visit a login page', async function () {
  await loginPage.navigateToLoginScreen();
});

When('I fill the login form with valid credentials', async function () {
  await loginPage.submitLoginForm(validLogin, validPassword);
});

When(
  /^I fill the login form with '([^']*)' and '([^']*)'$/,
  async function (username, password) {
    await loginPage.submitLoginForm(username, password);
  }
);

Then('I should see the home page', async function () {
  await homePage.verifyLoginUser();
});

Then('I see the login error', async function () {
  await loginPage.loginError();
});
