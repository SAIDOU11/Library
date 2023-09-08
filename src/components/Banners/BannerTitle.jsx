import { AiFillCheckCircle } from 'react-icons/ai';
import classNames from 'classnames';

const BannerTitle = ({ icon, title, singleline }) => {
  const successIcon = `success-${icon}`;
  const singleLine = ` ${singleline}`;
  const successTitle = `success-${title}`;

  const successClasses = classNames(singleLine, successTitle);
  const iconColor = classNames(icon, successIcon);
  return (
    <div className={successClasses}>
      <AiFillCheckCircle className={iconColor} /> Congratulations
    </div>
  );
};

export default BannerTitle;
