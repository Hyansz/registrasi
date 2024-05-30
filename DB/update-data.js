require('dotenv').config({path: '.env.development.local'});

const {sql} = require('@vercel/postgres');

async function execute() {
    
    try {
        const rows = await sql`
            UPDATE registrasi 
            SET nama = 'Agam',
                password = 'agam1234',
                username = 'gamgamagam',
                role = '1',
                status = '1'
            WHERE id = 5
        `;
        console.log(rows);
    } catch (error) {
        console.log(error.message);
    }

};

execute();