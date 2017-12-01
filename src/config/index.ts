/**
 * Revised by petter on 2017/12/01.
 */

import * as nconf from 'nconf'

const config:any = nconf.argv().env().file('a', {file: 'config.json'})

config.set('env', process.env['NODE_ENV'] || 'development')

export default config