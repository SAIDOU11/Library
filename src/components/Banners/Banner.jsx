import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import classNames from 'classnames';

const Banner = ({ icon, title, singleline }) => {
  const [line, setLine] = useState(false);

  const successIcon = `success-${icon}`;
  const singleLine = ` ${singleline}`;
  console.log(typeof singleLine);
  const successTitle = `success-${title}`;

  const successClasses = classNames(singleLine, successTitle);
  const iconColor = classNames(icon, successIcon);

  return (
    <>
      <div className={successClasses}>
        <AiFillCheckCircle className={iconColor} /> Congratulations
      </div>
    </>
  );
};

export default Banner;
