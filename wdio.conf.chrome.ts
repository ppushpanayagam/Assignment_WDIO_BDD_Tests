import type { Options } from '@wdio/types'
 import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {

    ...baseConfig,

    port: 4723,

    capabilities: [
        {
        browserName: 'chrome',
        maxInstances: 1
        // ,
        //     "goog:chromeOptions":{
        //         args:[
        //             '--headless',
        //             '--disable-dev-shm-usage',
        //             '--no-sandbox'
        //         ]
        //     }

        }
    ],
    services: ['chromedriver'],
}
