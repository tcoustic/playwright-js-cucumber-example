const {Given, When, Then} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');
const { URLs } = require("../data/url");
const { SELECTORS } = require("../data/selectors");

Given(/^I am on the (.*) page$/, async (url) => {
    await page.goto(URLs[url.toLowerCase()]);
});

When(/^I enter (.*) in the (.*) field$/, async (value, field) => {
    await page.locator(SELECTORS[field.toLowerCase()]).fill(value);
});

When(/^I click the (.*)$/, async (element) => {
    await page.click(SELECTORS[element.toLowerCase()]);
});

Then(/^I should be on the (.*) page$/, async (url) => {
    await expect(page).toHaveURL(URLs[url.toLowerCase()]);
});

Then(/^I should see the (.*)$/, async (element) => {
    await expect(page.locator(SELECTORS[element.toLowerCase()])).toBeVisible();
});
