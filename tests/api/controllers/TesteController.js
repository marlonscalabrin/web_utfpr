/**
 * TesteController
 *
 * @description :: Server-side logic for managing testes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  acao: function(req, res) {
    this.parametros = req.allParams();
    var lista = [];
    var keys = Object.keys(this.parametros);
    for (var i = 0; i < keys.length; i++) {
      var obj = {};
      obj["chave"] = keys[i];
      obj["valor"] = this.parametros[keys[i]];
      lista.push(obj);
    }
    res.view('teste/acao', {
      lista: lista,
      layout: false
    });
  }  
};

