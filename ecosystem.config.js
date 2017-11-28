// pm2 config

module.exports = {
    apps : [{
        name        : "home", // 进程名字
        script      : "./dist/server.js", // 目标文件
        watch       : true, // 监听
        log_date_format: "YYYY-MM-DD HH:mm Z", // log 输出时间格式
        merge_logs: true,
        error_file: "./logs/err.log", // 错误日志
        out_file: "./logs/out.log", // 输出日志
    }]
}