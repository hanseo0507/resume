import React from 'react';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styled';

export interface ProjectProps {
  name: string;
  description: string;

  startAt: string;
  finishAt?: string;
  links?: { icon: IconProp; link: string }[];
  skills?: string[];
  results?: React.ReactNode[];
}

export const Project: React.FC<ProjectProps> = ({
  name,
  description,
  startAt,
  finishAt,
  links = [],
  skills = [],
  results = [],
}) => {
  return (
    <S.ProjectContainer>
      <div>
        <S.ProjectNameColumn>
          <S.ProjectName>{name}</S.ProjectName>

          <S.ProjectIconList>
            {links.map(({ icon, link }, i) => {
              return (
                <Link key={i} to={link} target="_blank">
                  <FontAwesomeIcon icon={icon} style={{ fontSize: '3.2rem' }} />
                </Link>
              );
            })}
          </S.ProjectIconList>
        </S.ProjectNameColumn>
        <S.ProjectDescription>{description}</S.ProjectDescription>

        {startAt && (
          <S.ProjectWorkingDate>
            {startAt} ~ {finishAt}
          </S.ProjectWorkingDate>
        )}
      </div>

      {skills.length > 0 && (
        <div>
          <S.ProjectSectionTitle>사용 기술.</S.ProjectSectionTitle>
          <p>{skills.join(', ')}</p>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <S.ProjectSectionTitle>이런 걸 했어요.</S.ProjectSectionTitle>
          <S.ProjectResultList>
            {results.map((result, i) => (
              <S.ProjectResultItem key={i}>{result}</S.ProjectResultItem>
            ))}
          </S.ProjectResultList>
        </div>
      )}
    </S.ProjectContainer>
  );
};
