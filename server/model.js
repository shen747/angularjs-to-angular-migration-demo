/** manages database layer (request and response) */
import { Sequelize } from 'sequelize-cockroachdb';
import { sequelize } from './dbContext';

// Define the Homes model for the "homes" table.
export let Home = sequelize.define('homes', {
    homeid: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true,allowNull: false },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING }
});