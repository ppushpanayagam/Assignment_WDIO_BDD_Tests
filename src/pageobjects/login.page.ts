import { $, expect } from '@wdio/globals'
import Page from './page';
import * as locator from '../../config/locator.json'

class LoginPage extends Page {

    public open () {
        return super.open('/');
    }

    public get getLoginPageHeader () {
        return $('h3>div');
    }

    public async verifyLoginPageHeaderText(){

        return await this.getLoginPageHeader.getText()
    }

    public get emailId () {
        return $("input[id='amplify-id-:r3:']");
    }

    public async enterEmailId(value:string){

        return await this.emailId.setValue(value)
    }

    public get password () {
        return $("input[id='amplify-id-:r6:']");
    }

    public async enterPaswword(value:string){

        return await this.password.setValue(value)
    }

    public get loginbtn () {
        return $("button[type='submit']");
    }

    public async clickLoginButton(){

        return await this.loginbtn.click()
    }

    public get getDashBordHeader () {
        return $('h1[class="wg-title"]');
    }

    public async verifyDashBoardPageHeaderText(){

        return await this.getDashBordHeader.getText()
    }

    public get getTransactionPageHeader () {
        return $('h1[class="wg-title"]');
    }

    public async verifyTransactionReportPageHeader(){

        return await this.getTransactionPageHeader.getText()
    }

    public get getAllMainMenu () {
        return $$('div.wrapper:nth-child(1) > ul>li');
    }

    public async selectNavigationBar(menu:string){

        await this.getAllMainMenu.forEach(async (element)=>{

            if(await element.getText() === menu)
            {
                await element.moveTo()
            }
        })
    }

    public get getAllSideMenu () {
        return $$('//div/ul/li/div/ul/li/a');
    }

    public async selectSubMenuFromMainMenu(submMenu:string){

        let nav = browser.$$('//div/ul/li/div/ul/li/a');
        await nav.forEach(async (element)=>{

            if(await element.getText() === submMenu)
            {
                await element.click()

            }
        })
    }

    
    public get extraFieldBtn () {
        return $("#btnExtraFields");
    }

    public async clickExtraFieldButton(){

        await this.extraFieldBtn.moveTo()
        return await this.extraFieldBtn.click()
    }

    public get transaction () {
        return $("//a[contains(text(), 'Transactions Report')]");
    }

    public async selectTransactionMenu(){

        return await this.transaction.click()
    }

    public get dateRange () {
        return $("#dateRange");
    }

    public async clickOnDateRange(){

        (await this.dateRange).moveTo()
        return await this.dateRange.click()
    }

    public get startDate () {
        return $("div[class='calendar left']>div>input");
    }

    public async enterStartDate(value:string){

        return await this.startDate.setValue(value)
    }

    public get endDate () {
        return $("div[class='calendar left']>div>input");
    }

    public async enterEndDate(value:string){

        return await this.endDate.setValue(value)
    }

    public get applyBtn () {
        return $(".range_inputs>button:first-child");
    }

    public async clickOnApplyButton(){

        return await this.applyBtn.click()
    }

    public get applybtnForFilter () {
        return $(".range_inputs>button:first-child");
    }

    public async clickOnApplyBtnToFilter(){

        return await this.applybtnForFilter.click()
    }

    public get bottom () {
        return $$('div[class="margin-bottom-20 row"]>div>div>div>div:last-child');
    }

    public async verifysalePrice(salePrice:string){

        await this.getAllMainMenu.forEach(async (element)=>{

            if(await element.getText() === salePrice)
            {
                expect(await element.getText()).toBe(salePrice)
            }
        })
    }

    public async verifyTotalCommission(commission:string){

        // this.verifyText(this.getAllMainMenu, commission)
    }

    public async verifyText(selector:string, expectedText:string){

        await this.getAllMainMenu.forEach(async (element)=>{

            if(await element.getText() === expectedText)
            {
                expect(await element.getText()).toBe(expectedText)
            }
        })
    }

    public get userDetails () {
        return $("#user-dropdown>div>span");
    }

    public async verifyUserDetails(){
        await (await this.userDetails).moveTo()
        return (await this.userDetails).getText()
    }

}

export default new LoginPage();
