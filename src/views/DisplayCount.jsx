import React from 'react';
import useCountState from '../hooks/queries/useCountState';

const DisplayCount = () => {
  const count = useCountState();

  return (
    <div>

      <p>Current count is still <span style={{ color: 'red' }}>{ count }</span></p>
    </div>
  );
};

export default DisplayCount;
