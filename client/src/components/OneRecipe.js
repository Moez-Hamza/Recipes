import React from "react";


const OneRecipe =({recipe}) =>{
    return (<div>
        <h2 className="title">{recipe.name}</h2>
        <div>
        <img className="oneimage" alt="" src={recipe.image_url}></img>
        </div>
        <div className="box">
        <p>{recipe.ingredients}</p>
        </div>
    </div>)
}

export default OneRecipe;