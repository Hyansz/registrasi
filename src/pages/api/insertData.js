const {sql} = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function insertData(req, res) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({message: 'Method not supported'});
        };

        const {nama, username, password} = req.body;
        const saltRounds = 1;
        const plainPassword = `${password}`;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        const rows = await sql`
            INSERT INTO registrasi (nama, username, password)
            VALUES (${nama}, ${username}, ${hashedPassword})
        `;

        res.status(200).json({message: 'Success', data: rows});
    } catch (error) {
        console.log('Terdapat Error: ', error.message);
        res.status(500).json({message: 'Error'});
    };
};

export default (insertData);