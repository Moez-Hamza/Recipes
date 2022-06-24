import React from "react";

const Recipes = (props) =>(
    <div className="recipes">
        {props.recipes.map((food,i)=>{
        return (   <div key ={i}>
                <h2 className="recipe-name">{food.name}</h2>
                <center><img className="image" alt="" src={food.image_url} onClick={()=>{props.selectOne(i)}}></img></center>
                <center><button className="delete" onClick={()=>{props.deleteOne(i)}}>Delete</button></center>
            </div>
          
            )
        })}
    </div>
)

export default Recipes