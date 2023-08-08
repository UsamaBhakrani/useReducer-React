import { useState, useReducer } from "react";
import Button from "./Button";
import Panel from "./Panel";
import {
  INCREMENT,
  DECREMENT,
  ADD_INPUT,
  ADD_TO_INITIALSTATE,
} from "../actions";

const CounterPage = ({ initialValue }) => {
  // const [count, setCount] = useState(intialValue);
  // const [input, setInput] = useState(0);

  // Reducer with Switch/Case

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case ADD_INPUT:
        return {
          ...state,
          input: action.payload,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case ADD_TO_INITIALSTATE:
        return {
          ...state,
          count: state.count + state.input,
          input: 0,
        };
      default:
        return state;
    }
  };

  // Reducer with IfElse

  // const reducer = (state, action) => {
  //   if (action.type === INCREMENT) {
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     };
  //   }
  //   if (action.type === ADD_INPUT) {
  //     return {
  //       ...state,
  //       input: action.payload,
  //     };
  //   }
  //   if (action.type === DECREMENT) {
  //     return {
  //       ...state,
  //       count: state.count - 1,
  //     };
  //   }
  //   if (action.type === ADD_TO_INITIALSTATE) {
  //     return {
  //       ...state,
  //       count: state.count + state.input,
  //       input: 0,
  //     };
  //   }
  //   return state;
  // };

  const initial = {
    count: initialValue,
    input: 0,
  };

  const [state, dispatch] = useReducer(reducer, initial);
  console.log(state);

  const increment = () => {
    // setCount(count + 1);

    dispatch({
      type: INCREMENT,
    });
  };
  const decrement = () => {
    // setCount(count - 1);

    dispatch({
      type: DECREMENT,
    });
  };

  const handleonChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    // setInput(value);

    dispatch({
      type: ADD_INPUT,
      payload: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // setCount(count + input);
    // setInput(0);

    dispatch({
      type: ADD_TO_INITIALSTATE,
    });
  };

  return (
    <Panel className="m-3">
      {/*// use value only in Count is if built with useState*/}

      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button danger onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleOnSubmit} action="">
        <label htmlFor="">Input</label>
        <input
          type="number"
          // use input only in value prop if built with useState

          value={state.input || ""}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleonChange}
        />
        <Button secondary>Add</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
