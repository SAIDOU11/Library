import { MdError } from 'react-icons/md';
import classNames from 'classnames';

const BannerErrorTitle = ({ icon, singleline, title }) => {
  const errorTitle = `error-${title}`;
  const errorIcon = `error-${icon}`;
  const singlelineTitle = `${singleline}`;

  const backgroungTitle = classNames(errorTitle, singlelineTitle);
  const allClassesIcon = classNames(icon, errorIcon);

  return (
    <div className={backgroungTitle}>
      <h4>
        <MdError className={allClassesIcon} /> There is a problem with your
        application
      </h4>
    </div>
  );
};

export default BannerErrorTitle;
