import Page from './page';
import { $, expect } from '@wdio/globals'

class DashBoardPage extends Page {
    
    public get getDashBordHeader () {
        return $('h1[class="wg-title"]');
    }

    public async verifyDashBoardPageHeaderText(){

        return await this.getDashBordHeader.getText()
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

export default new DashBoardPage();
