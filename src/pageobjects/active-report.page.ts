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

    public get bottom () {
        return $$(locator.footerDetails);
    }

    public async verifyTheResults(verifyText:string) {

        let nav = browser.$$(locator.listOfAllSub_Menu);
        await nav.forEach(async (element)=>{

            if((await element.getText()).includes(verifyText))
            {
                 return true

            }
        })
    }
}

export default new ActiveReportPage();
