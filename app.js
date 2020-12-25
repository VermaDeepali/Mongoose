const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{
   useNewUrlParser: true,
   useUnifiedTopology: true
 });


 const fruitSchema = new mongoose.Schema({
   name: {
     type : String,
     required : [true, "Please check your data entry, no name specified!"]
   },
   rating : {
     type : Number,
     min : 1,
     max : 10
   },
   review : String
 });

 const Fruit = mongoose.model("Fruit", fruitSchema);

 const fruit = new Fruit({
   score : 10,
   review : "Great fruit"
 });

//fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age : Number,
  favouriteFruit : fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const mango = new Fruit({
  name : "Mango",
  score : 9,
  review : "King of fruit"
});

mango.save();

Person.updateOne({name:"Deepali"}, {favouriteFruit:mango}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully updated the document!");
  }
});

// const person = new Person({
//   name : "Ellie",
//   age : 18,
//   favouriteFruit : pineapple
// });

// person.save();
/*
const kiwi = new Fruit({
  name : "Kiwi",
  score : 10,
  review : "Best fruit!"
});

const orange = new Fruit({
  name : "Orange",
  score : 6,
  review : "Sour fruit!"
});

const banana = new Fruit({
  name : "Banana",
  score : 5,
  review : "weird texture!"
});

*/
// Fruit.insertMany([kiwi,orange,banana], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitDB");
//   }
// });


Fruit.find(function(err,fruits){
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

/*
Fruit.updateOne({_id:"Insertid"}, {name:"Peach"}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully updated the documents!");
  }
});
*/

// Fruit.deleteOne({name:"Apple"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document!");
//   }
// });
