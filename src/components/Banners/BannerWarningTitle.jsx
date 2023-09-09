import { AiFillWarning } from 'react-icons/ai';
import classNames from 'classnames';

const BannerWarningTitle = ({ icon, singleline, title }) => {
  const warningTitle = `warning-${title}`;
  const warningIcon = `warning-${icon}`;
  const singlelineTitle = `${singleline}`;

  const backgroungTitle = classNames(warningTitle, singlelineTitle);
  const allClassesIcon = classNames(icon, warningIcon);

  return (
    <div className={backgroungTitle}>
      <h4>
        <AiFillWarning className={allClassesIcon} /> Attention
      </h4>
    </div>
  );
};

export default BannerWarningTitle;
