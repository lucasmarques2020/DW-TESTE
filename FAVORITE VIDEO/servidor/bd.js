const mysql = require('mysql2');

const connection = mysql.createConnection({
    user     : "root",
    password : "Lucas@173"
});
connection.query('CREATE DATABASE IF NOT EXISTS midia_project;');
const {Sequelize,Model,DataTypes} = require("sequelize");
const sequelize = new Sequelize("midia_project", "root", "Lucas@173",{
    host: "localhost",
    dialect: "mysql"
});

class Usuario extends Model{}
    Usuario.init({nome: DataTypes.STRING, email: DataTypes.STRING, senha: DataTypes.STRING},{sequelize,modelName: "Usuario"});

class Midia extends Model{}
    Midia.init({titulo: DataTypes.STRING, descricao: DataTypes.STRING},{sequelize,modelName: "Midia"});

class Midia_Capa extends Model{}
   Midia_Capa.init({midiaCaminho: DataTypes.STRING},{sequelize,modelName: "Midia_Capa"});

class Midia_Categoria extends Model{}
    Midia_Categoria.init({nomeCategoria: DataTypes.STRING},{sequelize,modelName: "Midia_Categoria"});

class Midia_Local extends Model{}
    Midia_Local.init({localMidia: DataTypes.STRING},{sequelize,modelName: "Midia_Local"});

class Usuario_Assinatura extends Model{}
   Usuario_Assinatura.init({ident_user: DataTypes.STRING, valor: DataTypes.FLOAT},{sequelize,modelName: "Usuario_Assinatura"});

//relacionamento usuario/midia -1/n
Usuario.belongsToMany(Midia,{through:"midiaUsuario"});
//relacionamento midia/capa-1/1
Midia.hasOne(Midia_Capa,{through:"midiacapa"});
//relacionamento midia/categoria -n/n
Midia.belongsToMany(Midia_Categoria,{through:"midiacategoria"});
//relacionamento categoria/midia -n/n
Midia_Categoria.belongsToMany(Midia,{through:"midiacategoria"});
//relacionamento midia/local -1/1
Midia.hasOne(Midia_Local,{through:"midialocal"});
//relacionamento usuario/midia -1/1
Usuario_Assinatura.belongsToMany(Usuario,{through:"assinaturausuario"});
//sincronicar com o banco
Usuario.sync();
Midia.sync();
Midia_Capa.sync();
Midia_Categoria.sync();
Midia_Local.sync();
Usuario_Assinatura.sync();

module.exports = {
    Usuario,
    Midia,
    Midia_Capa,
    Midia_Categoria,
    Midia_Local,
    Usuario_Assinatura,
    sequelize
}