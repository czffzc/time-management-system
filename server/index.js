const express = require('express')
const app = express()

app.use(require('cors')())

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '111111',
//   database : 'test'
// });

// connection.connect();



// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended:false}))

// 1. 导入路由模块
const router = require('./login')
// 2. 注册路由模块
app.use('/api',router)
// app.use 注册全局中间件

app.get('/',async(req,res)=>{
    res.send('index')
})

// app.post('/api/login',async(req,res)=>{

// })

// app.get('/api/test',async(req,res)=>{
//     res.send({name:'fzc',grade:100})
// })

app.listen(3001,()=>{
    console.log("http://localhost:3001/")
})