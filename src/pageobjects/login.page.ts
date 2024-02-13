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

    
    

}

export default new LoginPage();
