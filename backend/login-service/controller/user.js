const { request, response } = require('express');
const User = require('../models/user');
const crypto = require('crypto');

const crearUser = async (req = request, res = response) => {  
    try {
        const new_body = { 
            ...req.body,
            key: req.body.user, 
        }

        const user = new User( new_body );
        const createduser = await user.save();

        res.status(201).json({
            status: true,
            msg: 'Usuario almacenado correctamente',
            user: createduser
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            status: false,
            msg: 'Hable con el administrador',
        });
    }
}

const loginUser = async (req = request, res = response) => {
    const { user, password } = req.body;

    try {
        const userItem = await User.find({key: user});

        if( !userItem ){
            return res.status(404).json({
                status: false,
                msg: 'No existe el usurario',
            });
        }

        if (password === userItem[0].password ){
            return res.status(201).json({
                status: true,
                user
            });
        }

        res.status(403).json({
            status: false,
            msg: 'Credenciales incorrectas'
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            status: false,
            msg: 'Hable con el administrador',
        });
    }   
}

module.exports = {
    crearUser,
    loginUser
}