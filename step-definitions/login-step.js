const { Given, When, Then } = require('@cucumber/cucumber');

Given('I visit a login page', async () => {
  await page.goto('https://www.saucedemo.com/');
});
