import { useEffect, useState } from "react";

import styles from "../styles/BasementInternship.module.scss";

let counterInterval: NodeJS.Timer;

const BasementInternship = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(`${counter}`);
  const [isCounting, setIsCounting] = useState(false);

  const time = 15;

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleReverse = () => {
    setCounter(0);
  };

  useEffect(() => {
    counterInterval = setInterval(() => {
      setCounter((counter) => counter + 1);
      setIsCounting(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setDisplay(`${counter}`);

    if (counter === time) {
      clearInterval(counterInterval);
      setIsCounting(false);
    }

    if (counter !== 0) {
      if (counter % 3 === 0 && counter % 5 === 0) {
        setDisplay("Basement internship");
      } else if (counter % 3 === 0) {
        setDisplay("Basement");
      } else if (counter % 5 === 0) {
        setDisplay("Internship");
      }
    }
  }, [counter]);

  return (
    <div className={styles.container}>
      <h1>{display}</h1>

      <button
        onClick={handleReverse}
        className={styles.reverse}
        disabled={isCounting}
      >
        Reverse
      </button>

      <button
        onClick={handleIncrement}
        className={styles.increment}
        disabled={isCounting}
      >
        Increment
      </button>
    </div>
  );
};

export default BasementInternship;
