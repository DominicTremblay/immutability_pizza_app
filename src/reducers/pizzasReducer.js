export const SELECT_PIZZA = 'SELECT_PIZZA';
export const ADD_TOPPING = 'ADD_TOPPING';
export const REMOVE_TOPPING = 'REMOVE_TOPPING';

// setMyPizza((prev) => ({
//   ...prev,
//   ingredients: [...prev.ingredients, toping],
// }));

// const removeToping = (toping) => {
//   const updatedTopings = myPizza.ingredients.filter(
//     (ingredient) => ingredient !== toping
//   );

//   setMyPizza((prev) => ({ ...prev, ingredients: updatedTopings }));
// };

const pizzaReducer = (state, action) => {
  switch (action.type) {
    case SELECT_PIZZA:
      return {
        ...state,
        myPizza: action.pizza,
      };

    case ADD_TOPPING:
      return state;

    case REMOVE_TOPPING:
      return state;

    default:
      return state;
  }
};

export default pizzaReducer;
