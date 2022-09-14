import { Model } from "sequelize";


// import { UserInterface } from "../controllers/types";
// type UserCreationAttributes = Optional<UserInterface, 'id'>;
// const sequelize = new Sequelize('animals', 'postgres', 'secret', { host: 'localhost', port: 5432, dialect: 'postgres' });



export class User extends Model /*<UserCreationAttributes, UserInterface>*/ {
    id: {
        type: number,
        required: true
    }
    first_name: {
        type: string,
        required: true
    }
    last_name: {
        type: string,
        required: true
    }
    city: {
        type: string,
        required: true
    }
    country: {
        type: string,
        required: true
    }
    zipcode: {
        type: string,
        required: true
    }
    phone_number: {
        type: string,
        required: true
    }
    birthdate: {
        type: string,
        required: true
    }
    email: {
        type: string,
        required: true,
        unique : true
    }
    password: {
        type: string,
        required: true
    }
    RoleId: {
        type: number,
        required: true
    }




    // public getFirstName(): string {
    //     return this.first_name;
    // }

    // public getLastName(): string {
    //     return this.last_name;
    // }

    // public getPassword(): string {
    //     return this.password;
    // }

    // public getEmail(): string {
    //     return this.email;
    // }
};









// User.hasOne(Role);


// (async() => {

//  await User.init({
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         first_name: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         last_name: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         city: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         country: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         zipcode: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         phone_number: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         birthdate: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         email: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         password: {
//             type: new DataTypes.STRING(128),
//             allowNull: false,
//         },
//         roleId: {
//             type: new DataTypes.INTEGER,
//             allowNull: false,
//         }
//     },
//         {
//             tableName: 'users',
//             sequelize,
//             // freezeTableName: true,
//         }
//     )
//     console.log(123456)
// })()

// User.hasOne(Role, { sourceKey: 'id' });

// User.init ({
//     id :DataTypes.INTEGER,
//   first_name:DataTypes.STRING,
//   last_name:DataTypes.STRING,
//   city:DataTypes.STRING,
//     country:DataTypes.STRING,
//       zipcode:DataTypes.STRING,
//       phone_number: DataTypes.STRING,
//       birthdate: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       roleId: DataTypes.NUMBER
// },
// {
//   tableName: 'users',
//   sequelize  
// }
// )



// const UserInterface = sequelize.define<UserInterface>('Users', {
//     id:{
//          type :DataTypes.NUMBER,
//          primaryKey: true
//     },
//   first_name:DataTypes.STRING,
//   last_name:DataTypes.STRING,
//   city:DataTypes.STRING,
//     country:DataTypes.STRING,
//       zipcode:DataTypes.STRING,
//       phone_number: DataTypes.STRING,
//       birthdate: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       roleId: DataTypes.NUMBER
// });



    // constructor(
    //     first_name: string,
    //     last_name: string,
    //     city: string,
    //     country: string,
    //     zipcode: string,
    //     phone_number: string,
    //     birthdate: string,
    //     email: string,
    //     password: string,
    //     roleId: number ){
    //         this.first_name = first_name;
    //         this.last_name = last_name;
    //         this.city = city;
    //         this.country = country;
    //         this.zipcode = zipcode;
    //         this.phone_number = phone_number;
    //         this.birthdate = birthdate;
    //         this.email = email;
    //         this.password = password;
    //         this.roleId = roleId;
    //     }

