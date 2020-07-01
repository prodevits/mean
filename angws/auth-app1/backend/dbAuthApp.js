let express=require('express');
var mysql = require('mysql');
let app=express();


var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "node_db"	// mysql database name
});

con.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("connected");
    
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

const authMap=new Map();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  
app.post("/login",function(req,res){
    const loginData=req.body;
    console.log(loginData);     
    con.query("select name from user_table where userid=? and password=?",[loginData.userid,loginData.password],(err,result)=>{
        console.log(result.l);    
        if(result && result.length>0){                  
           const name=result[0].name;
           const token=loginData.userid;
            authMap.set(token,true);
            console.log("success");
            res.status(200).json({status:'SUCCESS',token:token,uname:name});      
        }
        else{
            console.log("fail");
            res.json({status:'FAIL',token:null,uname:null});
        }
    })       
});


const check_auth=(req, res, next) => {
  console.log("-----check_auth-------");
  
    console.log(authMap);  
    
    const authHeader=req.headers.authorization;
    console.log(authHeader);   
    let isAuthenticated=false;
    if(authHeader){
      const token = authHeader.split(" ")[1];  
      console.log("Request By : "+token); 
      if(authMap.get(token)){
        isAuthenticated=true;      
      }
    }
    if(isAuthenticated){
      next();  
    }else{
      res.json({ message: "Auth failed!" });
    }
    console.log("-----check_auth-------Bye");
  
}

app.use(check_auth);

app.get('/demo1', (req,res)=>{
  res.json({ message: "Demo1 Success" });
});


app.get("/logout",(req,res)=>{
    const authHeader=req.headers.authorization;
    const token = authHeader.split(" ")[1];  
    authMap.delete(token);
    res.send({ message: "Done" });
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
