import { useReducer } from 'react';
import PizzaList from './components/PizzaList';
import IngredientList from './components/IngredientList';
import MyPizza from './components/MyPizza';
import { pizzasList, ingredients } from './data/pizzas';
import './App.css';
import pizzaReducer, {
  SELECT_PIZZA,
  ADD_TOPPING,
  REMOVE_TOPPING,
} from './reducers/pizzasReducer';

function App() {
  const [state, dispatch] = useReducer(pizzaReducer, {
    myPizza: null,
    pizzaIngredients: ingredients,
    pizzas: pizzasList,
  });

  const addToMyPizza = (pizzaName) => {
    console.log({ pizzaName });

    const pizzaFound = state.pizzas.find((pizza) => pizza.name === pizzaName);

    // [TODO => call dispatch]
    // setMyPizza(pizzaFound);
    dispatch({ type: SELECT_PIZZA, pizza: pizzaFound });
  };

  const addToping = (toping) => {
    // [TODO: call dispatch]
  };

  const removeToping = (toping) => {
    // [TODO: call dispatch]
  };

  return (
    <div className="App">
      <PizzaList pizzas={state.pizzas} addToMyPizza={addToMyPizza} />
      <MyPizza myPizza={state.myPizza} />
      <IngredientList
        ingredients={state.pizzaIngredients}
        addToping={addToping}
        removeToping={removeToping}
      />
    </div>
  );
}

export default App;
