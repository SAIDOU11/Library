import { useState } from 'react';

const useTruthyOrFalsy = (initialValue = true) => {
  const [truthy, setTruthy] = useState(initialValue);
  return [truthy];
};

export default useTruthyOrFalsy;
