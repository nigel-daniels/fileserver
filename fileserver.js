/**
 * Copyright 2017 Initiate Thinking Limited
 * Author:  Nigel Daniels
 * License: MIT
 */

// express and middleware dependencies.
var express 	= require('express');
var serveLindex = require('serve-lindex');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(__dirname + '/upload'));
app.use(serveLindex(__dirname + '/upload', {'dotfiles': 'ignore', 'long': true}));

app.listen(3000, function(){
	console.log('Fileserver app listening on port 3000');
	});
