const express = require("express");
const product= require('./routes/product.js');
const auth= require('./routes/auth.js');
const post= require('./routes/post.js');
const app = express();





app.use('/product', product);
app.use('/auth', auth);
app.use('/post', post);

app.get("/", (req, res)=>{
   res.json({message: "hello world"})
});
app.get("/tamplate", (req, res)=>{
    res.sendFile(__dirname+'/index.html');
 });
app.listen(5000, () =>{
    console.log("serveur started on port 5000");
})