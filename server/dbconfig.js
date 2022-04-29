// mysql 数据库配置文件

// 导入mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: 'localhost',//主机IP
    user: 'root', //数据库用户名
    password: '111111', //数据库密码
    database: 'time_management'//数据库名字
})

// 向外共享db数据库连接对象
module.exports = db
