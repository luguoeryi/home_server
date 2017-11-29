/**
 * Revised by petter on 2017/11/29.
 */

import queryDb from './config/db/index'

queryDb('SELECT * FROM homemanagement.home_base').then(rows => {
    console.log('getData:', rows)
})
