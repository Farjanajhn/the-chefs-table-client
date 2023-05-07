import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Carousel, Container,Button,CardGroup } from 'react-bootstrap';


const Recipes = () => {
  const { id } = useParams();
  console.log(id)

  const [recipes, setRecipes] = useState([]);
  console.log(recipes)
  
/*   useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
    const foundRecipe = recipes.find(recipe => recipe._id == id);

 
    
    setRecipes(foundRecipe);
    console.log(foundRecipe);
  }, [id])
   */
  /*  const {img}  = recipes;  */
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
        .then(res => res.json())
        .then(data => {
            const foundRecipe = data.find(recipe => recipe._id == id);
            setRecipes(foundRecipe);
        })
}, [id]);
  
  return (
    <div>
    
   
      <Card>
      <img className="w-50 h-30" src={recipes.img} alt="" />  
        <Card.Header>{recipes.name}</Card.Header>
      <Card.Body>
          <Card.Title>{recipes.bio}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Faviourite</Button>
      </Card.Body>
      
      </Card>
      
      <CardGroup>
      <Card>
        
        <Card.Body>
            <Card.Title>{recipes.recipe1}</Card.Title>
            <p>Ingredient:{recipes.ingredients1}</p>
          <Card.Text>
              Methods:{recipes.method1}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        
        <Card.Body>
            <Card.Title>{recipes.recipe2}</Card.Title>
            <p>Ingredient:{recipes.ingredients2}</p>
          <Card.Text>
          Methods:{recipes.method2}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
  
        <Card.Body>
            <Card.Title>{recipes.recipe3}</Card.Title>
            <p>Ingredient:{recipes.ingredients3}</p>
          <Card.Text>
          Methods:{recipes.method3}
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </div>
  );
};

export default Recipes;