import React from "react";


const OneRecipe =({recipe}) =>{
    return (<div>
        <h2 className="title">{recipe.name}</h2>
        <img className="image" src={recipe.image}></img>
        <div className="box">
        <p>{recipe.ingredients}</p>
        </div>
    </div>)
}

export default OneRecipe;