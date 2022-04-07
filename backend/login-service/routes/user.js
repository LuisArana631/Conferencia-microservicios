// Rutas de users 
// ---> RUTA: /users
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middlewares/check-body');
const controladorUser = require('../controller/user');

router.post(
    '/login', // ruta    
    [ //middlewares
        check('user', 'El nombre del user es obligatorio').not().isEmpty(),
        check('password', 'La password del user es obligatoria').not().isEmpty(),
        checkBody
    ], 
    controladorUser.loginUser
);

router.post(
    '/register', 
    [ //middlewares
        check('user', 'El nombre del user es obligatorio').not().isEmpty(),
        check('password', 'La password del user es obligatoria').not().isEmpty(),
        checkBody
    ], 
    controladorUser.crearUser
);

module.exports = router;