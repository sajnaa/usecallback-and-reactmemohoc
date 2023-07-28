import React, { Component, useEffect } from "react";

function Child1(props) {
  useEffect(() => {
    console.log("count changed", props.count);
  }, [props.count]);
  useEffect(() => {
    console.log("increment fucntion changed");
  }, [props.increment]);
  console.log("child1 render again");
  return (
    <div>
      Child 1<h1> count : {props.count}</h1>
      <button onClick={props.increment}>increment</button>
    </div>
  );
}
// react.memo hoc used for if your Component renders the satisfiesme result given the same props it avoid rendering again
//return a memerized result
//react memo hoc => higher order component
export default React.memo(Child1);
