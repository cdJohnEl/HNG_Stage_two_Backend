module.exports = {
    database: 'hng_stage2',
    username: 'cdjohnel',
    password: 'easykeljohn7',
    host: 'localhost',
    dialect: 'postgres',
    secret: 'your_jwt_secret_key', // Replace with a secure key
    DATABASE_URL: process.env.APP_ENV === 'test' == 'test' ? 'postgres://postgres:easykeljohn7@localhost:5432/hng_stage2' : 'postgres://postgres:password@localhost:5432/hngstage2'
};
