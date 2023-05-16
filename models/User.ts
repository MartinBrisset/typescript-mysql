import { DataTypes } from 'sequelize';
import db from '../db/conecction';

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    }
});

export default User;