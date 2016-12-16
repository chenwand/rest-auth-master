var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Passagem = require('../models/Passagem.js');

/* GET / Listagem */
router.get('/', function(req, res, next) {
  Passagem.find(function (err, passagem) {
    if (err) return next(err);
    res.json(passagem);
  });
});

/* POST / Cadastro  */
router.post('/', function(req, res, next) {
  Passagem.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /passagem/id  Lista filtrada*/
router.get('/:id', function(req, res, next) {
  Passagem.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /passagem/:id Salva a edição */
router.put('/:id', function(req, res, next) {
  Passagem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /passagem/:id Deletando a partir do id */
router.delete('/:id', function(req, res, next) {
  Passagem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
