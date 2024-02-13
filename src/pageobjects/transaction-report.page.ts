import Page from './page';
import * as locator from '../../config/locator.json'

class TransactionReportPage extends Page {
    
    public get getTransactionPageHeader () {
        return $(locator.transaction_PageHeader);
    }

    public async verifyTransactionReportPageHeader(){

        return await this.getTransactionPageHeader.getText()
    }

    public get dateRange () {
        return $(locator.dateRange_Section);
    }

    public async clickOnDateRange(){

        (await this.dateRange).moveTo()
        return await this.dateRange.click()
    }

    public get startDate () {
        return $(locator.startDateForTransactionReport);
    }

    public async enterStartDate(value:string){

        return await this.startDate.setValue(value)
    }

    public get endDate () {
        return $(locator.endDateForTransactionReport);
    }

    public async enterEndDate(value:string){

        return await this.endDate.setValue(value)
    }

    public get applyBtn () {
        return $(locator.applyFilterBtn);
    }

    public async clickOnApplyButton(){

        return await this.applyBtn.click()
    }

    public get applybtnForFilter () {
        return $(locator.applyMainFilterBtn);
    }

    public async clickOnApplyBtnToFilter(){

        return await this.applybtnForFilter.click()
    }

    public get bottom () {
        return $$(locator.footerDetails);
    }

}

export default new TransactionReportPage();
