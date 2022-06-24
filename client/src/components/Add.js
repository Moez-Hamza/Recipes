import React from "react";

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            recipe:'',
            image:''
        }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        return(
        <div>
            <h2>Add a recipe</h2>
            <form className="New-Recipe-Form" onSubmit={this.handleSubmit}>
                <label >Recipe name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br></br>
                </label><br></br>
                <label >Recipe
                <textarea type="text" name='recipe' value={this.state.recipe} onChange={this.handleChange} /><br></br>
                </label><br></br>
                <label >image URL
                <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br></br>
                </label><br></br>
                <input type="submit" className="btn-submit" value='Submit'/>
            </form>
        </div>
        )
        
    }

}
export default Add