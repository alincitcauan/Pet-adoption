import { Sequelize, DataTypes} from "sequelize";
import { User } from "./user.model";
import { Role } from "./role.model";

export const sequelize = new Sequelize('animals', 'postgres', 'secret', { host: 'localhost', port: 5432, dialect: 'postgres' });

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    last_name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    city: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    country: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    zipcode: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    phone_number: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    birthdate: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    RoleId: {
        type: new DataTypes.INTEGER,
    }
},
    {
        tableName: 'users',
        sequelize,
        freezeTableName: true,
    },
);

Role.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
},
    {
        tableName: 'roles',
        sequelize,
        freezeTableName: true,
    },
);


User.belongsTo(Role);
Role.hasOne(User);


(async () =>{
    console.log(1111111111111)
    await sequelize.sync()
    const user1= await Role.findOne({ where: { name:'admin' } });
    const user2= await Role.findOne({ where: { name:'user' } });
    if(!user1 && !user2){
      await Role.bulkCreate([
        {name:'admin'},
        {name:"user"}
      ])
    }else if(!user1 && user2){
      await Role.bulkCreate([
        {name:'admin'}
      ])
    }else if(user1 && !user2){
      await Role.bulkCreate([
        {name:'user'}
      ])
    }
  })()



// verify the connection
export async function connectToPostgres() {
    try {
        console.log('nu')
        sequelize.authenticate;
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectToPostgres();