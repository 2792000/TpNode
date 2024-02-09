const express=require('express');
const router=express.Router();
const arr=[{id:1 , name:"amine", email:"amine@gamil.com", adress:"bizert"}
,{id:2 , name:"mohamed", email:"mohamed@gamil.com", adress:"bizert"}
,{id:3 , name:"hlel", email:"hlel@gamil.com", adress:"bizert"}];
router.get('/all', (req, res)=> {
    res.send(arr)
});
router.get('/:id', (req, res)=> {
    const id = req.params.id;
    const entry = arr.find(item => item.id === parseInt(id));
    if (entry) {
        res.send(entry);
    } else {
        res.status(404).send("Entry not found");
    }
});
module.exports = router;