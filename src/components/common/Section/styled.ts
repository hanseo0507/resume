import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 2.4rem 0;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin: 0 0 3.6rem 0;
`;

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '5.6rem'};
`;
