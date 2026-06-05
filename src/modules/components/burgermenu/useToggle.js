import { useState } from 'react';

export function useToggle(initial = false) {
  const [active, setActive] = useState(initial);
  const toggle = () => setActive((prev) => !prev);
  return [active, toggle];
}
