var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Destino = require('../models/Destino.js');

/* GET /destino Listagem de destino. */
router.get('/', function(req, res, next) {
  Destino.find(function (err, destino) {
    if (err) return next(err);
    res.json(destino);
  });
});

/* POST /destino Cadastro de aluno */
router.post('/', function(req, res, next) {
  Destino.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /destino/id  Lista filtrada por um destino*/
router.get('/:id', function(req, res, next) {
  Destino.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /destino/:id Salva a edição de destino */
router.put('/:id', function(req, res, next) {
  Destino.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /destino/:id Deletando o destino a partir do id */
router.delete('/:id', function(req, res, next) {
  Destino.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
