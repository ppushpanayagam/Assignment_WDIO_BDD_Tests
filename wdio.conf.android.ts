import type { Options } from '@wdio/types'
 const path = require('path')
 import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {

    ...baseConfig,

    port: 4723,

    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:platformVersion': '12',
            'appium:automationName': "Uiautomator2",
            'appium:deviceName': "pixel-5",
            'appium:app': path.join(process.cwd(),'app/ApiDemos-debug.apk')
        }
    ]
}
