import React from 'react';
import './App.css';
import Recipes from './components/recipes';
import Add from './components/Add'
import Search from './components/Search';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipe:[],
      view:'allRecipes',
      success:''
    }
    this.renderView = this.renderView.bind(this);
    this.handleview = this.handleview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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



  handleSubmit(input){
    input.preventDefault()
      axios.post("http://localhost:5000/api",{
        name: input.target.name.value,
        recipe: input.target.recipe.value,
        image: input.target.image.value
      }).then(data =>{
        this.setState({
          success:'success'
        })
      })
  }



  handleview(view){
    this.setState({
      view: view
    })
  }
  renderView(){
    if(this.state.view === 'allRecipes'){
     return <Recipes recipes = {this.state.recipe} />
    }else if(this.state.view ==='add'){
      return  <Add handleSubmit={this.handleSubmit} success={this.state.success === "success"? "Data Saved" : ''} /> 
    }
    
  }

  render(){
    return (
      <div>
        <nav className='nav'>
          <div className={
            this.state.view !=="add" ?
            "nav-unselected" : "nav-selected"
          }
            onClick={()=>{
              this.handleview('add')
            }}
          >Create recipe</div>
          <div className={
            this.state.view !=='allRecipes' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('allRecipes')
          }}
          >Recipes</div>
          <div className={
            this.state.view !=='search' ?
            "nav-unselected" : "nav-selected"
          }><Search onSearch ={()=>{console.log('hey')}}/></div>
        </nav>
          {this.renderView()}
      </div>
    );
  }
}

export default App;
