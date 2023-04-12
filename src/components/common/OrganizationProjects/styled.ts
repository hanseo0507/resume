import styled from '@emotion/styled';

export const OrganizationProjectContainer = styled.div`
  display: flex;
`;

export const OrganizationInfoContainer = styled.div`
  max-width: 20rem;
  width: 100%;
`;

export const OrganizationRowContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
`;

export const OrganizationName = styled.h3`
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
`;

export const OrganizationPosition = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
  color: var(--color-text-secondary);
`;

export const OrganizationDate = styled.p`
  font-size: 1.6rem;
  color: var(--color-text-secondary);
`;
