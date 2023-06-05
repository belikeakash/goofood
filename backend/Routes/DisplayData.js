const express = require('express');
const router = express.Router()

router.post('/foodData', (req,res)=> {
    try {
        //console.log([global.food_items,global.foodCategory]);
        res.send([global.food_items,global.foodCategory])
    } catch (error) {
        console.log(error.msg);
        res.send('Server Error')
    }
})
router.post('/foodData2', (req,res)=> {
    try {
        res.send([global.food_items2,global.foodCategory])
    } catch (error) {
        console.log(error.msg);
        res.send('Server Error')
    }
})

module.exports = router;