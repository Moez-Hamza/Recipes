import React from "react";

const Recipes = ({recipes}) =>(
    <div className="recipes">
        {recipes.map((food,i)=>{
        return (   <div key ={i}>
                <h2 className="recipe-name">{food.name}</h2>
                <img className="image" alt="" src={food.image_url} onClick={food.renderOne}></img>
                <div>
                {/* <ol className="list">
                    {food.recipe.ingredientLines.map((ingredient,i)=>{
                        return(<li key ={i}>{ingredient}</li>)
       
                })}</ol> */}
                </div>
            </div>
            )
        })}
    </div>
)

export default Recipes