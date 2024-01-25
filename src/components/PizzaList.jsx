import React from 'react';
import PizzaListItem from './PizzaListItem';

const PizzaList = (props) => {
  const pizzaList = props.pizzas.map((pizza) => (
    <PizzaListItem key={pizza.name} name={pizza.name} addToMyPizza={props.addToMyPizza} />
  ));

  return (
    <section>
      <h3>Select a Pizza</h3>

      <ul>{pizzaList}</ul>
    </section>
  );
};

export default PizzaList;
