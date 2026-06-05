import { useToggle } from './useToggle';
import './_shared.scss';
import './_right-arrow.scss';

export const BurgerRightArrow = ({ className = '', ...props }) => {
  const [active, toggle] = useToggle();

  return (
    <div className={`icon-menu ${className}`} onClick={toggle} {...props}>
      <div className={`icon-menu__bar${active ? ' icon-menu__bar--right-arrow' : ''}`} />
    </div>
  );
};
