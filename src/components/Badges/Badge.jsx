import classNames from 'classnames';

const Badge = ({ color, pill, square }) => {
  const formPill = `form-${pill}`;
  const formSquare = `form-${square}`;

  const colorAndPill = classNames(color, formPill);
  const colorAndSquare = classNames(color, formSquare);

  return (
    <>
      <div className={colorAndPill}>
        <p>Badge</p>
      </div>
      <div className={colorAndSquare}>
        <p>Badge</p>
      </div>
    </>
  );
};

export default Badge;
