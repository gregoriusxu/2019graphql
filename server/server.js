const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
let schema = require('./schema');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',//允许哪个客户端跨域访问
    methods: "GET,PUT,POST,DELETE,OPTIONS"//允许的方法名
}));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true //查询工具
}));
app.listen(4000, () => {
    console.log('服务器在4000端口上已经启动');
});
