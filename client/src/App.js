import React from 'react';
import './App.css';
import Recipes from './components/recipes';
import Add from './components/Add'
import Search from './components/Search';
import axios from 'axios'
import OneRecipe from './components/OneRecipe';
import Update from './components/Update';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipe:[],
      oneRecipe:{},
      view:'allRecipes',
      success:'',
      currentID:'',
      search:[],
      updatedI:''
    }
    this.renderView = this.renderView.bind(this);
    this.handleview = this.handleview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this)
    this.selectOne = this.selectOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateOne = this.updateOne.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
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

  

selectOne(index){
  this.handleview("oneRecipe")
  this.setState({
    oneRecipe:this.state.recipe[index]
  })
}

deleteOne(index){
  axios.delete(`http://localhost:5000/api/${this.state.recipe[index]._id}`).then(response =>{
    this.setState({
      recipe:response.data
    })
  })
}


handleSearch(term){
  axios.get(`http://localhost:5000/api/${term}`).then(response =>{
    this.setState({
      view:'search',
      search:response.data
    })
  })
  
}

  handleSubmit(input){
    input.preventDefault()
      axios.post("http://localhost:5000/api",{
        name: input.target.name.value,
        recipe: input.target.recipe.value,
        image: input.target.image.value,
        sort:input.target.sort.value
      }).then(response =>{
        console.log(response.data)
        this.setState({
          success:'success',
          recipe:response.data
        })
      })
  }

updateOne(index){
  this.setState({
  view:'update',
  currentID:this.state.recipe[index]._id,
  updatedI:this.state.recipe[index]
  })


}

  handleview(view){
    this.setState({
      view: view
    })
  }

  handleUpdate(input){
    input.preventDefault()
    let data ={
      name:input.target.name.value,
      recipe: input.target.recipe.value,
      image: input.target.image.value,
      sort:input.target.sort.value
    }
    axios.put(`http://localhost:5000/api/${this.state.currentID}`,data).then(response=>{
      this.setState({
        recipe:response.data
      })
    })
  }


  renderView(){
    if(this.state.view === 'allRecipes'){
     return <center><Recipes recipes = {this.state.recipe}  selectOne={this.selectOne} deleteOne={this.deleteOne} update={this.updateOne} /></center>
    }else if (this.state.view === 'search'){
      return <Recipes recipes = {this.state.search}  selectOne={this.selectOne} deleteOne={this.deleteOne} update={this.updateOne} />
    }else if(this.state.view ==='add'){
      return  <Add handleSubmit={this.handleSubmit} success={this.state.success === "success"? "Data Saved" : ''} /> 
    }else if(this.state.view ==='update'){
      return <Update handleUpdate={this.handleUpdate} image={this.state.updatedI.image_url} recipe = {this.state.updatedI.ingredients} name = {this.state.updatedI.name} />
    }else if(this.state.view ==='oneRecipe'){
      return <center><OneRecipe recipe={this.state.oneRecipe}/></center>
    }else if(this.state.view ==='breakfast'){
      return <Recipes recipes = {this.state.recipe.filter(element => element.sort ==='breakfast' )}  selectOne={this.selectOne} deleteOne={this.deleteOne} update={this.updateOne}/>
    }else if(this.state.view ==='lunch'){
      return <Recipes recipes = {this.state.recipe.filter(element => element.sort ==='lunch')}  selectOne={this.selectOne} deleteOne={this.deleteOne} update={this.updateOne}/>
    }else if(this.state.view ==='dinner'){
      return <Recipes recipes = {this.state.recipe.filter(element => element.sort ==='dinner')}  selectOne={this.selectOne} deleteOne={this.deleteOne} update={this.updateOne} />
    }else if(this.state.view ==='desert'){
      return <Recipes recipes = {this.state.recipe.filter(element => element.sort ==='desert')}  selectOne={this.selectOne} deleteOne={this.deleteOne} update={this.updateOne}/>
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
            this.state.view !=='breakfast' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('breakfast')
          }}
          >Breakfast</div>
            <div className={
            this.state.view !=='lunch' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('lunch')
          }}
          >Lunch</div>
            <div className={
            this.state.view !=='dinner' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('dinner')
          }}
          >Dinner</div>
            <div className={
            this.state.view !=='desert' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('desert')
          }}
          >Deserts</div>


          
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
