import React from 'react';

const IngredientItem = (props) => {
  const addIngredient = (item) => {
    console.log({ ingredient: item });
    props.addTopping(item);
  };

  const removeIngredient = (item) => {
    console.log({ ingredient: item });
    props.removeTopping(item);
  };

  return (
    <li>
      {props.name}
      <div>
        <button onClick={() => addIngredient(props.name)}>+</button>
        <button onClick={() => removeIngredient(props.name)}>-</button>
      </div>
    </li>
  );
};

export default IngredientItem;
