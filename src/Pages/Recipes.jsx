import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Toast, Button, CardGroup } from 'react-bootstrap';



const Recipes = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { id } = useParams();
  console.log(id)

  const [recipes, setRecipes] = useState([]);
  console.log(recipes)
  

  useEffect(() => {
    fetch('http://localhost:8080/recipes')
        .then(res => res.json())
        .then(data => {
            const foundRecipe = data.find(recipe => recipe._id == id);
            setRecipes(foundRecipe);
        })
  }, [id]);
  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setShowToast(true);
  };
  
  return (
    <div>
    
   
      <Card>
      <img className="w-50 h-20 mx-auto" src={recipes.img} alt="" />  
        <Card.Header className='text-center fs-3'>{recipes.name}</Card.Header>
      <Card.Body>
          <Card.Title>{recipes.bio}</Card.Title>
          <div className='d-flex gap-4 fs-6'>
            <p>Experience:{recipes.experience}</p>
            <p>Number of recipes:{recipes.recipes}</p>
      </div>
       
          <>
      <Button
        variant="outline-primary"
        disabled={isFavorite}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? 'Favorite' : 'Add to Favorites'}
      </Button>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide>
        <Toast.Body>The recipe is my favorite!</Toast.Body>
      </Toast>
    </>
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