const {sql} = require('@vercel/postgres');

async function getData(req, res) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).json({message: 'Method not supported'});
        };

        const {rows} = await sql`SELECT * FROM registrasi`;

        res.status(200).json({message: 'Success', data: rows});
    } catch (error) {
        console.log('Terdapat Error: ', error.message);
    };
};

export default (getData);