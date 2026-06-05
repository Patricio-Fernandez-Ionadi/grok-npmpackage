import { useToggle } from './useToggle';
import './_shared.scss';
import './_plus.scss';

export const BurgerPlus = ({ className = '', ...props }) => {
  const [active, toggle] = useToggle();

  return (
    <div className={`icon-menu ${className}`} onClick={toggle} {...props}>
      <div className={`icon-menu__bar${active ? ' icon-menu__bar--plus' : ''}`} />
    </div>
  );
};
