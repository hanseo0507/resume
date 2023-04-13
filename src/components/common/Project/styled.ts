import { StaticImage } from 'gatsby-plugin-image';

import styled from '@emotion/styled';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  @media screen and (max-width: 680px) {
    gap: 2.4rem;
  }
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

  @media screen and (max-width: 680px) {
    svg {
      font-size: 2.8rem !important;
    }
  }
`;

export const ProjectName = styled.h4`
  font-size: 3.2rem;
  margin: 0 0 0.4rem 0;

  @media screen and (max-width: 680px) {
    font-size: 2.8rem;
  }
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

export const ProjectImagesRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 1.2rem;
  border: 1px solid #f0eeee;
  overflow: hidden;
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.95);
  transition: filter 250ms;

  &:hover {
    filter: brightness(1);
  }
`;

export const ProjectImageLeftAmount = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-text-secondary);
`;
