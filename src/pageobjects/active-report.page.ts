import Page from './page';
import { $, expect } from '@wdio/globals'
import * as locator from '../../config/locator.json'

class ActiveReportPage extends Page {
    
    public get getTransactionPageHeader () {
        return $(locator.transaction_PageHeader);
    }

    public async verifyActiveReportPageHeader(){

        return await this.getTransactionPageHeader.getText()
    }
}

export default new ActiveReportPage();
