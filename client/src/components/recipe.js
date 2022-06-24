import React from "react";

const Recipe = ({recipes}) =>(
    <div className="recipe">
        {recipes.map((food,i)=>{
        return (   <div key ={i}>
                <h2>{food.recipe.label}</h2>
                <img alt="" src={food.recipe.image}></img>
                <div>
                <ol className="list">
                    {food.recipe.ingredientLines.map((ingredient,i)=>{
                        return(<li key ={i}>{ingredient}</li>)
       
                })}</ol>
                </div>
            </div>
            )
        })}
    </div>
)

export default Recipe