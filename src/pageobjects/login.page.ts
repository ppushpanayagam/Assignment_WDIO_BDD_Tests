import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    public open () {
        return super.open('/');
    }
}

export default new LoginPage();
