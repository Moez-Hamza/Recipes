import React from "react";

class Update extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            recipe:'',
            image:'',
        }
       this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(<center>
        <div>
            <center><h2 className="title">Update a recipe</h2></center>
            <div className="container">
            <form className="New-Recipe-Form" onSubmit={this.props.handleUpdate}>
                <label className="text-form" >Recipe name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /><br></br>
                </label><br></br>
                <label className="text-form">Recipe
                <textarea type="text" name='recipe' value={this.state.recipe} onChange={this.handleChange} required /><br></br>
                </label><br></br>
                <label  className="text-form">image URL
                <input type="url" name="image" value={this.state.image} onChange={this.handleChange}  required/><br></br>
                </label><br></br>
            <label>Type of food:</label>
        <select onChange={this.handleChange} id='sort'>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        <option value='desert'> Desert</option>
        </select>
                <input type="submit" className="btn-submit" value='Submit'/> 

            </form>
            </div>
        </div></center>
        )
        
    }

}
export default Update