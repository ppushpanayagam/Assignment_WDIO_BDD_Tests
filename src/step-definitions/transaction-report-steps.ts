import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import dashBoardPage from '../pageobjects/dashboard.page';
import * as data from '../../config/testData.json'
import transactionReportPage from '../pageobjects/transaction-report.page';

Given(/^the user on the webgains dashboard page$/, async () => {
    
    expect(await dashBoardPage.verifyDashBoardPageHeaderText()).toBe(data.DashBoard_Title)
});

Given(/^the user select the Reports navigation menu$/, async () => {
    
    await dashBoardPage.selectNavigationBar(data.select_Report_Menu)
});

Given(/^the user click on the Transaction Report sub-navigation menu$/, async () => {
    
    await dashBoardPage.selectSubMenuFromMainMenu(data.select_Transaction_Menu)
});

Given(/^the user should be redirected to the Transaction Report page$/, async () => {
    
    expect(await dashBoardPage.verifyUserDetails()).toBe('QT')
    expect(await transactionReportPage.verifyTransactionReportPageHeader()).toBe(data.transaction_PageHeader)
});

When(/^the user set the expected date range to view the report$/, async () => {
    
    await transactionReportPage.clickOnDateRange()
    await transactionReportPage.enterStartDate(data.startDate)
    await transactionReportPage.enterEndDate(data.endDate)
});

When(/^the user click on apply button$/, async () => {
    
    await transactionReportPage.clickOnApplyButton()
    await transactionReportPage.clickOnApplyBtnToFilter()
});

Then(/^the user should see the transaction report for the specified date range$/, async () => {
    
    await expect(transactionReportPage.verifyTheResults(data.startDate)).toBeTruthy()
    await expect(transactionReportPage.verifyTheResults(data.endDate)).toBeTruthy()

});

Then(/^the user should see the price and commission as expected$/, async () => {
    
    await expect(transactionReportPage.verifyTheResults(data.totalSales)).toBeTruthy()
    await expect(transactionReportPage.verifyTheResults(data.totalCommission)).toBeTruthy()
});

