const express=require('express');
const router=express.Router();

router.get('/all', (req, res)=> {
    res.send([{id:1 , name:"product 1"},{id:2 , name:"product 2"}])
});

router.get('/one', (req, res)=> {
    res.send({id:1 , name:"product 1"})
});

module.exports = router;