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

app.post("/doReg", multerObject.single('photo'), (req, res) => {
    const data = req.body;
    const name=data.nm;
    const age=data.age;
    console.log("Name=" + name);
    console.log("Age=" + age);
    const file = req.file;
    // const uploadedFn = file.originalname;
    const savedFn = file.filename;
    // const contentType = file.mimetype;
    // const size = file.size;

    // console.log("Uploaded File Name=" + uploadedFn);
    // console.log("Saved File Name=" + savedFn);
    // console.log("Type=" + contentType);
    // console.log("Size=" + size);

    const con=dbConnect();
    con.query("insert into reg_data(name,age,photo) values(?,?,?)",[name,age,savedFn],(err,response)=>{
        let r='<a href="showAll">Show All</a> | <a href="reg.html">New Registartion</a><br></hr>';
        if(err){
            r=r+"Registration Fail (" +err.sqlMessage+")";
        }
        else{
            r=r+"Registered with Id="+response.insertId;
        }
        dbClose(con);
        res.send(r);
    });



});


app.get("/showAll", (req, res) => {

    const con=dbConnect();
    con.query("select * from reg_data order by id desc",(err,response)=>{
    let r='<a href="reg.html">New Registration</a><hr>';
       if(response && response.length>0){
           r=r+"<table border='1' cellspacing='0' cellpadding='5' >";
           for(let row of response){
            r=r+`<tr><td width='200'>${row.name}</td><td width='60'>${row.age}</td><td><img src='imgs/${row.photo}' height='50' ></td>`;
           }
           r=r+"</table>";
       }else{
        r=r+"No Data Found";
       }
        dbClose(con);
        res.send(r);
    });

});


app.listen(3000, function () {
    console.log('listening on 3000');
});


