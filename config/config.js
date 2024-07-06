module.exports = {
    database: 'postgres',
    username: 'postgres.meszaywdmtfzcygyjnrv',
    password: 'easykeljohn7',
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, 
        }
    },
    secret: 'your_jwt_secret_key',
    DATABASE_URL: 'postgresql://postgres.meszaywdmtfzcygyjnrv:easykeljohn7@aws-0-eu-central-1.pooler.supabase.com:6543/postgres'
};
