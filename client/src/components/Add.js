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
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(<center>
        <div>
            <center><h2 className="title">Add a recipe</h2></center>
            <div className="container">
            <form className="New-Recipe-Form" onSubmit={this.props.handleSubmit}>
                <label className="text-form" >Recipe name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /><br></br>
                </label><br></br>
                <label className="text-form">Recipe
                <textarea type="text" name='recipe' value={this.state.recipe} onChange={this.handleChange} required /><br></br>
                </label><br></br>
                <label  className="text-form">image URL
                <input type="url" name="image" value={this.state.image} onChange={this.handleChange}  required/><br></br>
                </label><br></br>
                <input type="submit" className="btn-submit" value='Submit'/> 
                <div className="success">{this.props.success}</div>
            </form>
            </div>
        </div></center>
        )
        
    }

}
export default Add