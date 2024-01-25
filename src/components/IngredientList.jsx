import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = (props) => {
  const toppingList = props.toppings.map((topping) => (
    <IngredientItem
      key={topping}
      name={topping}
      addTopping={props.addTopping}
      removeTopping={props.removeTopping}
    />
  ));

  return (
    <section>
      <h3>List of Ingredients</h3>

      <ul>{toppingList}</ul>
    </section>
  );
};

export default IngredientList;
