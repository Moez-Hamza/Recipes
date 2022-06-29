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
    },
    sort:{
        type:String,
        required:true,
        enum: ['breakfast','lunch','dinner','desert']
    }
})
let Recipe = mongoose.model('Recipe', recipeSchema)
 

let saveRecipe = (data) =>{
    let recipe = new Recipe({
        name:data.name,
        image_url: data.image,
        ingredients: data.recipe,
        sort:data.sort
    })
    let query = recipe.save((error,result)=>{
        if(error){
            throw error
        }
        console.log(result)

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
    Recipe.deleteOne({_id:data}).catch(error =>{
        console.log('Error')
    })
    return getAllRecipes()
    
}

let updateRecipe =(data)=>{
    Recipe.findByIdAndUpdate(data.id,data).catch(error =>{
        throw error
    })
    return getAllRecipes()
}

module.exports.saveRecipe = saveRecipe
module.exports.getAllRecipes = getAllRecipes
module.exports.deleteRecipe = deleteRecipe
module.exports.searchRecipe = searchRecipe
module.exports.updateRecipe = updateRecipe