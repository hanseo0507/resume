import styled from '@emotion/styled';

export const OrganizationProjectContainer = styled.div`
  display: flex;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 5.2rem;
  }
`;

export const OrganizationInfoWrapper = styled.div`
  max-width: 22rem;
  width: 100%;
  display: flex;
  position: relative;

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`;

export const OrganizationInfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  top: 3.6rem;
  position: sticky;

  @media screen and (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;
  }
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
