import { useReducer } from 'react';
import Header from './components/Header';
import IngredientList from './components/IngredientList';
import MyPizza from './components/MyPizza';
import { pizzasList, ingredients } from './data/pizzas';
import './App.css';
import dataReducer, {
  ADD_TOPPING,
  REMOVE_TOPPING,
} from './reducers/dataReducer';

function App() {

  const [state, dispatch] = useReducer(dataReducer, {
    myPizza: pizzasList[0],
    toppings: ingredients,
  });

  const addTopping = (topping) => {
    console.log({ add: topping });

    // [TODO: call dispatch]
    dispatch({ type: ADD_TOPPING, payload: topping });
  };

  const removeTopping = (topping) => {
    dispatch({ type: REMOVE_TOPPING, payload: topping });
  };

  return (
    <div className="App">
      <Header />
      <div className="sections">
        <MyPizza myPizza={state.myPizza} />
        <IngredientList
          toppings={state.toppings}
          addTopping={addTopping}
          removeTopping={removeTopping}
        />
      </div>
    </div>
  );
}

export default App;
