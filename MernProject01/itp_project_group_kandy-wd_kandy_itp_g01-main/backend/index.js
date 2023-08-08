const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const session = require("express-session")
 


//image uploading
const multer = require('multer')
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require("tls");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/src/Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb("Give proper file format")
    }
})



//database connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "kdkc2000",
    database: "onlinestore"
});


//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/Images', express.static('../frontend/src/Images'));

// Cookies and sessions 

app.use(cookieParser());

app.use(session({
     key:"id",
     secret:"subscribe",
     resave:"false",
     saveUninitialized:"false",
     cookie:{
           expires:60*60*24,


}

}));


//Stok management- IT20633622
//insert products

app.post("/stock/insert",upload.single("Image"), (req, res) => {

    const ProductName = req.body.ProductName;
    const Category = req.body.Category;
    const Price = req.body.Price;
    const Quantity = req.body.Quantity;
    //const Image = req.file.path;

    const sqlInsert = 
        "INSERT INTO stock (ProductName, Category, Price, Quantity) VALUES (?,?,?,?)";
        db.query(sqlInsert,[ProductName, Category, Price, Quantity], 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});


//read * data --- stock table
app.get("/stock/get", (req, res) => {
    const sqlGet = "SELECT * FROM stock Order by Category";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});



// ---- Categorization ----
//Hand Sanitizer
app.get("/stock/get/handsanitizer", ( req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Hand Sanitizer'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//AirFreshner
app.get("/stock/get/airfreshner", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Air Freshner'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//Car care
app.get("/stock/get/carcare", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Car Care'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//Dish Washing
app.get("/stock/get/dishwashing", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Dish Washing'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//Fabric Care
app.get("/stock/get/fabriccare", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Fabric Care'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//Hand Sanitizer
app.get("/stock/get/handsanitizer", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Hand Sanitizer'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//Surface Care
app.get("/stock/get/surfaceCare", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Surface Care'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//hand wash
app.get("/stock/get/handwash", (req, res) => {
    const sqlGet = "SELECT * FROM stock WHERE Category = 'Hand Wash'";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//delete record
app.delete("/stock/delete/:PID", (req, res) => {
    const id = req.params.PID
    const sqlDelete = 
        "DELETE FROM stock WHERE PID = ?";

        db.query(sqlDelete, id, (err, result) => {
            if(err){
                console.log(err);
            }
        })
})


//read a data
app.get("/stock/get/:PID", (req, res) => {
    const id = req.params.PID;
    const sqlGet = "SELECT * FROM stock WHERE PID = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//update a data
app.put("/stock/update/:PID", (req, res) => {
    const id = req.params.PID;
    const {ProductName, Category, Price, Quantity, Status} = req.body;

    const sqlUpdate = "UPDATE stock SET ProductName = ?, Category = ?, Price = ?, Quantity = ?, Status = ? WHERE PID = ?";
    
    db.query(sqlUpdate, [ProductName, Category, Price, Quantity, Status, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//read a data ---- for dailysale
app.get("/dailysale/get/:PID", (req, res) => {
    const id = req.params.PID;
    const sqlGetdata = "SELECT PID,ProductName FROM stock WHERE PID = ?";
    db.query(sqlGetdata, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//insert daily sales

app.post("/dailysales/insert/:PID", (req, res) => {

    const id = req.params.PID;

    const sqlInsert = 
    "INSERT INTO dailysales (PID, ProductName) SELECT PID, ProductName FROM stock WHERE PID = ?"
        db.query(sqlInsert,id, 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});

//insert quantity
app.put("/dailysale/update/:PID", (req, res) => {

    const id = req.params.PID;
    //const Quantity = 4;
    const Quantity = req.body.Quantity;
    //const date = curdate();
    const date_ob = new Date();
    const date = (date_ob.getDate());
    const month = ("0" + (date_ob.getMonth()+1)).slice(-2);
    const year = (date_ob.getFullYear());
    const SalesDate = (year + "-" + month + "-" + date);

    const sqlInsertQty = 
        "UPDATE dailysales SET Quantity = ? WHERE PID = ? AND date(SalesDate) = ?";
        console.log(id)
        console.log(SalesDate)
        console.log(Quantity)
        db.query(sqlInsertQty,[Quantity, id, SalesDate],
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});

//insert sales
app.put("/dailysale/updateSale/:PID", (req, res) => {

    const id = req.params.PID;
    //const Quantity = 4;
    const Quantity = req.body.Quantity;
    //const date = curdate();
    const date_ob = new Date();
    const date = (date_ob.getDate());
    const month = ("0" + (date_ob.getMonth()+1)).slice(-2);
    const year = (date_ob.getFullYear());
    const SalesDate = (year + "-" + month + "-" + date);

    const sqlInsertSales = 
        "UPDATE dailysales SET Sale = Quantity * (SELECT Price FROM stock WHERE PID = ?) WHERE PID = ? AND date(SalesDate) = ?;"
        console.log(id)
        db.query(sqlInsertSales,[id, id, SalesDate],
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});


//insert --- stock_delete items table
app.post("/stock_deleted/insert/:PID", (req, res) => {
    const id = req.params.PID;

    const sqlInsert = 
       // "INSERT INTO stock (ProductName, Category, Price, Quantity) VALUES (?,?,?,?)";
        "INSERT INTO stock_deleted (PID_deleted, ProductName, Category, Price, Quantity, Status) SELECT PID, ProductName, Category, Price, Quantity, Status FROM stock WHERE PID = ?"
        db.query(sqlInsert,id,
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});


//Report
//get the sales of current day
app.get("/sales/get", (req, res) => {

    const date_ob = new Date();
    const date = (date_ob.getDate());
    const month = ("0" + (date_ob.getMonth()+1)).slice(-2);
    const year = (date_ob.getFullYear());
    const SalesDate = (year + "-" + month + "-" + date);

    const sqlGet = "SELECT * FROM dailysales WHERE date(SalesDate) = ?";
    console.log("get")
    db.query(sqlGet,SalesDate,
        (error, result) => {
        res.send(result);
        console.log(result)
    });
});

//calculate total sale
app.get("/sales/sum", (req, res) => {

    const date_ob = new Date();
    const date = (date_ob.getDate());
    const month = ("0" + (date_ob.getMonth()+1)).slice(-2);
    const year = (date_ob.getFullYear());
    const SalesDate = (year + "-" + month + "-" + date);

    const sqlSum = "SELECT SUM(Sale) AS Total_Sale, MAX(Sale) AS Max_Sale, MIN(Sale) As Min_Sale FROM dailysales WHERE date(SalesDate) = ?";
    
    db.query(sqlSum,SalesDate,
        (error, result) => {
        res.send(result);
        console.log(result);
    });

});


//Automatic status update
app.put("/stock/updateStatus", (req, res) => {
    //const id = req.params.PID;
    const sqlUpdateStatus = "UPDATE stock SET Status = 'OutofStock' WHERE Quantity <= 10";
    
    db.query(sqlUpdateStatus, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//Automatic status update
app.put("/stock/updateStatusPlus", (req, res) => {
    //const id = req.params.PID;
    const sqlUpdateStatus = "UPDATE stock SET Status = 'In Stock' WHERE Quantity > 10";
    
    db.query(sqlUpdateStatus, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//update quantity with the add to cart button
app.put("/updateQty/update/:PID", (req, res) => {
    const pid = req.params.PID;
   // console.log(name);
    const sqlUpdate = "UPDATE stock set Quantity = Quantity - 1 WHERE PID = ?";
    
    db.query(sqlUpdate, pid, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});



//Shopping Cart - IT20622800


//insert products to shopping cart

app.post("/shopping_cart/insert/:PID", (req, res) => {

    
    const id = req.params.PID;

    const sqlInsert = 
        "INSERT INTO shopping_cart (ItemName, Price) SELECT ProductName, Price FROM stock WHERE PID=?";
        db.query(sqlInsert,id, 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});

//read * data
app.get("/shopping_cart/get", (req, res) => {
    const sqlGet = "SELECT * FROM shopping_cart";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// insert items to Wish List

app.post("/wishlist/insert/:PID", (req, res) => {

    
    const id = req.params.PID;

    const sqlInsert = 
        "INSERT INTO wishlist (WitemName, WitemPrice) SELECT ProductName, Price FROM stock WHERE PID=?";
        db.query(sqlInsert,id, 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});

//read * data
app.get("/wishlist/get", (req, res) => {
    const sqlGet = "SELECT * FROM wishlist";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

/*
// add items to shopping cart from wish list

app.post("/shopping_cart/insert/:PID", (req, res) => {

    
    const id = req.params.PID;

    const sqlInsert = 
        "INSERT INTO shopping_cart (ItemName, Price) SELECT ProductName, Price FROM stock WHERE PID=?";
        db.query(sqlInsert,id, 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});*/


// add items to shopping cart from wish list

app.post("/cart/insert/:WID", (req, res) => {

    
    const id = req.params.WID;

    const sqlInsert = 
        "INSERT INTO shopping_cart (ItemName, Price) SELECT WitemName, WitemPrice FROM wishlist WHERE WID=?";
        db.query(sqlInsert,id, 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});


//read * data
app.get("/shopping_cart/get", (req, res) => {
    const sqlGet = "SELECT * FROM shopping_cart";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//delete record
app.delete("/shopping_cart/delete/:ID", (req, res) => {
    const id = req.params.ID
    const sqlDelete = 
        "DELETE FROM shopping_cart WHERE ID = ?";

        db.query(sqlDelete, id, (err, result) => {
            if(err){
                console.log(err);
            }
        })
})


//read a data
app.get("/shopping_cart/get/", (req, res) => {
    const id = req.params.ID;
    const sqlGet = "SELECT * FROM shopping_cart WHERE ID = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//update Shopping cart Quantity
//Increase Quantity
app.put("/shopping_cart/update/:ID", (req, res) => {
    const id = req.params.ID;
    //const Quantity = req.body.Quantity;
    console.log(id)
    const sqlUpdate = "UPDATE shopping_cart set Quantity = Quantity + 1 WHERE ID = ?";
    
    db.query(sqlUpdate, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//Decrease Quantity
app.put("/shopping_cart/updatemin/:ID", (req, res) => {
    const id = req.params.ID;
    //const Quantity = req.body.Quantity;
    console.log(id)
    const sqlUpdate = "UPDATE shopping_cart set Quantity = Quantity - 1 WHERE ID = ?";
    
    db.query(sqlUpdate, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


app.put("/productQuantity/update/:ItemName", (req, res) => {
    const name = req.params.ItemName;
    console.log(name);
    const sqlUpdate = "UPDATE stock set Quantity = Quantity - 1 WHERE ProductName = ?";
    
    db.query(sqlUpdate, name, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//Decrease Quantity
app.put("/productQuantity/updatemin/:ItemName", (req, res) => {
    const name = req.params.ItemName;
    
    const sqlUpdate = "UPDATE stock set Quantity = Quantity + 1 WHERE ProductName = ?";
    
    db.query(sqlUpdate, name, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//decrease quantity with the wish list
app.put("/productQuantityWish/update/:WitemName", (req, res) => {
    const name = req.params.WitemName;
    console.log(name);
    const sqlUpdate = "UPDATE stock set Quantity = Quantity - 1 WHERE ProductName = ?";
    
    db.query(sqlUpdate, name, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//insert extra expences

app.post("/extra_expences/insert", (req, res) => {

    const EDate = req.body.EDate;
    const ECategory = req.body.ECategory;
    const EAmount = req.body.EAmount;
    
    const sqlInsert = 
        "INSERT INTO extra_expences (EDate, ECategory, EAmount) VALUES (?,?,?)";
        db.query(sqlInsert,[EDate, ECategory, EAmount], 
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
});


//read * data --- extra expences table
app.get("/extra_expences/get", (req, res) => {
    const sqlGet = "SELECT * FROM extra_expences";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});
/*
//update a data
app.put("/extra_expences/update/:ExID", (req, res) => {
    const id = req.params.ExID;
    const {ECategory, EAmount} = req.body;

    const sqlUpdate = "UPDATE extra_expences set ECategory=?, EAmount = ? WHERE ExID = ?";
    
    db.query(sqlUpdate, [ ECategory, EAmount, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//read a data
app.get("/extra_expences/update/:ExID", (req, res) => {
    const id = req.params.ExID;
    const {ECategory, EAmount} = req.body;

    const sqlUpdate = "UPDATE extra_expences set ECategory=?, EAmount = ? WHERE ExID = ?"
    db.query(sqlUpdate, [ ECategory, EAmount, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});*/

//update a data
app.put("/extra_expences/update/:ExID", (req, res) => {
    const id = req.params.ExID;
    const {ECategory, EAmount} = req.body;
    const sqlUpdate = "UPDATE extra_expences set ECategory=?, EAmount = ? WHERE ExID = ?";
    
    db.query(sqlUpdate, [ ECategory, EAmount, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });});
    
//read a data
app.get("/extra_expences/get/:ExID", (req, res) => {
    const id = req.params.ExID;
    const sqlGet = "SELECT * FROM extra_expences WHERE ExID = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });});

//delete record
app.delete("/extra_expences/delete/:ExID", (req, res) => {
    const id = req.params.ExID
    const sqlDelete = 
        "DELETE FROM extra_expences WHERE ExID = ?";

        db.query(sqlDelete, id, (err, result) => {
            if(err){
                console.log(err);
            }
        })
})


//read a data
app.get("/extra_expences/get/", (req, res) => {
    const id = req.params.ID;
    const sqlGet = "SELECT * FROM extra_expences WHERE ExID = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//get order history
app.get("/orderHis/get",(req,res)=> {
    const sqlGetHistory = "select o.OrderId,o.OrderDate,o.Total,u.firstName from onlinestore.order o, onlinestore.user u Where o.CusId = u.id and u.id = 1";
    db.query(sqlGetHistory,(err,result)=> {
        res.send(result);
        console.log(err);
    });
});


//get Extra Expences Report
app.get("/expenRe/get", (req,res)=> {
    const sqlGetExRepo = "SELECT sum(EAmount)as ETotal FROM onlinestore.extra_expences";
    db.query(sqlGetExRepo, (error, result) => {
        res.send(result);
        console.log(error);
    });
});


//Extra Expenes Report Table
app.get("/repTable/get", (req,res)=> {
    const sqlGetTable = "SELECT EDate,sum(EAmount)as ETotal FROM onlinestore.extra_expences group by EDate";
    db.query(sqlGetTable, (error, result) => {
        res.send(result);
        console.log(error);
    });
});



//Inquiry handling and Review management-IT20617196

//insert inquiry
app.post("/inquiry/insert",(req,res)=>{

   
    const Date =req.body.Date; 
    const Name =req.body.Name; 
    const Email =req.body.Email;
    const orderID =req.body.orderID;
    const ItemName =req.body.ItemName; 
    const TypeOfInquiry =req.body.TypeOfInquiry; 
    const Inquiry =req.body.Inquiry;
    const Status =req.body.Status;
    

   const sqlInsert="INSERT INTO inquiry (Date,Name,Email,orderID,ItemName,TypeOfInquiry,Inquiry) VALUES (?,?,?,?,?,?,?)" 
  db.query(sqlInsert,[Date,Name,Email,orderID,ItemName,TypeOfInquiry,Inquiry],(err,result)=> {
    if(err){
        console.log(err);
    }else{
        res.send("Value inserted");
    }
 
});
});




//delete inquiry
app.delete("/inquiry/delete/:InquiryID",(req,res)=>{
    const id=req.params.InquiryID;
    const sqlDelete="DELETE FROM inquiry WHERE InquiryID=?";
    db.query(sqlDelete,id,(error,result)=>{
        if(error){
            console.log(error);
        }
    });
});


//read inquiry
app.get("/inquiry/get/:InquiryID",(req,res)=>{
    const InquiryID=req.params.InquiryID
    const sqlGet="SELECT * FROM inquiry WHERE InquiryID=?";
    db.query(sqlGet,InquiryID,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//update inquiry
app.put("/inquiry/update/:InquiryID",(req,res)=>{
    const InquiryID=req.params.InquiryID;
    //const Status =req.body.Status;
    const sqlUpdate="UPDATE inquiry SET Status = 'Replied' WHERE InquiryID = ?";
    console.log("update");
    db.query(sqlUpdate,[InquiryID],(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

// deleted inquries
app.post("/Deleted_Inquiry/insert/:InquiryID", (req, res) => {
    const id = req.params.InquiryID;

    const sqlInsert = 
      
        "INSERT INTO Deleted_Inquiry (InquiryID, Date,Name,Email,orderID,ItemName,TypeOfInquiry,Inquiry,Status) SELECT InquiryID, Date,Name,Email,orderID,ItemName,TypeOfInquiry,Inquiry,Status FROM inquiry WHERE InquiryID = ?"
        db.query(sqlInsert,id,
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Value inserted");
                }
        });
})




//get all values from inquiry
app.get("/inquiry/get",(req,res)=> {
    const sqlGet = "SELECT * FROM inquiry";
    db.query(sqlGet,(err,result) =>{
        res.send(result)
    });
});


//get all values from deleted inquries
app.get("/inquiry/delete/get",(req,res)=> {
    const sqlGet = "SELECT * FROM Deleted_Inquiry";
    db.query(sqlGet,(err,result) =>{
        res.send(result)
    });
});

//get total count of the deleted inquries
app.get("/deleted_inquiry/gettotal",(req,res) => {


    const sqlSelect = "SELECT count(InquiryID) as deleted_inquiry FROM onlinestore.deleted_inquiry";

    db.query(sqlSelect,(err,result) => {
        res.send(result);
        console.log(result);
        console.log(err);
    });
});






//insert review
app.post('/review',upload.single("Image"), (req, res)=>{

    const review =req.body.review; 
    const Image = req.file.path;

    
   const sqlInsert="INSERT INTO review (Image,review) VALUES (?,?)" 
   db.query(sqlInsert,[Image,review],(err,result)=> {
    if(err){
        console.log(err);
    }else{
        res.send("Value inserted");
    }
   });
})



//read review values
app.get("/review/get",(req,res)=> {
    const sqlGet = "SELECT * FROM review";
    db.query(sqlGet,(err,result) =>{
        res.send(result)
    });
});












//Order handling and delivery management - IT20609030

//view all info of a perticular order
app.get("/order/viewalldata/:OrderId", (req, res) => {
    const id = req.params.OrderId ;
    const sqlGetall = "select * from onlinestore.deliverynew d , onlinestore.order o , onlinestore.user u where  d.OrderId = o.OrderId and o.CusId = u.id and d.OrderId = ?" ;

    db.query(sqlGetall, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//delete record
app.delete("/order/delete/:OrderId", (req, res) => {
    const id = req.params.OrderId
    const sqlDelete = "DELETE FROM deliverynew WHERE OrderId = ?";
    db.query(sqlDelete, id, (err,result) => {
        if(err){
            console.log(err);
        }
    })
    
})

//update a data
app.put("/order/update/:OrderId", (req, res) => {
    const id = req.params.OrderId;
    const {DeliveryId, OptionalEmail, Address, PostalCode, Area, SpecialNote, DeliveryStatus, PaymentMethod, BankTransStatus} = req.body;

    const sqlUpdate = "UPDATE deliverynew SET DeliveryId = ?, OptionalEmail = ?, Address = ?, PostalCode = ?, Area = ?, SpecialNote = ?, DeliveryStatus = ?, PaymentMethod = ?, BankTransStatus = ? WHERE OrderId = ?";

    db.query(sqlUpdate, [DeliveryId, OptionalEmail, Address, PostalCode, Area, SpecialNote, DeliveryStatus, PaymentMethod, BankTransStatus, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result); 
    });
});

//read one data
app.get("/order/getdata/:OrderId", (req, res) => {
    const OrderId = req.params.OrderId;
    const sqlGet = "SELECT * FROM deliverynew WHERE OrderId = ?";
    db.query(sqlGet, OrderId, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
        //console.log(result);
    });
});

//get all delivery details
app.get("/order/getalldelivery",(req,res) => {
    const sqlSelect = "select * from deliverynew";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
        console.log(err);
        
    } );
});

//get completed order details
app.get("/order/getcompletedorders", (req,res) => {
    const sqlSelect = "select * from deliverynew where DeliveryStatus = 'Complete'";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
        console.log(err);
    });
});

//get canceled order details
app.get("/order/getcanceledorders", (req,res) => {
    const sqlSelect = "select * from deliverynew where DeliveryStatus = 'Cancel'";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
        console.log(err);
    });
});

//get Processing order details
app.get("/order/getprocessingorders", (req,res) => {
    const sqlSelect = "select * from deliverynew where DeliveryStatus = 'Processing'";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
        console.log(err);
    });
});

//get last record of order table
app.get("/order/getorderid",(req,res) => {
    const sqlSelectid = "select * from onlinestore.order o, onlinestore.user u Where o.CusId = u.id  ORDER BY OrderId DESC LIMIT 1";
    db.query(sqlSelectid,(err,result) => {
        res.send(result);
        console.log(err);
    });
});

//get Order report
app.get("/order/getreport",(req,res) => {

    const todaysDate = new Date();
    const currentYear = todaysDate.getFullYear();
    const currentMonth = ("0"+(todaysDate.getMonth()+1));
    const ReportDate = (currentYear + "-" + currentMonth + "-"+"%");
    //const ReportDate = "2022-04-%"
    console.log(ReportDate);

    const sqlSelect = "select d.DeliveryStatus, count(*) as OrStatusCount from onlinestore.order o , onlinestore.deliverynew d where o.OrderId = d.OrderId and date(o.OrderDate) like ? group by d.DeliveryStatus";

    db.query(sqlSelect,ReportDate,(err,result) => {
        res.send(result);
        console.log(result);
        console.log(err);
    });
});

//get total number of orders in current month
app.get("/order/gettotalorcount",(req,res) => {

    const todaysDate = new Date();
    const currentYear = todaysDate.getFullYear();
    const currentMonth = ("0"+(todaysDate.getMonth()+1));
    const ReportDate = (currentYear + "-" + currentMonth + "-"+"%");
    //const ReportDate = "2022-04-%"
    console.log(ReportDate);

    const sqlSelect = "select count(*) as TotalCount from onlinestore.order o , onlinestore.deliverynew d where o.OrderId = d.OrderId and date(o.OrderDate) like ?";

    db.query(sqlSelect,ReportDate,(err,result) => {
        res.send(result);
        console.log(result);
        console.log(err);
    });
});

//get delivery details and display to the customer
app.get("/order/getdeliverydetails", (req, res) => {

    const sqlSelect = "select * from onlinestore.deliverynew d , onlinestore.order o , onlinestore.user u where  d.OrderId = o.OrderId and o.CusId = u.id ORDER BY o.OrderId DESC LIMIT 1";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
        console.log(err);
        
    } );
});

//insert data to order table
app.post("/order/insertordetails", (req,res) => {
    const Total = req.body.Total;
    const CusId = 1;

    console.log(Total);
    console.log(CusId);

    const sqlOrderInsert = "INSERT INTO onlinestore.order(Total) select sum(Price*Quantity) as Total from onlinestore.shopping_cart";
    db.query(sqlOrderInsert,(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Sucessfully Inserted");
        }
    })
});

//insert
app.post("/order/insert",(req,res) => {

    const OrderId = req.body.OrderId;
    const OptionalEmail = req.body.OptionalEmail;
    const Address = req.body.Address;
    const PostalCode = req.body.PostalCode;
    const Area = req.body.Area;
    const SpecialNote = req.body.SpecialNote;
    const PaymentMethod = req.body.PaymentMethod;

    const sqlInsert = "INSERT INTO deliverynew(OrderId,OptionalEmail,Address,PostalCode,Area,SpecialNote,PaymentMethod) VALUES (?,?,?,?,?,?,?)"
    db.query(sqlInsert,[OrderId,OptionalEmail,Address,PostalCode,Area,SpecialNote,PaymentMethod],(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send("Inserted");
        }
    });
});


//delete shopping cart with confirm order
//delete record
app.delete("/scart/delete", (req, res) => {
    
    const sqlDelete = "DELETE FROM shopping_cart";
    db.query(sqlDelete, (err,result) => {
        if(err){
            console.log(err);
        }
    })
    
})



//Supplier managment - IT20298180

app.post("/supplier/insert",(req,res)=>{

   
    const SupplierID =req.body.SupplierID; 
    const Suppliername =req.body.SupplierName; 
    const Companyname =req.body.CompanyName;
    const Itemname =req.body.ItemName;
    const NumberofItems =req.body.NumberOfItem; 
    const Email =req.body.Email;
    const Contactnumber =req.body.ContactNumber;
    

   const sqlInsert="INSERT INTO supplier (SupplierName,CompanyName,ItemName,NumberOfItem,Email,ContactNumber) VALUES (?,?,?,?,?,?)" 
  db.query(sqlInsert,[Suppliername,Companyname,Itemname,NumberofItems,Email,Contactnumber],(err,result)=> {
    if(err){
        console.log(err);
    }
    else{
        res.send("Inserted");
    }  
 
});
});

app.get("/supplier/get", (req, res) => {
    const sqlGet = "SELECT * FROM supplier";
    db.query(sqlGet, (error, result) => {
         res.send(result);
         });});

         app.delete("/supplier/delete/:SupplierID", (req, res) => {

            const id = req.params.SupplierID
        
            const sqlDelete =
        
                "DELETE FROM supplier WHERE SupplierID = ?";
        
        
        
                db.query(sqlDelete, id, (err, result) => {
        
                    if(err){
        
                        console.log(err);
        
                    }
        
                })
        
        })

app.get("/supplier/get/:SupplierID",(req,res)=>{
    const SupplierID=req.params.SupplierID
    const sqlGet="SELECT * FROM supplier WHERE SupplierID=?";
    db.query(sqlGet,SupplierID,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//update a data

app.put("/supplier/update/:SupplierID", (req, res) => {

    const id = req.params.SupplierID;

    const {SupplierName, CompanyName, ItemName, NumberOfItem, Email, ContactNumber} = req.body;



    const sqlUpdate = "UPDATE supplier SET SupplierName = ?, CompanyName = ?, ItemName = ?, NumberOfItem = ?, Email = ?, ContactNumber = ? WHERE SupplierID = ?";

   

    db.query(sqlUpdate, [SupplierName, CompanyName, ItemName, NumberOfItem, Email, ContactNumber, id], (error, result) => {

        if(error){

            console.log(error);

        }

        res.send(result);

    });

});


// Human Resource Management - IT20279066

 // Login session

app.get("/login",(req,res) =>{
    if (req.session.user){
             res.send({loggedIn:true,user:req.session.user})
}else{
            res.send({loggedIn:false}); 

}
});



// get all the user details

app.get("/get",(req,res) =>{
    const sqlSelect ="Select * from user";
    db.query(sqlSelect,(err,result)=> {
        res.send(result);
    });
});



// insert customer details

app.post("/insert",(req,res) =>{

     
    const firstName  = req.body.firstName
    const lastName = req.body.lastName
    const phone = req.body.phone
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
     
    const sqlInsert = "INSERT INTO user(firstName, lastName, phone, email,password,confirmpassword) VALUES ( ?, ?, ?, ?, ?,?)";
    db.query(sqlInsert,[firstName,lastName,phone,email,password,confirmpassword],(err,result)=> {
    console.log(err);

    })

});
     
     
  // add Employee Details
  app.post("/add",(req,res) =>{

     
    const firstName  = req.body.firstName
    const lastName = req.body.lastName
    const phone = req.body.phone
    const email = req.body.email
    const password = req.body.password
     
    const sqlInsert = "INSERT INTO employee(firstName, lastName, phone, email,password) VALUES ( ?, ?, ?, ?, ?)";
    db.query(sqlInsert,[firstName,lastName,phone,email,password],(err,result)=> {
    console.log(err);

    })

});

//get all the employee details
app.get("/employee",(req,res) =>{
  const sqlSelect ="Select * from employee";
  db.query(sqlSelect,(err,result)=> {
      res.send(result);
  });
});

 
 
 // Backend validation - validate username and password and get login status   
 app.post("/login",(req,res) =>{

    const email = req.body.email;
    const password = req.body.password;
   
     db.query(
         "SELECT * FROM user WHERE email =? AND password=?",
          [email,password],
          (err,result)=> {
            if (err){
           res.send({err:err}); 
         }
             if (result.length > 0){
               req.session.user = result
               console.log(req.session.user);
               res.send(result);
   
         }else {
              res.send({message: "Wrong Username or Password" }); 
         
      }
    }

  
  )
});

// admin 


app.get("/getadmin",(req,res) =>{
  const sqlSelect ="Select * from admin";
  db.query(sqlSelect,(err,result)=> {
      res.send(result);
  });
});

// delete customer details
app.delete("/delete/:id",(req,res)=>{
  const id =req.params.id;
  const sqlDelete=
  "Delete from user where id=?";

   db.query(sqlDelete,id,(err,result)=> {
   if(err) {
   console.log(err);
}
})  
})

//delete employee
app.delete("/delete/emp/:id",(req,res)=>{
  const id =req.params.id;
  const sqlDelete=
  "Delete from employee where id=?";

   db.query(sqlDelete,id,(err,result)=> {
   if(err) {
   console.log(err);
}
})  
})
// update customer

app.get("/get/:id",(req,res) =>{
  const id =req.params.id;
  const sqlGet ="Select * from user where id=?";
  db.query(sqlGet,id,(err,result)=> {
    if(err) {
      console.log(err);
   }
      res.send(result);
  });
});

app.put("/update/:id",(req,res) =>{
    const id =req.params.id;
    const firstName  = req.body.firstName
    const lastName = req.body.lastName
    const phone = req.body.phone
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    
        
  
    const sqlUpdate ="Update user set firstName=?,lastName=?,phone=?,email=?,password=?,confirmpassword=? where id=? ";
    db.query(sqlUpdate,[firstName,lastName,phone,email,password,confirmpassword,id],(err,result)=> {
      if(err) {
        console.log(err);
     }
        res.send(result);
    });
  });


// update employee 
app.get("/get/Emp/:id",(req,res) =>{
  const id =req.params.id;
  const sqlGet ="Select * from employee where id=?";
  db.query(sqlGet,id,(err,result)=> {
    if(err) {
      console.log(err);
   }
      res.send(result);
  });
});

app.put("/update/emp/:id",(req,res) =>{
  const id =req.params.id;
  const firstName  = req.body.firstName
  const lastName = req.body.lastName
  const phone = req.body.phone
  const email = req.body.email
  const password = req.body.password
      

  const sqlUpdate ="Update employee set firstName=?,lastName=?,phone=?,email=?,password=? where id=? ";
  db.query(sqlUpdate,[firstName,lastName,phone,email,password,id],(err,result)=> {
    if(err) {
      console.log(err);
   }
      res.send(result);
  });
});



// get profile details
app.get("/get/data",(req,res) =>{
  const email=req.params.email;
  const sqlGet ="Select * from user where email=?";
  db.query(sqlGet,email,(err,result)=> {
    if(err) {
      console.log(err);
   }
      res.send(result);
  });
});

// insert report

app.post("/add/report",(req,res) =>{

    const month = req.body.month
    const firstName  = req.body.firstName
    const lastName = req.body.lastName
    const work= req.body.work
     
    const sqlInsert = "INSERT INTO empreport(month,firstName, lastName, work) VALUES ( ?, ?, ?, ?)";
    db.query(sqlInsert,[month,firstName,lastName,work],(err,result)=> {
    console.log(err);
  
    })
  
  });
  
  // print  report
  app.get("/report",(req,res) =>{
    const sqlSelect ="Select * from empreport";
    db.query(sqlSelect,(err,result)=> {
        res.send(result);
    });
  });





app.listen(5000, () => {
    console.log("Server is running on port 5000");
})