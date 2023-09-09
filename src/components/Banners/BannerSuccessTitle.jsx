import { AiFillCheckCircle } from 'react-icons/ai';
import classNames from 'classnames';

const BannerSuccessTitle = ({ icon, singleline, title }) => {
  const successTitle = `success-${title}`;
  const successIcon = `success-${icon}`;
  const singlelineTitle = `${singleline}`;

  const backgroungTitle = classNames(successTitle, singlelineTitle);
  const allClassesIcon = classNames(icon, successIcon);

  return (
    <div className={backgroungTitle}>
      <h4>
        <AiFillCheckCircle className={allClassesIcon} /> Congratulations
      </h4>
    </div>
  );
};

export default BannerSuccessTitle;
