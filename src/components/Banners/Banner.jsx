import classNames from 'classnames';
import { createContext } from 'react';
import useTruthyOrFalsy from '../../hooks/useTruthyOrFalsy.jsx';

const BannerContext = createContext();

const Banner = ({ children, singleline }) => {
  const [line, setLine] = useTruthyOrFalsy(false);
  const successClasses = classNames(singleLine, successTitle);

  return (
    <BannerContext.Provider value={{ line }}>
      <div className={successClasses}>{children}</div>
    </BannerContext.Provider>
  );
};

export { Banner, BannerContext };
