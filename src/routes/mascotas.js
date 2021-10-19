const router = require('express').Router();
const models = require("../models/models");
const mongoose = require('mongoose');

async function init () {
    resp = await mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@redbicicletas.rdrcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

init();

router.route('/').get(async (req, res) => {
    const mascota = await models.Mascota.find({});
    try {
        res.json({mascota});
      } catch (error) {
        res.status(500).send(error);
    }
});

router.route('/crear').post(async (req, res) => {
    const mascota = new models.Mascota({
        id : req.body.id,
        nombre: req.body.nombre,
        raza: req.body.raza,
        tipo : req.body.tipo,
        adoptado : req.body.adoptado,
        vacunado : req.body.vacunado,
        ubicacion : req.body.ubicacion
    });
    try {
        await mascota.save();
        res.json({mascota});
      } catch (error) {
        res.status(500).send(error);
      }
    
});

router.route('/editar').put(async (req, res) => {
    const temp = await models.Mascota.updateOne({"id":req.body.id}, req.body);
    res.json({temp});
});

router.route('/eliminar').delete(async (req, res) => {
    const temp = await models.Mascota.deleteOne({"id":req.body.id});
    res.json({temp});
});

module.exports = router;