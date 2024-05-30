const {sql} = require('@vercel/postgres');

async function getData(req, res) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).json({message: 'Method not supported'});
        };

        const {id} = req.query;

        const {rows} = await sql`SELECT * FROM registrasi where id = ${id}`;

        res.status(200).json({message: 'Success', data: rows});
    } catch (error) {
        console.log('Terdapat Error: ', error.message);
        res.status(500).json({message: 'Error'})
    };
};

export default (getData);