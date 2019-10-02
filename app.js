var http = require('http');
var url = require('url');


//teste html via JSON
function htmlJSON (){
    return '<h1>HTML WORKS TOO!!</h2>';
}

var callback = function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});

    var parts = url.parse(request.url);

    if(parts.path == '/'){
        response.end('estamos no root');
    }
    else if(parts.path == '/carros'){
        response.end(JSON.stringify({'URL': 'Carros', 'Index' : 2}));
    }
    else if(parts.path == '/html'){
        response.end(htmlJSON());
    }
    else{
        response.end('Aonde estamos???');
    }


};

var server = http.createServer(callback);
server.listen('3000');

console.log("servidor iniciado!");