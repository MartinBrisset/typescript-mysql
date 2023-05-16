import { Sequelize } from "sequelize";

const db = new Sequelize('test','root','print21',{
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
})

export default db;