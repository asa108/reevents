import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h1>Ttesting 123</h1>
      <h3>Data is : {data}</h3>
      <Button
        content="increament"
        color="green"
        onClick={() => dispatch(increment(2))}
      />
      <Button
        content="decreament"
        color="red"
        onClick={() => dispatch(decrement(11))}
      />
    </>
  );
}
