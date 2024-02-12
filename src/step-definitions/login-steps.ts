import { Given, When, Then } from '@wdio/cucumber-framework';

import loginPage from '../pageobjects/login.page';


Given(/^the user launch the webgains application$/, async () => {
    await loginPage.open();
});

