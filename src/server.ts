/**
 * Revised by petter on 2017/11/29.
 */

import queryDb from './config/db'

queryDb('SELECT * FROM homemanagement.home_base').then(rows => {
    console.log(222)
    console.log('getData:', rows)
})
