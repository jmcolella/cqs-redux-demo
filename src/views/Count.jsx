import { Link } from 'react-router-dom';
import React from 'react';
import useCountState from '../hooks/queries/useCountState';
import useCountCommands from '../hooks/commands/useCountCommands';

function Count() {
  const count = useCountState();
  const { incrementCount } = useCountCommands();

  return (
    <div>
      <p>Current count is <span style={{ color: 'red' }}>{ count }</span></p>

      <button
        onClick={incrementCount}
      >
        Increment 
      </button>

      <br />
      <Link to="/display">Next</Link>
    </div>
  )
};

export default Count;
