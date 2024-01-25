import React from 'react';

const PizzaListItem = (props) => {
  const addPizza = (item) => {
    props.addToMyPizza(item);
  };

  return (
    <li>
      {props.name} <button onClick={() => addPizza(props.name)}>Select</button>
    </li>
  );
};

export default PizzaListItem;
