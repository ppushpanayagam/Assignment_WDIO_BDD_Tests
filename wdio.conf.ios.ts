import type { Options } from '@wdio/types'
 const path = require('path')
 import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {

    ...baseConfig,
    
    port: 4723,

    capabilities: [
        {
            'appium:platformName': 'iOS',
            'appium:platformVersion': '15',
            'appium:automationName': "XCUITest",
            'appium:deviceName': "iPhone 15 Pro Max",
            'appium:udid': 'CF39F663-2A16-4372-97E0-31FD00A04E7E',
            'appium:app': path.join(process.cwd(),'app/ApiDemos-debug.apk')
        }
    ]
}
