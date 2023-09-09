import { HiMiniInformationCircle } from 'react-icons/hi2';
import classNames from 'classnames';

const BannerNeutralTitleText = ({ icon, title, multiline }) => {
  const neutralTitle = `neutral-${title}`;
  const neutralIcon = `neutral-${icon}`;
  const multilineTitle = `${multiline}`;

  const backgroungTitle = classNames(neutralTitle, multilineTitle);
  const allClassesIcon = classNames(icon, neutralIcon);
  return (
    <div className={backgroungTitle}>
      <h4>
        <HiMiniInformationCircle className={allClassesIcon} /> Update available
      </h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </p>
    </div>
  );
};

export default BannerNeutralTitleText;
