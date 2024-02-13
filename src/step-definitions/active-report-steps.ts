import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import dashBoardPage from '../pageobjects/dashboard.page';
import * as data from '../../config/testData.json'
import activeReportPage from '../pageobjects/active-report.page';

Given(/^the user on the webgains dashboard page$/, async () => {
    
    expect(await dashBoardPage.verifyDashBoardPageHeaderText()).toBe(data.DashBoard_Title)
});

Given(/^the user click on the Active Report sub-navigation menu$/, async () => {
    
    await dashBoardPage.selectSubMenuFromMainMenu(data.select_Transaction_Menu)
});

Given(/^the user should be redirected to the Active Report page$/, async () => {
    
    expect(await dashBoardPage.verifyUserDetails()).toBe('QT')
    expect(await activeReportPage.verifyActiveReportPageHeader()).toBe(data.Active_PageHeader)
});

When(/^the user set the expected date range to view the active report$/, async () => {
    
    
});

When(/^the user click on main filter apply button$/, async () => {
    
   
});

Then(/^the user should see the active report for the specified date range$/, async () => {

    await expect(activeReportPage.verifyTheResults(data.startDate)).toBeTruthy()
    await expect(activeReportPage.verifyTheResults(data.endDate)).toBeTruthy()

});
