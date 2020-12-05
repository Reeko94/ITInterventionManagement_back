import {DataTypes, Model} from "sequelize";
import {database} from "../config/database";

export class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: new DataTypes.STRING(255),
        allowNull: false
    }
},{
    tableName: 'users',
    sequelize: database
});

User.sync({force: false}).then(() => console.log('User table created')).catch(err => console.log(err));
