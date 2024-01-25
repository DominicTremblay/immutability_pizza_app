import { useState } from 'react';
import PizzaList from './components/PizzaList';
import IngredientList from './components/IngredientList';
import MyPizza from './components/MyPizza';
import { pizzasList, ingredients } from './data/pizzas';
import './App.css';

function App() {
  const [myPizza, setMyPizza] = useState(null);

  const [pizzaIngredients, setPizzaIngredients] = useState(ingredients);

  const [pizzas, setPizzas] = useState(pizzasList);

  const addToMyPizza = (pizzaName) => {
    console.log({ pizzaName });

    const pizzaFound = pizzas.find((pizza) => pizza.name === pizzaName);

    setMyPizza(pizzaFound);
  };

  const addToping = (toping) => {
    setMyPizza((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, toping],
    }));
  };

  const removeToping = (toping) => {
    const updatedTopings = myPizza.ingredients.filter(
      (ingredient) => ingredient !== toping
    );

    setMyPizza((prev) => ({ ...prev, ingredients: updatedTopings }));
  };

  return (
    <div className="App">
      <PizzaList pizzas={pizzas} addToMyPizza={addToMyPizza} />
      <MyPizza myPizza={myPizza} />
      <IngredientList
        ingredients={pizzaIngredients}
        addToping={addToping}
        removeToping={removeToping}
      />
    </div>
  );
}

export default App;
