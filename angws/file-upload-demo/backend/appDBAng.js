let path = require('path');
var mysql = require('mysql');
let express = require('express');
let multer = require('multer');
let app = express();

const dbConConfig = {
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "node_db"	// mysql database name
};

function dbConnect() {
    var con = mysql.createConnection(dbConConfig);
    con.connect((err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
    return con;
}

function dbClose(con){
    con.end((err) => {
        console.log(err);
    }, () => {
        console.log("MySQL Connection Closed");
    });
}




app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'imgs'));
    },
    filename: (req, file, cb) => {
        const fileName = Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName);
    }
});

let multerObject = multer({ storage: storage });

app.post("/users", multerObject.single('photo'), (req, res) => {
    const data = req.body;
    const name=data.name;
    const age=data.age;
    console.log("Name=" + name);
    console.log("Age=" + age);
    const file = req.file;
    const savedFn = file.filename;
    const con=dbConnect();
    con.query("insert into reg_data(name,age,photo) values(?,?,?)",[name,age,savedFn],(err,response)=>{
        let r={};
        if(err){
            r.status="FAIL";
            r.message="Registration Fail (" +err.sqlMessage+")";
        }
        else{
            r.status="SUCCESS";
            r.message="Registered with Id="+response.insertId;
        }
        dbClose(con);
        res.send(r);
    });

});


app.get("/users", (req, res) => {

    const con=dbConnect();
    con.query("select * from reg_data order by id desc",(err,response)=>{
    let users=[...response];
    users.map((u)=>u.photo="imgs/"+u.photo);
     dbClose(con);
     res.send(users);
    });

});


app.listen(3000, function () {
    console.log('listening on 3000');
});


