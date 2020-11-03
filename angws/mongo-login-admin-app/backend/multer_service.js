var path = require("path");
let multer=require('multer');


let disk_storage=multer.diskStorage(
   {   
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, 'public', 'imgs'));
    },
    filename: function(req,file,cb){
        const fileName = Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName); 
    }
   }
);

let multerObj=multer({storage:disk_storage});

module.exports=multerObj;