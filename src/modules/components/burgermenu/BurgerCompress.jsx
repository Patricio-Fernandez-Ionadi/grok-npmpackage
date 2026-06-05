import { useToggle } from './useToggle';
import './_shared.scss';
import './_compress.scss';

export const BurgerCompress = ({ className = '', ...props }) => {
  const [active, toggle] = useToggle();

  return (
    <div className={`icon-menu ${className}`} onClick={toggle} {...props}>
      <div className={`icon-menu__bar${active ? ' icon-menu__bar--compress' : ''}`} />
    </div>
  );
};
