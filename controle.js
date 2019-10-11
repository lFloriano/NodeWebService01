function formatCarros(carros){
    var retorno ="";

    carros.map((c) => {
        retorno += "<h4>Modelo: " + c.Modelo + " Placa: " + c.Placa + "</h4>";
    });

    return retorno;
}

exports.formatCarros = formatCarros;