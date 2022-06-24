const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

let recipeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    }
})
let Recipe = mongoose.model('Recipe', recipeSchema)
 

let save = (data) =>{
    let recipe = new Recipe({
        name:data.label,
        image_url:data.image,
        ingredients:data.ingredients
    })
}
