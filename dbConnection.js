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
    static selectAllCarros(callback){
        let connection = this.connect();
        let sql = 'SELECT * FROM tbl_carros;';
        var retorno = [];

        return connection.query(sql, (error, results)=>{
            // console.log(results);
            connection.end;
            callback(error, results);
        });
    }

    //TODO: descobrir pq está salvando varias vezes
    static InsertCarro(carro){
        let connection = this.connect();
        let queryInsert = mysql.format("INSERT INTO tbl_carros set ? ", carro);

        connection.query(queryInsert, function(error, results, fields){
            if(error){
                console.log(error);
            }

            console.log(results);
        });
    }

    static DeleteCarro(id){
        let connection = this.connect();
        let queryDelete = mysql.format("DELETE FROM tbl_carros WHERE Id =? ", id);

        connection.query(queryDelete, function(error, results, fields){
            if(error){
                console.log(error);
            }
        });
    }
}

module.exports.dbCarros = dbConnection;