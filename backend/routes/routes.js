const { Router } = require('express');
const express = require('express') 
const routes = express.Router()
const FormularioController = require ('../controllers/formulario-controllers')
const ArtigoController = require ('../controllers/artigo-controllers')
const UsuarioController = require ('../controllers/usuario-controllers')

routes.get("/", (req, res) => {
    return res.json({titulo: "Como criar 1ª API"});
});
// TEST CRUD - CREAT - RELEASE - UPDATE - DELETE 
routes.get("/listarartigo", ArtigoController.getArtigos);
routes.get("/formartigo", ArtigoController.getFormartigo);
routes.get("/listarartigo/:id", ArtigoController.getArtigo);
routes.post("/caddartigo", ArtigoController.postArtigo);
routes.put("/caddartigo/:id", ArtigoController.putArtigo); 
routes.delete("/caddartigo/:id", ArtigoController.deleteArtigo);

// FORMULARIO CRUD - CREAT - RELEASE - UPDATE - DELETE 
routes.get("/listarformulario", FormularioController.getFormularios);
routes.get("/formformulario", FormularioController.getFormformulario);
routes.get("/listarformulario/:id", FormularioController.getFormulario);
routes.post("/cadformulario", FormularioController.postFormulario);
//app.post("/cadformularioo", FormularioController.postFormularioo);
routes.put("/cadformulario/:id", FormularioController.putFormulario); 
routes.delete("/cadformulario/:id", FormularioController.deleteFormulario);

// FORMULARIO CRUD - CREAT - RELEASE - UPDATE - DELETE
routes.get('/formusuario',UsuarioController.getFormUsuario) 
routes.get('/usuario', UsuarioController.getUsuarios);
routes.get('/listarformulario/:id', UsuarioController.getUsuario);
routes.post('/cadusuario', UsuarioController.postUsuario);
routes.put('/cadusuario/:id', UsuarioController.putUsuario); 
routes.delete('/cadusuario/:id', UsuarioController.deleteUsuario);

module.exports= routes;