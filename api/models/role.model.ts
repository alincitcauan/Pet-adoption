import {  Model } from "sequelize";

// const sequelize = new Sequelize('animals', 'postgres', 'secret', { host: 'localhost', port: 5432, dialect: 'postgres' });

export class Role extends Model {
    id: { type: number, autoIncrement: true, primaryKey: true }
    name: string

    public getName(): string {
        return this.name;
    }
};















// Role.belongsTo(User, { foreignKey: 'roleId' });


// from indexts. pt moment
// export async function CreateUserAndRoleTable() {
//     // Table creation
//     await sequelize.sync();
//     console.log('da')
//     await User.create({ first_name: 'alina', last_name: 'citcauan', city: 'bistrita', country: 'Ro', zipcode: '420110', phone_number: '0749945015', birthdate: '27.03.1995', email: 'alin@.ro', password: 'secret', roleId: 1 })
//     await Role.bulkCreate([
//         { name: 'admin' },
//         { name: 'user'  },
//     ])
// }
// CreateUserAndRoleTable()