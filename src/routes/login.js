const router = require('express').Router();
const models = require("../models/models");
const mongoose = require('mongoose');

async function init () {
    console.log(process.env.MongoUser)
    resp = await mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@redbicicletas.rdrcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}
init();

router.route('/').post(async (req, res) => {
    const temp = await models.Usuario.findOne({"nombre":req.body.nombre, "password":req.body.password});
    console.log()
    try {
        res.json({login:temp!=null});
      } catch (error) {
        res.status(500).send(error);
    }
});

router.route('/crear').post(async (req, res) => {
    const temp = new models.Usuario({
        nombre : req.body.nombre,
        password : req.body.password,
    });
    try {
        await temp.save();
        res.json({temp});
      } catch (error) {
        res.status(500).send(error);
      }
    
});

module.exports = router;