import { AiFillCheckCircle } from 'react-icons/ai';
import classNames from 'classnames';

const BannerSuccessTitleText = ({ icon, title, multiline }) => {
  const successTitle = `success-${title}`;
  const successIcon = `success-${icon}`;
  const multilineTitle = `${multiline}`;

  const backgroungTitle = classNames(successTitle, multilineTitle);
  const allClassesIcon = classNames(icon, successIcon);
  return (
    <div className={backgroungTitle}>
      <h4>
        <AiFillCheckCircle className={allClassesIcon} /> Congratulations
      </h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </p>
    </div>
  );
};

export default BannerSuccessTitleText;
