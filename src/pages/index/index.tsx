import React from 'react';

import { HeadFC, PageProps } from 'gatsby';

import { StyleLayout } from 'src/components/layout';
import { Counter } from 'src/components/common';

import * as S from './styled';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <StyleLayout>
      <S.IntroduceSection>
        <S.SectionTitle>
          월 <Counter from={0} to={2300} duration={0.7} />만 다운로드 라이브러리 <br />
          컨트리뷰터, FE 개발자 이한수입니다.
        </S.SectionTitle>

        <S.SectionText>
          개발 입문부터 월 2300만 다운로드 컨트리뷰터까지,
          <br />
          사용자 경험에 관심이 많으며, 더 나은 경험을 제공하기 위해 항상 고민합니다
        </S.SectionText>
      </S.IntroduceSection>
    </StyleLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 이한수</title>;
