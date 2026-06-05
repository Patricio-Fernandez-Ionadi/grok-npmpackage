import { useToggle } from './useToggle';
import './_shared.scss';
import './_rotate90.scss';

export const BurgerRotate90 = ({ className = '', ...props }) => {
  const [active, toggle] = useToggle();

  return (
    <div className={`icon-menu ${className}`} onClick={toggle} {...props}>
      <div className={`icon-menu__bar${active ? ' icon-menu__bar--rotate90' : ''}`} />
    </div>
  );
};
