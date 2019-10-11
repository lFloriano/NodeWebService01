var carros = [
    {Modelo: "Kadett", Placa: "CJS8456"},
    {Modelo: "Corsa", Placa: "ABC0001"},
    {Modelo: "Palio", Placa: "PPP1452"},
    {Modelo: "BMW", Placa: "YBS4112"},
    {Modelo: "Gol", Placa: "AAA8888"},
]

function selectAll(){
    return carros;
}

function selectByPlaca(placa){
    return carros.filter((c)=> c.Placa === placa);
}

function saveCarro(c){
    carros.push(c);
}


module.exports.selectAll = selectAll();
