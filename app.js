var http = require('http');
var url = require('url');
var api = require('./externo.js')
var controle = require('./controle.js');

var callback = function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var path = url.parse(request.url).path;

    if(path =='/all'){
        let retorno = api.selectAll;

        response.end(JSON.stringify(JSON.stringify(retorno)));
    }
    else if(path =='/list'){
        response.end(controle.formatCarros(api.selectAll));
    }
    else{
        response.end('Something ELSE');
    }
}

var server = http.createServer(callback);
server.listen('3000');

console.log("servidor iniciado!");