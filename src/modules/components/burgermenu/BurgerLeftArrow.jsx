import { useToggle } from './useToggle';
import './_shared.scss';
import './_left-arrow.scss';

export const BurgerLeftArrow = ({ className = '', ...props }) => {
  const [active, toggle] = useToggle();

  return (
    <div className={`icon-menu ${className}`} onClick={toggle} {...props}>
      <div className={`icon-menu__bar${active ? ' icon-menu__bar--left-arrow' : ''}`} />
    </div>
  );
};
