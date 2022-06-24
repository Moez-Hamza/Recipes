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
 

let saveRecipe = (data) =>{
    let recipe = new Recipe({
        name:data.name,
        image_url:data.image,
        ingredients:data.recipe
    })
    let query = recipe.save((error)=>{
        if(error){
            console.log(error)
        }

    })
    return query
}
let getAllRecipes =()=>{
    return Recipe.find({})
}

let searchRecipe =(data)=>{
    return Recipe.find({name:data})
}
let deleteRecipe =(data)=>{
    Recipe.deleteOne({name:data}).then(console.log('Data Deleted')).catch(error =>{
        console.log('Error')
    })
    return getAllRecipes()
    
}

module.exports.saveRecipe = saveRecipe
module.exports.getAllRecipes = getAllRecipes
module.exports.deleteRecipe = deleteRecipe
module.exports.searchRecipe = searchRecipe