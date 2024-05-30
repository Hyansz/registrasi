const {sql} = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function updateData(req, res) {
    try {
        if (req.method !== 'PUT') {
            return res.status(405).json({message: 'Method not supported'});
        };

        const {id} = req.query;
        const {nama, username, password, role, status} = req.body;

        const saltRounds = 1;
        const plainPassword = `${password}`;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        const rows = await sql`
            UPDATE registrasi 
            SET nama = ${nama},
                username = ${username},
                password = ${hashedPassword},
                role = ${role},
                status = ${status}
            WHERE id = ${id}
        `;

        res.status(200).json({message: 'Success', data: rows});
    } catch (error) {
        console.log('Terdapat Error: ', error.message);
        res.status(500).json({message: 'Error'})
    };
};

export default (updateData);