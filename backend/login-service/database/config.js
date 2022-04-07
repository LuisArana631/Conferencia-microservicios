const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect('mongodb+srv://Conferencia:gq319AkI5qmdKaWf@cluster0.obe6m.mongodb.net/users', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos conectada');
    } catch (err) {
        console.log(err);
        throw new Error('Error al conectar con la base de datos');
    }
}

module.exports = {
    dbConnection
}