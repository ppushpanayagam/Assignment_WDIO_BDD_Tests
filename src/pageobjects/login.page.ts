import { $, expect } from '@wdio/globals'
import Page from './page';
import * as locator from '../../config/locator.json'

class LoginPage extends Page {

    public open () {
        return super.open('/');
    }

    public get getLoginPageHeader () {
        return $(locator.loginPage_Header);
    }

    public async verifyLoginPageHeaderText(){

        return await this.getLoginPageHeader.getText()
    }

    public get emailId () {
        return $(locator.emailId_Field);
    }

    public async enterEmailId(value:string){

        return await this.emailId.setValue(value)
    }

    public get password () {
        return $(locator.password_Field);
    }

    public async enterPaswword(value:string){

        return await this.password.setValue(value)
    }

    public get loginbtn () {
        return $(locator.login_Btn);
    }

    public async clickLoginButton(){

        return await this.loginbtn.click()
    }

}

export default new LoginPage();
