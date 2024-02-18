import { browser } from '@wdio/globals'
import AxeBuilder from '@axe-core/webdriverio'
import { Given } from '@wdio/cucumber-framework'


Given(/^the user perform accessibility test on home page$/, async () => {
    
    const builder = new AxeBuilder({ client: browser })

        await browser.url('https://testingbot.com')
        const result = await builder.analyze()
        console.log('Acessibility Results:', result)
});