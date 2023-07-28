import React, { useEffect } from "react";

export default function Child(props) {
  useEffect(() => {
    console.log("count changed", props.count);
  }, [props.count]);
  useEffect(() => {
    console.log("increment fucntion changed");
  }, [props.increment]);
  console.log("child render again");
  return (
    <div>
      Child
      <h1> count : {props.count}</h1>
      <button onClick={props.increment}>increment</button>
    </div>
  );
}
