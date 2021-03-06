var path = require("path");
var mysql = require('mysql');
var express = require('express');
var app = express();

let multerObj=require("./multer_service");

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
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

app.post("/users", function (req, res) {
    // get post data
    let data = req.body;
    console.log(data);
    con.query("insert into user_table(userid,name,password,mobile_no,city) values(?,?,?,?,?)", [data.userid, data.name, data.password, data.mobile, data.city], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';
            if(err.code=='ER_DUP_ENTRY')
            r.message="Duplicate Userid";
            else
            r.message = err.sqlMessage;
            console.log(r);
        } else {
            console.log(result);
            r.status = 'success';
            r.message = 'Data Inserted ';
        }
        res.json(r);
    });
});

app.post("/login", function (req, res) {
    const loginData = req.body;
    console.log(loginData);
    con.query("select name,profile_pic from user_table where userid=? and password=?", [loginData.userid, loginData.password], (err, result) => {
      if (err) {
        res.json({ status: 'FAIL', token: null, uname: null });
      } else if (result && result.length > 0) {
        const name = result[0].name;
        const pic="imgs/"+result[0].profile_pic;      
        console.log("success");
        res.status(200).json({ status: 'SUCCESS', uname: name, userid:loginData.userid,profile_pic:pic });
      }
      else {
        console.log("fail");
        res.json({ status: 'FAIL', token: null, uname: null });
      }
  
    });
  });
  
  

  app.post("/users/upload_profile_photo",multerObj.single("photo"),function(req,res){
    let fon=req.file.originalname;
    console.log("File Original Name : "+fon);    
    let fn=req.file.filename;
    console.log("File Saved with Name: "+fn);
    console.log("file stored at : "+req.file.path); 
    console.log("User name="+req.body.userid);      
    let data = req.body;
    if(!req.body.userid || req.body.userid==undefined || req.body.userid=='undefined'){
      res.status(200).json({ status: 'FAIL',message:'Userid not found' });
      return;
    }
    con.query("update user_table set profile_pic=? where userid=?", [fn,data.userid], (err, result) => {
        if (err) {
          const message = err.sqlMessage;
          res.status(200).json({ status: 'FAIL',message:message });
        } else {
            const pic="imgs/"+fn;
          res.status(200).json({ status: 'SUCCESS',profile_pic:pic });
        }  
    });  
    // res.send("Done");
}
);

app.put("/users/:id", function (req, res) {
    // get data
    let data = req.body;
    let id=req.params['id'];
    console.log(data);
    con.query("update user_table set name=?,city=?,mobile_no=? where userid=?", [data.name,data.city, data.mobile_no, id], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';            
            r.message = err.sqlMessage;
            console.log(r);
        } else {
            console.log(result);
            r.status = 'success';
            r.message = 'Data Updated ';
        }
        res.json(r);
    });
});


app.get("/users", (req, res) => {
    con.query("select * from user_table", (err, result) => {
        let users=[...result];
        users.map((u)=>u.profile_pic="imgs/"+u.profile_pic);
        res.json(users);
    });
});

app.get("/users/:id", (req, res) => {
    const id = req.params['id'];
    con.query("select * from user_table where userid=?", [id], (err, result) => {
        if (err) {
            res.json(err);
        }
        if (result && result.length > 0)
        {
            const user=result[0];
            user.profile_pic="imgs/"+user.profile_pic;
            res.json(user);
        }
        else
            res.json(null);
    });
});
const server = app.listen(3000, function () {
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
