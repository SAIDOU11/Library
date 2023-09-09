import { MdError } from 'react-icons/md';
import classNames from 'classnames';

const BannerErrorTitleText = ({ icon, title, multiline }) => {
  const errorTitle = `error-${title}`;
  const errorIcon = `error-${icon}`;
  const multilineTitle = `${multiline}`;

  const backgroungTitle = classNames(errorTitle, multilineTitle);
  const allClassesIcon = classNames(icon, errorIcon);
  return (
    <div className={backgroungTitle}>
      <h4>
        <MdError className={allClassesIcon} /> There is a problem with your
        application
      </h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </p>
    </div>
  );
};

export default BannerErrorTitleText;
