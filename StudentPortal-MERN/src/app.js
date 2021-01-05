const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");
const Register= require("./models/registers");
require("./db/conn");

const port="3000";
const staticPath=path.join(__dirname,"./public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


//template engine route
// app.get("/",(req,res)=>{
//     res.render("index");
// });
app.get("/",(req,res)=>{
    res.render("register");
});
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/register", async(req,res)=>{
    try{
        const password=req.body.password;    
        const cpassword=req.body.password_c;
        if(password===cpassword)
        {
            const registerUser=new Register({
                name:req.body.name,
                   email:req.body.email,
                  password:req.body.password,
                  age:req.body.age
            })
            const registerData=await registerUser.save();
            res.status(201).render(registerUser);
        }
        else
        {
            alert("Password do not match")
        }
        
    }
    catch(error)
    {
        res.status(400).send(error);
    }
})

app.post("/login", async(req,res)=>{
    try{
        const loginemail=req.body.email;    
        const loginpassword=req.body.password;
        const checkEmail=await Register.findOne({email:loginemail})
        const userData=await Register.findOne();
        if(checkEmail.password === loginpassword)
        {
            res.status(201).send("Login Successfully");            
        }
        else
        {
            alert("Invalid Email")
        }
        
    }
    catch(error)
    {
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log("Listening to port 3000")
});