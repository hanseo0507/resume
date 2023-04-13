import React from 'react';

import { Global } from '@emotion/react';

import { globalStyle } from 'src/styles';
import { ScrollProgressBar } from 'src/components/common';

export const StyleLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={[globalStyle]} />
      <ScrollProgressBar />
      {children}
    </React.Fragment>
  );
};
