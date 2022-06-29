import React from "react";

const Recipes = (props) =>(
    <div className="recipes">
        {props.recipes.map((food,i)=>{
        return (   <div key ={i}>
            
                <h1 className="recipe-name">{food.name}</h1>
                <center><img className="image" alt="" src={food.image_url} onClick={()=>{props.selectOne(i)}}></img></center>
                <center><button className="delete" onClick={()=>{props.deleteOne(i)}}>Delete</button>  <button className="delete" onClick={()=>{props.update(i)}}>Update</button></center>

            </div>
          
            )
        })}
    </div>
)

export default Recipes