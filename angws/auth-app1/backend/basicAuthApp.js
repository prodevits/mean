let express=require('express');
let app=express();

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
    if(loginData.userid=='amit' && loginData.password=='aaaa'){        
        authMap.set(loginData.userid,true);
        console.log("success");
        res.status(200).json({status:'SUCCESS',token:loginData.userid,uname:"Amit"});
    }
    else{
        console.log("fail");
        res.json({status:'FAIL',token:null,uname:null});
    }   
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

app.listen(3000,function(){
    console.log('listening on 3000');
});
