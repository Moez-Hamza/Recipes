import React from 'react';
import './App.css';
import Recipes from './components/recipes';
import Add from './components/Add'
import Search from './components/Search';
import axios from 'axios'
import OneRecipe from './components/OneRecipe';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipe:[],
      oneRecipe:{},
      view:'allRecipes',
      success:''
    }
    this.renderView = this.renderView.bind(this);
    this.handleview = this.handleview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectOne = this.selectOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
  }




   componentDidMount(){
    fetch("http://localhost:5000/api").then(response =>
      response.json()
    ).then(data =>{
      console.log(data)
      this.setState({
        recipe:data
      })
      })
  }

  

selectOne(index){
  console.log("clicked")
  this.handleview("oneRecipe")
  this.setState({
    oneRecipe:this.state.recipe[index]
  })
}

deleteOne(index){
  axios.post(("http://localhost:5000/api/d"),this.state.recipe[index])
}


handleSearch(term){
  axios.post('http://localhost:5000/api/search',{name:term}).then(data =>{
    console.log(data)
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
     return <Recipes recipes = {this.state.recipe}  selectOne={this.selectOne} deleteOne={this.deleteOne} />
    }else if(this.state.view ==='add'){
      return  <Add handleSubmit={this.handleSubmit} success={this.state.success === "success"? "Data Saved" : ''} /> 
    }else if(this.state.view ==='oneRecipe'){
      return <center><OneRecipe recipe={this.state.oneRecipe}/></center>
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
          }><Search onSearch ={this.handleSearch}/></div>
        </nav>
          {this.renderView()}
      </div>
    );
  }
}

export default App;
