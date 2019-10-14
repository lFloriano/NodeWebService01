var http = require('http');
var url = require('url');
var dbConnection = require('./dbConnection.js');

var callback = function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var path = url.parse(request.url).path;

    if(path =='/'){
        response.end('Server root!');
    }    
    else if(path == '/select'){        
        let retorno =[]; 
        dbConnection.dbCarros.selectAllCarros(function(error, results){
            //Push elements to be returned
            results.map((element)=>{
                retorno.push({Id: element.Id, Modelo: element.Modelo, Placa: element.Placa});
            });

            response.end(JSON.stringify(retorno));
        });        
    }
    else if(path == '/insert'){
        let carro = {Modelo: 'Fusca', Placa: 'FFF0000'};

        dbConnection.dbCarros.InsertCarro(carro);
        response.end('Insert bem sucedido?');
    }
    else if(path == '/delete'){
        dbConnection.dbCarros.DeleteCarro(39);
        response.end();
    }
    else{
        response.end('Not found!');
    }
}

var server = http.createServer(callback);
server.listen('3000');

console.log("servidor iniciado!");