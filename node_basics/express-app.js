const express = require("express");

const app = express();

app.get("/",(req,res)=>{ 
    res.send("Home Page");
});

app.get("/contact",(req,res)=>{
    res.json({
    name: "Y",
    age: 20
  });
});

app.get("/about",(req,res)=>{
    res.send("About page");
});


app.listen(3000);

