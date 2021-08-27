// import styles from './BasementInternship.module.scss';

import { useEffect, useState } from 'react';

const BasementInternship = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(`${counter}`);

  const handleIncrement = () => {
    // TODO increment function

    console.log(counter);
  }

  const handleReverse = () => {
    // TODO reverse function

    console.log(counter);
  }

  useEffect(() => {
    // TODO display changing function to show 'Basement', 'internship' ou 'Basement internship'
  }, []);

  return (
    <div>
      <h1>{display}</h1>

      <button onClick={handleReverse}>
        Reverse
      </button>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default BasementInternship;
