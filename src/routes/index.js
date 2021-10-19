const router = require('express').Router();

const helloRoute = require('./mascotas');
const loginRoute = require('./login');
router.use('/login', loginRoute);
router.use('/mascotas', helloRoute);
module.exports = router;