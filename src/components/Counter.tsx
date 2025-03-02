<<<<<<< HEAD
  import React, { useState } from 'react';

  const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
        <button onClick={() => {setCount(count - 1)}}>Decrement</button>
      </div>
    );
  };

  export default Counter;
=======
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}
>>>>>>> origin/task-components
