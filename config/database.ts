import {Sequelize} from "sequelize";

export const database = new Sequelize({
    database: process.env.DB_NAME || 'intervention',
    dialect:'mysql',
    host:process.env.DB_HOST || 'localhost',
    username:process.env.DB_USERNAME || 'root',
    password:process.env.DB_PASSWORD || 'root'
})
