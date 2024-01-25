import { useState } from 'react';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([
    'tomato sauce',
    'cheese',
    'pineapple',
    'ham',
  ]);

  const addBacon = () => {
    console.log("Adding Bacon...")
    // ingredients.push('bacon')
    setIngredients([...ingredients, 'bacon']);
  };

  return (
    <div>
      <h1>List of Ingredients</h1>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={addBacon}>Add Bacon</button>
    </div>
  );
};

export default Ingredients;
