import {DataTypes, Model} from "sequelize";
import {database} from "../config/database";

export class Customer extends Model {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public phone!:string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Customer.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    lastname:{
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    email:{
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    phone: {
        type: new DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: new DataTypes.STRING(255),
        allowNull: true
    },
    zipcode: {
        type: new DataTypes.STRING(5),
        allowNull: false
    },
    city: {
        type: new DataTypes.STRING(255),
        allowNull: false
    }
},{
    tableName: 'customers',
    sequelize: database
});

Customer.sync({force: false}).then(() => console.log('Customer table created')).catch(err => console.log(err));
