import { Sequelize } from 'sequelize-cockroachdb'; // import sequelize ORM

// Connect to CockroachDB through Sequelize.
export let sequelize = new Sequelize('ajstoa', 'ramesh', '', {
    dialect: 'postgres',
    port: 26257,
    logging: console.log,
    define: {
        timestamps: false
    }
});

