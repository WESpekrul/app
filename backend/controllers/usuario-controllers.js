require("../models/db");
require("../models/Usuario");

const mongoose = require('mongoose');
const Usuario = mongoose.model('usuario');

exports.getFormUsuario = (req, res) => {  
    res.render('ClienteCad')
};
exports.getUsuarios = (req, res) => {    
    Usuario.find({}).then((usuario) => {
        return res.json(usuario);
    }).catch ((erro) => {
        return res.status (400).json({
            error: true,
            message: "Nenhum usuario encontrado !"
        })
    })
};
exports.getUsuario = (req, res) => {    
    Usuario.findOne({_id:req.params.id}).then((usuario) => {
        return res.json(usuario);
    }).catch ((erro) => {
        return res.status (400).json({
            error: true,
            message: "Nenhum usuario encontrado ! "
        })
    })
};
exports.postUsuario = (req, res) => {
    const usuario = Usuario.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: usuario não foi cadastrado com sucesso!"
        });
         
        return res.status(200).json({
            error: false,
            message: "usuario cadastrado com sucesso!",
                     
        })
        
    });
    console.log("Cadastrado com Sucesso");
};
exports.putUsuario = (req, res) => {
    const usuario = Usuario.updateOne({_id: req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json ({
            error: true,
            message: "Error : Usuario não foi editado com sucesso ! "
        });
        return res.json ({ 
            error: false,
            message: "Usuario editado com sucesso !" 
        });    
    });
};
exports.deleteUsuario = (req, res) => {
    const usuario = Usuario.deleteOne({_id: req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json ({
            error: true,
            message: "Error : Usuario não foi Apagado com sucesso ! "
        });
        return res.json ({ 
            error: false,
            message: "Usuario apagado com sucesso !"
        });    
    });
};

