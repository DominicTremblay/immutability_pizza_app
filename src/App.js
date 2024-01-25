import { useState } from 'react';
import Header from './components/Header';
import IngredientList from './components/IngredientList';
import MyPizza from './components/MyPizza';
import { pizzasList, ingredients } from './data/pizzas';
import './App.css';

function App() {
  const [myPizza, setMyPizza] = useState(pizzasList[0]);
  const [toppings, setToppings] = useState(ingredients);

  const addTopping = (topping) => {
    console.log({ add: topping });

    setMyPizza((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, topping],
    }));
  };

  const removeTopping = (topping) => {
    const updatedToppings = myPizza.ingredients.filter(
      (ingredient) => ingredient !== topping
    );
    setMyPizza((prev) => ({
      ...prev,
      ingredients: updatedToppings,
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="sections">
        <MyPizza myPizza={myPizza} />
        <IngredientList
          toppings={toppings}
          addTopping={addTopping}
          removeTopping={removeTopping}
        />
      </div>
    </div>
  );
}

export default App;
