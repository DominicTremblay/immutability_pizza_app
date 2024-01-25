import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  const addPizza = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  const removePizza = () => setCount(count - 1);

  return (
    <div>
      <h1>Orders Count</h1>

      <div>Orders' Count: {count}</div>
      <button onClick={addPizza}>Add Pizza</button>
      <button onClick={removePizza}> Pizza</button>
    </div>
  );
}

export default Counter;
