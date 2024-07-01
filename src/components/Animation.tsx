import { useState, useEffect } from 'react';
import { frames } from './Frames.js';

interface Props {
  Animation: boolean;
  tabIndex: number;
  mediaquery: boolean;
}

export function PhoneMotion({ Animation, tabIndex, mediaquery }: Props) {
  const [Index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(tabIndex);
    }, 500);
    return () => clearTimeout(timer);
  }, [tabIndex]);

  return frames[Index]({ Animation, mediaquery });
}