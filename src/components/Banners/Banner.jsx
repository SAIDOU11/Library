import { createContext } from 'react';

const BannerContext = createContext();

const Banner = ({ children }) => {
  return (
    <BannerContext.Provider>
      <div className="menu-banner"> {children}</div>
    </BannerContext.Provider>
  );
};

export { Banner, BannerContext };
