/**
 * Copyright 2017 Initiate Thinking Limited
 * Author:  Nigel Daniels
 * License: MIT
 */

// express and middleware dependencies.
var express 	= require('express');
var serveLindex = require('serve-lindex');

var app = express();

app.use(serveLindex(__dirname + '/upload', {'dotfiles': 'ignore', 'long': true}));

app.listen(3000, function(){
	console.log('Fileserver app listening on port 3000');
	});
