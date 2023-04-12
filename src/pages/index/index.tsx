import React from 'react';

import { HeadFC, PageProps } from 'gatsby';

import { StyleLayout } from 'src/components/layout';

import * as S from './styled';

const IndexPage: React.FC<PageProps> = () => {
  return <StyleLayout>Hi, I'm HanSu Lee !</StyleLayout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 이한수</title>;
