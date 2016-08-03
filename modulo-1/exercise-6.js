var prompt = require('prompt-sync')();
var w = Number(prompt('Cual es su peso en libras?'));
var m = Number(prompt('Cual es el numero de medallas que consumio?'));
var h = Number(prompt('Cual es la cantidad de tiempo de consumo (horas)?'));
console.log(((10 * m * 5.14) /(w * 0.69)) - (.015 * h ))
