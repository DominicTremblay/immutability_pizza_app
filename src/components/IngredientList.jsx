import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = (props) => {
  const ingredientsList = props.ingredients.map((ingredient) => (
    <IngredientItem
      key={ingredient}
      name={ingredient}
      addToping={props.addToping}
      removeToping={props.removeToping}
    />
  ));

  return (
    <section>
      <h3>List of Ingredients</h3>

      <ul>{ingredientsList}</ul>
    </section>
  );
};

export default IngredientList;
