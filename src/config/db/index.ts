/**
 * Revised by petter on 2017/11/29.
 */

import * as mysql from 'mysql'

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'homemanagement',
})

/**
 *
 * sql       sql语句
 * values    sql 中如果存在'？'那么 values原生替换
 *
 * **/
export default (sql: string, values?: Array<any>) : Promise<any> => {

    return new Promise((resolve, reject) => {
        pool.getConnection((err: any, connection?: any) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err: any, rows: any) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }

                    // 完成链接
                    connection.release()
                })
            }
        })
    })
}