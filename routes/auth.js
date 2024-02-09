const express=require('express');
const router=express.Router();

router.get('/login', (req, res)=> {
    res.send('<form> <label>nom</label><input type="text"><br><br><label>prenom</label><input type="password"><br><br><button type="submit">login</button></form>');
    
});

router.get("/register", (req, res)=>{
    res.sendFile(__dirname+'/register.html');
 });

module.exports = router;