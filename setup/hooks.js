const playwright = require('playwright');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

BeforeAll(async () => {
  console.log('Launching Browser');
  global.browser = await playwright['chromium'].launch({ headless: false });
});

AfterAll(async () => {
  console.log('Closing Browser');
  await global.browser.close();
});

Before(async () => {
  console.log('Creating new context and page');
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  console.log('Closing context and page');
  await global.page.close();
  await global.context.close();
});

// import * as playwright from 'playwright';
// import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';

// declare global {
//     var browser: any;
//     var context: any;
//     var page: any;
//   };

// BeforeAll(async () => {
//     console.log('Launching Browser');
//     browser = await playwright['chromium'].launch({ headless: false });
// });

// AfterAll(async () => {
//     console.log('Closing Browser');
//     await browser.close();
// });

// Before(async () => {
//     console.log('Creating new context and page');
//     context = await browser.newContext();
//     page = await context.newPage();
// });

// After(async () => {
//     console.log('Closing context and page');
//     await page.close();
//     await context.close();
// });
