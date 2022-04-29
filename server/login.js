// 这是路由模块

const db = require('./dbconfig')

// 1. 导入 express
const express = require('express')

// 2. 创建路由对象
const router = express.Router()

// 3. 挂载具体的路由
router.get('/login',(req,res)=>{
    const userInfo = req.query
    // 判断用户名和密码是否合法
    const sql = `select * from user where username='${userInfo.username}' and password='${userInfo.password}' `; // 写你需要的sql代码，你要是不会写那我就真的没办法了
    
    db.query(sql,function(err,result){
        console.log(result)
        console.log(result.length)
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        if(result.length > 0){
            return res.send({
                code : 20000,
                status : 1,
                msg : '用户名密码正确'
            })
        }
        else{
            return res.send({
                code : 2,
                status : -1,
                msg : '用户名密码错误'
            })
        }

        // if(result.length > 0){
        //     return res.send({
        //         status : 1,
        //         msg : '用户名密码正确'
        //     })
        // }
        // else{
        //     return res.send({
        //         status : -1,
        //         msg : '用户名或密码错误'
        //     })
        // }

        // result内放的就是返回的数据，res是api传数据
        // 返回的数据需要转换成JSON格式
        res.json(result); 
    }); 
    // const query = req.query
    // res.send({
    //     status : 0,
    //     msg : '请求成功',
    //     data : query
    // })
})

router.post('/post',(req,res)=>{
    // 获取客户端通过请求体，发送到服务器的数据
    const body = req.body;

    res.send({
        status : 0,
        msg : 'post成功',
        data : body
    })
})
// 4. 向外导出路由对象
module.exports = router