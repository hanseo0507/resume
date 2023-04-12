import React from 'react';

import { HeadFC, PageProps } from 'gatsby';

import * as S from './styled';

const IndexPage: React.FC<PageProps> = () => {
  return <div>Hi, I'm HanSu Lee !</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 이한수</title>;
