import styled from '@emotion/styled';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const ProjectNameColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectIconList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  a {
    color: var(--color-text-primary);
    text-decoration: none;
  }
`;

export const ProjectName = styled.h4`
  font-size: 3.2rem;
  margin: 0 0 0.4rem 0;
`;

export const ProjectDescription = styled.p`
  margin-bottom: 1.6rem;
  color: var(--color-text-secondary);
`;

export const ProjectWorkingDate = styled.p`
  color: var(--color-text-secondary);
`;

export const ProjectSectionTitle = styled.h5`
  font-size: 2.4rem;
  margin: 0 0 0.8rem 0;
`;

export const ProjectResultList = styled.ul`
  padding: 0 0 0 2rem;

  & > li:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const ProjectResultItem = styled.li``;
