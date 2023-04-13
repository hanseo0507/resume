import React, { useEffect, useState } from 'react';

import * as S from './styled';

export const ScrollProgressBar: React.FC = () => {
  const [width, setWidth] = useState<number>(100);

  const handleOnScroll = (event: Event) => {
    const { scrollTop, scrollHeight, clientHeight, clientWidth } = document.documentElement;
    if (scrollTop === 0) return setWidth(100);

    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = 100 - (scrollTop / windowHeight) * 100;
    setWidth(currentPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  return (
    <S.ScrollProgressBarContainer>
      <S.ProgressLeftBar style={{ width: `${width}%` }} />
    </S.ScrollProgressBarContainer>
  );
};
