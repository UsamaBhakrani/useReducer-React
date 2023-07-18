import { useState, useReducer } from "react";
import Button from "./Button";
import Panel from "./Panel";

const CounterPage = ({ initialValue }) => {
  // const [count, setCount] = useState(intialValue);
  // const [input, setInput] = useState(0);

  const reducer = (state, action) => {
    if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    if (action.type === "add-input") {
      return {
        ...state,
        input: action.payload,
      };
    }
    if (action.type === "decrement") {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    if (action.type === "add-to-initialstate") {
      return {
        ...state,
        count: state.count + state.input,
        input: 0,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialValue,
    input: 0,
  });
  console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    // setCount(count - 1);

    dispatch({
      type: "decrement",
    });
  };

  const handleonChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    // setInput(value);

    dispatch({
      type: "add-input",
      payload: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // setCount(count + input);
    // setInput(0);

    dispatch({
      type: "add-to-initialstate",
    });
  };

  return (
    <Panel className="m-3">
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
