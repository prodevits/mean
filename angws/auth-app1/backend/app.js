let express=require('express');
var jwt=require('jsonwebtoken')
let app=express();
const router=express.Router();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

const map=new Map();
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
        const token=jwt.sign({userid:loginData.userid},"my_secret",{expiresIn:'1h'})
        map.set(loginData.userid,token);
        console.log("success");
        res.status(200).json({token:token});
    }
    else{
        console.log("fail");
        res.status(401).json({message:'FAIL'});
    }   

});

const check_auth=(req, res, next) => {
    if (req.method=='GET') {
try {
    console.log(req.headers.authorization);        
    const token = req.headers.authorization.split(" ")[1];
    const data=jwt.verify(token, "my_secret");
    console.log(data);        
    console.log("Request By : "+data.userid);        
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
}else{
    next();
}
}

router.get("",check_auth,function(req,res){      
    console.log("--->>--");     
        res.status(200).json({ message: "Hello12223" });    
});

app.use('/hello', router)

app.listen(3000,function(){
    console.log('listening on 3000');
    });
