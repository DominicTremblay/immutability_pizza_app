export const ADD_TOPPING = 'ADD_TOPPING';
export const REMOVE_TOPPING = 'REMOVE_TOPPING';

const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_TOPPING:
      return {
        ...state,
        myPizza: {
          ...state.myPizza,
          ingredients: [...state.myPizza.ingredients, action.payload],
        },
      };

    case REMOVE_TOPPING:
      const updatedToppings = state.myPizza.ingredients.filter(
        (ingredient) => ingredient !== action.payload
      );

      return {
        ...state,
        myPizza: {
          ...state.myPizza,
          ingredients: updatedToppings,
        },
      };

    default:
      throw new Error(`Err: the action type ${action.type} is not supported`);
  }
};

export default dataReducer;
