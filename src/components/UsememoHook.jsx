import React, { Component, useState, memo, useCallback, useMemo } from "react";

const UsememoHook = (props) => {
  const [count, setCount] = useState(0);
  console.log("app");

  const increment = useCallback(() => {
    console.log("increment");

    setCount(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div>
      Count: {count}
      <br />
      <Increment increment={increment} />
      <br />
      <Square count={count} />
    </div>
  );
};

const Square = (props) => {
  console.log("Square");

  const [number, setNumber] = useState(0);

  const onNumberChanged = (event) => {
    console.log("onNumberChanged");

    setNumber(event.target.value);
  };

  //when ever i change the value square component also  will cl and those functions recreate new memory
  //so that  will take time and time waste also
  //if we use usememo its catched value and return memorized value so that app will faster
  const calculate = useMemo(() => {
    console.log("calculate");
    if (number && number > 0) {
      const time = new Date().getTime();
      let value = 0;
      while (value < 2) {
        value = (new Date().getTime() - time) / 1000;
      }
      return number * number;
    } else {
      return 0;
    }
  }, [number]);

  const calculate1 = useMemo(() => {
    console.log("calculate1");
    if (number && number > 0) {
      const time = new Date().getTime();
      let value = 0;
      while (value < 2) {
        value = (new Date().getTime() - time) / 1000;
      }
      return number * number;
    } else {
      return 0;
    }
  }, [number]);

  return (
    <div>
      {props.count} Square of{" "}
      <input onChange={onNumberChanged} value={number} /> is {calculate},
      {calculate1}
    </div>
  );
};

const Increment = memo((props) => {
  console.log("increment rendered");
  return <button onClick={props.increment}>Increment</button>;
});

export default UsememoHook;
