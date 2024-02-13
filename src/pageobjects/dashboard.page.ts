import Page from './page';

class DashBoardPage extends Page {
    
    public get getDashBordHeader () {
        return $('h1[class="wg-title"]');
    }

    public async verifyDashBoardPageHeaderText(){

        return await this.getDashBordHeader.getText()
    }
    
}

export default new DashBoardPage();
