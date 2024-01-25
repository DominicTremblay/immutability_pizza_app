import React from 'react';

const MyPizza = (props) => {
  return (
    <section>
      <h3>My Pizza</h3>

      <article>
        <header>My Pizza: {props.myPizza?.name ?? 'No Pizza Selected'}</header>

        <div>
          <h4>My topings</h4>
          <ul>
            {props.myPizza?.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default MyPizza;
