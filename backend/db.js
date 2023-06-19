const mongoose = require('mongoose')
const MONGOURI = 'mongodb+srv://admin:12345@cluster0.hhqn7bh.mongodb.net/gofoodmern?retryWrites=true&w=majority'
console.log('mmm', MONGOURI); 
// const mongouri = 'mongodb+srv://admin:12345@cluster0.hhqn7bh.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoDB = async() =>{
    await mongoose.connect(MONGOURI, {useNewUrlParser: true},async(err, data)=> {
        if(err) {
            console.log('---ERROR---');
        }
        else {
            console.log('Connected');
            console.log('aa'); 
            const fetchedData = await mongoose.connection.db.collection('food_items');
            fetchedData.find({}).toArray(function(err,data) {

                if(err) {
                    console.log('---ERROR---');
                }
                else {
                   //  console.log(data)
                   global.food_items = data;
                }
            })
            const fetchedData2 = await mongoose.connection.db.collection('foodCategory');
            fetchedData2.find({}).toArray(function(err,catData) {
                if(err) {
                    console.log(err)
                }
                else {
                    global.foodCategory = catData;
                }
            })
            const fetchedData3 = await mongoose.connection.db.collection('food_items2');
            fetchedData3.find({}).toArray(function(err,data) {

                if(err) {
                    console.log('---ERROR---');
                }
                else {
                   //  console.log(data)
                   global.food_items2 = data;
                }
            })
            
    }
    })
    
    
}


module.exports = mongoDB