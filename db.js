var mysql = require('mysql');
var pool  = null;
exports.connect = function() {
  pool = mysql.createPool({
    host     : 'localhost',
    user     : 'myuser',
    password : 'mypassword',
    database : 'mydb'
  });
}
exports.get = function() {
  return pool;
}