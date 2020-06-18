var path = require("path");
var mysql = require('mysql');
var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers",    "Origin, X-Requested-With, Content-Type, Accept"  );  
    res.setHeader("Access-Control-Allow-Methods",    "GET, POST, PATCH, PUT, DELETE, OPTIONS"  );  
    next();
  });

var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "node_db"	// mysql database name
});


// static middleware to call empForm.html
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

con.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
});

app.post("/products", function (req, res) {
    // get post data
    let data = req.body;
    console.log(data);
    
    con.query("insert into products_table(pcode,name,price,qty) values(?,?,?,?)", [data.pcode, data.name, data.price, data.qty], (err, result) => {
        let r = {};
        if (err) {
          //  console.log(err);
            r.status = 'fail';
            r.message = err.sqlMessage;
            //console.log(r);
        } else {
            console.log(result);
            r.status = 'success';
            r.message = 'Data Inserted with id :' + result.insertId;
        }
        res.json(r);
    });
});

app.get("/products", (req, res) => {
    con.query("select * from products_table", (err, result) => {
        res.json(result);
    });
});

app.get("/products/:id", (req, res) => {
    const id = req.params['id'];
    con.query("select * from products_table where id=?", [id], (err, result) => {
        if (err) {
            res.json(err);
        }
        if(result && result.length>0)
            res.json(result[0]);
        else
            res.json(null);
    });
});

app.delete("/products/:id", (req, res) => {
    const id = req.params['id'];
    con.query("delete from products_table where id=?", [id], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';
            r.message = err.sqlMessage;
            console.log(r);
        } else {
            if (result.affectedRows > 0) {
                r.status = 'success';
                r.message = `Data deleted with id : ${id}`;
            } else {
                r.status = 'fail';
                r.message = `Data not found for id : ${id}`;
            }
        }
        res.json(r);
    })
});

app.put("/products/:id", (req, res) => {
    let data = req.body;
    const id = req.params['id'];
    con.query("update products_table set name=?,price=?,qty=? where id=?", [data.name, data.price, data.qty, id], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';
            r.message = err.sqlMessage;
        } else {
            if (result.affectedRows > 0) {
                r.status = 'success';
                r.message = `Data updated for id : ${id}`;
            } else {
                r.status = 'fail';
                r.message = `Data not found for id : ${id}`;
            }
        }
        res.json(r);
    });
});

const server=app.listen(3000, function () {
    console.log('listening on 3000');
});



process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
    console.log('Closing mysql connection.');
    con.end((err) => {
        console.log(err);
    }, () => {
        console.log("MySQL Closed");
    });
});
