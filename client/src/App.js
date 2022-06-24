import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipe:"hello"
    }
  }
   componentDidMount(){
    fetch("http://localhost:5000/api").then(response =>
      response.json()
    ).then(data =>{
      this.setState({
        recipe:data
      })
      })
  }


  render(){
    console.log(this.state.recipe)
    return (
      <div>
     {this.state.recipe.recipe}
      </div>
    );

  }
}

export default App;
