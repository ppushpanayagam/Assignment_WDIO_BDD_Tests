import Page from './page';

class TransactionReportPage extends Page {
    
    public get getTransactionPageHeader () {
        return $('h1[class="wg-title"]');
    }

    public async verifyTransactionReportPageHeader(){

        return await this.getTransactionPageHeader.getText()
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

}

export default new TransactionReportPage();
