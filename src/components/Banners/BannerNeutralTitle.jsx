import { HiMiniInformationCircle } from 'react-icons/hi2';
import classNames from 'classnames';

const BannerNeutralTitle = ({ icon, singleline, title }) => {
  const neutralTitle = `neutral-${title}`;
  const neutralIcon = `neutral-${icon}`;
  const singlelineTitle = `${singleline}`;

  const backgroungTitle = classNames(neutralTitle, singlelineTitle);
  const allClassesIcon = classNames(icon, neutralIcon);

  return (
    <div className={backgroungTitle}>
      <h4>
        <HiMiniInformationCircle className={allClassesIcon} /> Update available
      </h4>
    </div>
  );
};

export default BannerNeutralTitle;
