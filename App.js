import "./App.css";
import {useEffect,useState} from "react";
import {Link,Switch,Route} from "react-router-dom"

export default function App(){
  
    return(
        <div className="App">
          <ul>
            <li><Link to = "/recipe-list">Recipe List</Link>
            </li>
            <li>
            <Link to ="/">Home</Link>
            </li>
          </ul>
        <Switch>
            <Route path ="/recipe-list"><RecipeList /></Route>
            <Route path ="/">   <Welcome /></Route>
        </Switch>   
        </div>
    );
}
function Welcome(){
    const message = "Welcome to recipe app";
    return(
        <div>
            <h1>{message}</h1>

        </div>
    );
}
function RecipeList(){
    const message = "Awesome recipe app"; 
    // const recipe ={
    //     name :"Biryani",
    //     picture :"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ofii4m78dihqmf3ebkkl",
    // };
    // const recipeList =[
    //     {
          
    //       picture:
    //         "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11.jpg",
    //       name: "Chicken tandoori"
    //     },
    //     {
          
    //       picture:
    //         "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
    //       name: "Panner butter masala"
    //     },
    //     {
          
    //       picture:
    //         "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
    //       name: "Briyani"
    //     },
    //     {
         
    //       picture:
    //         "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
    //       name: "Parotta shawarma"
    //     }
    //   ];
      const[recipeList,  setRecipeList]=useState([]);
      useEffect(() => {
        fetch("https://620c806db5736325938fae2a.mockapi.io/recipes")
          .then((data) => data.json())
          .then((recipes) => setRecipeList(recipes));
      }, []);
    
      
    return(
        <div>
            <h1>{message}</h1>
            <div className="recipe-list-container">
            {recipeList.map(recipe =>( <Recipe recipe={recipe}/>))}
           </div>
        </div>
    );
}
function Recipe({recipe}){
   
    return(
        <div className ="recipe-container">
        <img src={recipe.picture} alt ={recipe.name} className="recipe-picture"/>
<p className="recipe-name">{recipe.name}</p>
            </div>
    );
    }
