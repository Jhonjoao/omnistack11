const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = { 
    async index (req,res) {
        //usei o metódo store por costume e semantica, porém voce pode colocar o nome que preferir

        const ongs = await connection('ongs').select('*');
        
        return res.json(ongs);
    },
    async store(req, res) {
        //ultilizo req e res pela maior facilidade, porém a função é a mesma request e response

        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return res.json({ id });
    }
};