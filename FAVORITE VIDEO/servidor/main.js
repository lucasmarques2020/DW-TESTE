const { Usuario, Midia, Midia_Capa, Midia_Categoria, Midia_Local, sequelize} = require("./bd.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
    extended: false
}))
//BUSCA_USUARIO
app.get("/usuario", (req,res) =>{
    sequelize.sync().then(()=>{
        Usuario.findAll().then((usuario)=>{
            res.send(usuario);
        });
    });
        });
//CADASTRO_USUARIO
app.post("/cadastro", (req,res) =>{
    let nome = req.body.nome_usuario;
    let email = req.body.email_usuario;
    let senha = req.body.senha_usuario;
    sequelize.sync().then(()=>{
        Usuario.create({
            nome: nome,
            email: email,
            senha: senha
        });
        res.send("Usuario criado com sucesso!");
        });
    });
//ALTERAR_USUARIO
app.post("/alterar/:id", (req,res) =>{
    let id = req.params.id;
    let nome = req.body.nome_usuario;
    let email = req.body.email_usuario;
    let senha = req.body.senha_usuario;
    sequelize.sync().then(()=>{
        Usuario.update({
            nome: nome,
            email: email,
            senha: senha
        },{where:{id:id}});
        res.send("Usuario alterado com sucesso!");
        });
    });
//DELETAR_USUARIO
app.post("/deletar/:id", (req,res) =>{
    let id = req.params.id;
    sequelize.sync().then(()=>{
        Usuario.destroy({where:{id:id}});
        res.send("Usuario deletado com sucesso!");
        });
    });
//------------------------------------------------------------------------------------------------------------------
//BUSCA_TITULO
app.get("/buscar_titulo", (req,res) =>{
    sequelize.sync().then(()=>{
        Midia.findAll().then((midia)=>{
            res.send(midia);
        });
    });
        });
//CADASTRO_TITULO
app.post("/cadastro_titulo", (req,res) =>{
    let titulo = req.body.nome_titulo;
    let descricao = req.body.descricao;
    sequelize.sync().then(()=>{
        Midia.create({
            titulo: titulo,
            descricao: descricao
        });
        res.send("Midia criado com sucesso!");
        });
    });
//ALTERAR_TITULO
app.post("/alterar_titulo/:id", (req,res) =>{
    let id = req.params.id;
    let titulo = req.body.nome_titulo;
    let descricao = req.body.descricao;
    sequelize.sync().then(()=>{
        Midia.update({
            titulo: titulo,
            descricao: descricao
        },{where:{id:id}});
        res.send("Midia alterado com sucesso!");
        });
    });
//DELETAR_TITULO
app.post("/deletar_titulo/:id", (req,res) =>{
    let id = req.params.id;
    sequelize.sync().then(()=>{
        Midia.destroy({where:{id:id}});
        res.send("Midia deletado com sucesso!");
        });
    });
//------------------------------------------------------------------------------------------------------------------
//BUSCA_CAPA
app.get("/buscar_capa", (req,res) =>{
    sequelize.sync().then(()=>{
        Midia_Capa.findAll().then((midiaCapa)=>{
            res.send(midia);
        });
    });
        });
//CADASTRO_CAPA
app.post("/cadastro_capa", (req,res) =>{
    let caminho = req.body.midiaCaminho;
    sequelize.sync().then(()=>{
        Midia_Capa.create({
           midiaCaminho: midiaCaminho
        });
        res.send("capa criada com sucesso!");
        });
    });
//ALTERAR_CAPA
app.post("/alterar_capa/:id", (req,res) =>{
    let id = req.params.id;
    let caminho = req.body.midiaCaminho;
    sequelize.sync().then(()=>{
        Midia_Capa.update({
            midiaCaminho: midiaCaminho
        },{where:{id:id}});
        res.send("Capa alterado com sucesso!");
        });
    });
//DELETAR_CAPA
app.post("/deletar_capa/:id", (req,res) =>{
    let id = req.params.id;
    sequelize.sync().then(()=>{
        Midia_Capa.destroy({where:{id:id}});
        res.send("Capa deletado com sucesso!");
        });
    });
//------------------------------------------------------------------------------------------------------------------
//BUSCA_CATEGORIA
app.get("/buscar_categoria", (req,res) =>{
    sequelize.sync().then(()=>{
        Midia_Categoria.findAll().then((categoria)=>{
            res.send(categoria);
        });
    });
        });
//CADASTRO_CATEGORIA
app.post("/cadastro_categoria", (req,res) =>{
    let nomeCategoria = req.body.nomeCategoria;
    sequelize.sync().then(()=>{
       Midia_Categoria.create({
            titulo: nomeCategoria
        });
        res.send("Categoria criado com sucesso!");
        });
    });
//ALTERAR_CATEGORIA
app.post("/alterar_categoria/:id", (req,res) =>{
    let id = req.params.id;
    let nomeCategoria = req.body.nomeCategoria;
    sequelize.sync().then(()=>{
       Midia_Categoria.update({
            titulo: nomeCategoria
        },{where:{id:id}});
        res.send("Categoria alterado com sucesso!");
        });
    });
//DELETAR_CATEGORIA
app.post("/deletar_categoria/:id", (req,res) =>{
    let id = req.params.id;
    sequelize.sync().then(()=>{
        Midia_Categoria.destroy({where:{id:id}});
        res.send("Categoria deletado com sucesso!");
        });
    });
//------------------------------------------------------------------------------------------------------------------
//BUSCA_MIDIA_LOCAL
app.get("/buscar_midia", (req,res) =>{
    sequelize.sync().then(()=>{
        Midia_Local.findAll().then((midiaLocal)=>{
            res.send(midialocal);
        });
    });
        });
//CADASTRO_MIDIA_LOCAL
app.post("/cadastro_midia", (req,res) =>{
    let midiaLocal = req.body.midiaLocal;
    sequelize.sync().then(()=>{
       Midia_Local.create({
            midiaLocal: midiaLocal
        });
        res.send("Midia criado com sucesso!");
        });
    });
//ALTERAR_MIDIA_LOCAL
app.post("/alterar_midia/:id", (req,res) =>{
    let id = req.params.id;
    let midiaLocal = req.body.midiaLocal;
    sequelize.sync().then(()=>{
       Midia_Local.update({
            midiaLocal: midiaLocal
        },{where:{id:id}});
        res.send("Midia alterado com sucesso!");
        });
    });
//DELETAR_MIDIA_LOCAL
app.post("/deletar_midia/:id", (req,res) =>{
    let id = req.params.id;
    sequelize.sync().then(()=>{
        Midia_Local.destroy({where:{id:id}});
        res.send("Midia deletado com sucesso!");
        });
    });
app.listen(port, ()=>{
   console.log("Roading server..."); 
});