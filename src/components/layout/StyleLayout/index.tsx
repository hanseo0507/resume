import React from 'react';

import { Global } from '@emotion/react';

import { globalStyle } from 'src/styles';

export const StyleLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={[globalStyle]} />
      {children}
    </React.Fragment>
  );
};
