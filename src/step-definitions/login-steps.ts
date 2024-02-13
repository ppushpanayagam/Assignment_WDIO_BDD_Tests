import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page';
import dashBoardPage from '../pageobjects/dashboard.page';
import { env } from '../env/parseEnv';
import * as data from '../../config/testData.json'


Given(/^the user launch the webgains application$/, async () => {
    await loginPage.open();
});

When(/^the user provide valid email Id and password$/, async () => {
    await loginPage.enterEmailId("QATaskApplicant@webgains.com")
    await loginPage.enterPaswword(`${env('secret_key')}`)
});

When(/^the user click on the login button$/, async () => {
    await loginPage.clickLoginButton()
});

Then(/^the user should land on the webgains dashboard page$/, async () => {
    expect(await dashBoardPage.verifyDashBoardPageHeaderText()).toBe(data.DashBoard_Title)
});

