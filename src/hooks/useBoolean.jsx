import { useState } from 'react';

const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  return [value];
};

export default useBoolean;
