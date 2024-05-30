const {sql} = require('@vercel/postgres');

async function insertData(req, res) {
    try {
        if (req.method !== 'DELETE') {
            return res.status(405).json({message: 'Method not supported'});
        };

        const {id} = req.query;

        const rows = await sql`
            DELETE FROM registrasi WHERE id = ${id}
        `;

        res.status(200).json({message: 'Success', data: rows});
    } catch (error) {
        console.log('Terdapat Error: ', error.message);
    };
};

export default (insertData);