require('dotenv').config({path: '.env.development.local'});
const bcrypt = require('bcrypt');

const {sql} = require('@vercel/postgres');

async function execute() {
    try {
        const nama = 'Rizky';
        const username = 'RiskyUjang';
        const saltRounds = 1;
        const plainPassword = '12345678';
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        const rows = await sql`
            INSERT INTO registrasi (nama, username, password)
            VALUES (${nama}, ${username}, ${hashedPassword})
        `;

        console.log(hashedPassword);
        console.log('Data berhasil ditambahkan', rows);
    } catch (error) {
        console.log(error.message);
    }

};

execute();