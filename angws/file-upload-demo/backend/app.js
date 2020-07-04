let path=require('path');
let express=require('express');
let multer=require('multer');
let app=express();

app.use(express.static(path.join(__dirname,"public")));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers",    "Origin, X-Requested-With, Content-Type, Accept"  );  
    res.setHeader("Access-Control-Allow-Methods",    "GET, POST, PATCH, PUT, DELETE, OPTIONS"  );  
    next();
  });



var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'public','imgs'));
    },
    filename:(req,file,cb)=>{
        const fileName = file.originalname.toLowerCase().split(' ').join('-'); 	
        cb(null, fileName) ; 
    }  
});

let multerObject=multer({storage:storage});

app.post("/doReg",multerObject.single('photo'),(req,res)=>{
    const data=req.body;
    console.log("Name="+data.nm);   
    console.log("Age="+data.age);   
    const file=req.file;
    const uploadedFn=file.originalname;
    const savedFn=file.filename;
    const contentType=file.mimetype;
    const size=file.size;

    console.log("Uploaded File Name="+uploadedFn);
    console.log("Saved File Name="+savedFn);
    console.log("Type="+contentType);
    console.log("Size="+size);

        
    res.send("Done");
});

app.listen(3000,()=>{
    console.log("server is ready on port : 3000 ");    
});