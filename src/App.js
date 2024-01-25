import { useReducer } from 'react';
import Header from './components/Header';
import IngredientList from './components/IngredientList';
import MyPizza from './components/MyPizza';
import { pizzasList, ingredients } from './data/pizzas';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        {/* <MyPizza />
        <IngredientList /> */}
      </div>
    </div>
  );
}

export default App;
