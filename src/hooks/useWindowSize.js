import { breakpoints } from 'constants/theme';
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const isBrowser = typeof window !== 'undefined';
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function update() {
    setIsDesktop(window.innerWidth >= +breakpoints[1]);
    setIsMobile(window.innerWidth < +breakpoints[1] - 0.02);
  }

  useEffect(() => {
    if (isBrowser) {
      update();
      window.addEventListener('resize', update, false);
    }

    return () => {
      isBrowser && window.removeEventListener('resize', update, false);
    };
  }, [isBrowser]);

  return { isDesktop, isMobile };
}
