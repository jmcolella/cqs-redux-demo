import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const nonDispatchableAction = (payload) => ({
  type: 'SOME_TYPE',
  payload
});

function ReduxHookComponent(props) {
  const someStateValue = useSelector((state) => state.someStateValue);
  const { dispatch } = useDispatch();

  // Maybe some function that dispatches an action...
  const someFn = (payload) => {
    dispatch(nonDispatchableAction(payload));
  }

  // Logic to merge props and state from useSelector...
  const mergedValue = someStateValue + props.somePropValue;

  return (
    <React.Fragment>
      <div>{ mergedValue }</div>

      <button
        onClick={() => someFn('some-value')}
      >
        Submit
      </button>
    </React.Fragment>
  )
}

export default ReduxHookComponent;
