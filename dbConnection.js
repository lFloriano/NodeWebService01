var mysql = require("mysql");

class dbConnection{

    static connect(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'usuario@localhost',
            password: 'carro123',
            database: 'carros'
        });
    }

    //Select with Promise
    static selectAllCarrosPromise(callback){
        let connection = this.connect();
        let sql = 'SELECT * FROM tbl_carros;';
        var retorno = [];

        return connection.query(sql, (error, results)=>{
            console.log(results);
            connection.end;

            callback(error, results);
        });
    }

    static InsertCarro(carro){
        let connection = this.connect();
        let queryInsert = "INSERT INTO tbl_carros set ? ";


        carro = {Modelo: 'Mercedes', Placa: 'ZZZ4444'};

        connection.query(queryInsert, carro, function(error, results, fields){
            if(error){
                console.log(error);
            }
        });
    }
}

module.exports.dbCarros = dbConnection;