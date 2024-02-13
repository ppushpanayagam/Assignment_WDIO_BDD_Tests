import Page from './page';
import { $, expect } from '@wdio/globals'
import * as locator from '../../config/locator.json'

class DashBoardPage extends Page {
    
    public get getDashBordHeader () {
        return $(locator.dashboard_PageHeader);
    }

    public async verifyDashBoardPageHeaderText(){

        return await this.getDashBordHeader.getText()
    }

    public get getAllMainMenu () {
        return $$(locator.listOfAllNavigation_Menu);
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
        return $$(locator.listOfAllSide_Menu);
    }

    public async selectSubMenuFromMainMenu(submMenu:string){

        let nav = browser.$$(locator.listOfAllSub_Menu);
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
        return $(locator.userDetails);
    }

    public async verifyUserDetails(){
        await (await this.userDetails).moveTo()
        return (await this.userDetails).getText()
    }
    
}

export default new DashBoardPage();
