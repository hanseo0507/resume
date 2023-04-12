import React from 'react';

import { Project, ProjectProps } from '../Project';

import * as S from './styled';

export interface OrganizationProjectsProps {
  name: string;
  position: string;

  startAt: string;
  finishAt?: string;
  projects: ProjectProps[];
}

export const OrganizationProjects: React.FC<OrganizationProjectsProps> = ({
  name,
  position,
  startAt,
  finishAt,
  projects,
}) => {
  return (
    <S.OrganizationProjectContainer>
      <S.OrganizationInfoWrapper>
        <S.OrganizationInfoContainer>
          <S.OrganizationName>{name}</S.OrganizationName>
          <S.OrganizationPosition>{position}</S.OrganizationPosition>
          <S.OrganizationDate>
            {startAt} ~ {finishAt}
          </S.OrganizationDate>
        </S.OrganizationInfoContainer>
      </S.OrganizationInfoWrapper>
      <S.OrganizationRowContainer>
        {projects.map((props, i) => (
          <Project key={i} {...props} />
        ))}
      </S.OrganizationRowContainer>
    </S.OrganizationProjectContainer>
  );
};
