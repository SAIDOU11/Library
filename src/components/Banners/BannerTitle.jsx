import { AiFillCheckCircle } from 'react-icons/ai';
import classNames from 'classnames';

const BannerTitle = ({ icon, singleline, title }) => {
  const successTitle = `success-${title}`;
  const successIcon = `success-${icon}`;
  const singlelineTitle = `${singleline}`;

  const backgroungTitle = classNames(successTitle, singlelineTitle);
  const allClassesIcon = classNames(icon, successIcon);

  return (
    <div className={backgroungTitle}>
      <AiFillCheckCircle className={allClassesIcon} /> Congratulations
    </div>
  );
};

export default BannerTitle;
