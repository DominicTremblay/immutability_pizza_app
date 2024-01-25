import React from 'react';
import './MyPizza.css';

const MyPizza = (props) => {
  return (
    <section>
      <h3>My Pizza</h3>

      <article className="my-pizza">
        <header>My Pizza: {props.myPizza?.name ?? 'No Pizza Selected'}</header>

        <div>
          <h4>My topings</h4>
          <ul>
            {props.myPizza?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default MyPizza;
