import type { Options } from '@wdio/types'
 const path = require('path')
 import { config as baseConfig } from './wdio.conf'
 import dotenv from 'dotenv'
 import {env} from './src/env/parseEnv'
 dotenv.config();
export const config: Options.Testrunner = {

    ...baseConfig,

    port: 4723,

    capabilities: [
        {
            'appium:platformName': `${env('PLATFORMNAME_ANDROID')}`,
            'appium:platformVersion': `${env('PLATFORMVERSION_ANDROID')}`,
            'appium:automationName': `${env('AUTOMATION_NAME_ANDROID')}`,
            'appium:deviceName': `${env('DEVICE_NAME_ANDROID')}`,
            'appium:app': path.join(process.cwd(),`${env('APP')}`)
        }
    ]
}
