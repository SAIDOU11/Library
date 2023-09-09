import { AiFillCheckCircle } from 'react-icons/ai';
import classNames from 'classnames';

const BannerWarningTitleText = ({ icon, title, multiline }) => {
  const warningTitle = `warning-${title}`;
  const warningIcon = `warning-${icon}`;
  const multilineTitle = `${multiline}`;

  const backgroungTitle = classNames(warningTitle, multilineTitle);
  const allClassesIcon = classNames(icon, warningIcon);
  return (
    <div className={backgroungTitle}>
      <h4>
        <AiFillCheckCircle className={allClassesIcon} /> Attention
      </h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </p>
    </div>
  );
};

export default BannerWarningTitleText;
