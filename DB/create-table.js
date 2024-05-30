require('dotenv').config({path: '.env.development.local'});

const {sql} = require('@vercel/postgres');

async function execute() {

    const deleteTable = await sql`DROP TABLE registrasi`;

    const createTable = await sql`
        CREATE TABLE IF NOT EXISTS registrasi (
            id SERIAL PRIMARY KEY,
            nama VARCHAR(30) NOT NULL,
            password VARCHAR(100) NOT NULL,
            username VARCHAR(15) NOT NULL UNIQUE,
            role INT DEFAULT 0 CHECK(role IN (0, 1)),
            status INT DEFAULT 1 CHECK(status IN (0, 1)),
            craeted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
        )
    `;
    console.log(createTable);
};

execute();