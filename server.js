var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express();


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.post('/file_upload',  upload.single('somefile'), function (req, res, next) {
   res.json( {"size" :  req.file.size} );
});

app.get("*", function (req, res){
  res.sendFile(process.cwd() + '/the404.html');
});

var port = process.env.PORT || 8080;


app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});