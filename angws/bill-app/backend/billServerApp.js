var mysql = require('mysql');
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
});

var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers",    "Origin, X-Requested-With, Content-Type, Accept"  );  
    res.setHeader("Access-Control-Allow-Methods",    "GET, POST, PATCH, PUT, DELETE, OPTIONS"  );  
    next();
  });

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.post("/bill",(req,res)=>{
    const billData=req.body;
    console.log(billData);
    const q1="insert into bill_master(cname,mobile_no,bill_date,bill_amount) values(?,?,?,?)";
    const d1=[billData.customerName,billData.contact,billData.billDate,billData.billAmount];
    const q2="insert into bill_items(sno,name,price,qty,bill_no) values ?";
    con.query(q1,d1,(err,result)=>{
        if (err){
            res.send({status:'FAIL',message:err.sqlMessage});
        }else{
            const billNo=result.insertId;
            const d2=[];
            for(let item of billData.items){
               d2.push([item.itemNo,item.name,item.price,item.qty,billNo]); 
                }
                con.query(q2,[d2],(err,result)=>{
                    if(err){
                        res.send({status:'FAIL',message:err.sqlMessage});
                    }
                    console.log(result.affectedRows);
                    res.send({status:"SUCCESS",message:{billno:billNo}});
                });
            }        
    })  
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
