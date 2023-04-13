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
  images?: string[];
}

export const Project: React.FC<ProjectProps> = ({
  name,
  description,
  startAt,
  finishAt,
  links = [],
  skills = [],
  results = [],
  images = [],
}) => {
  const IMG_MAX_RENDER_AMOUNT = 4;

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

      <S.ProjectImagesRow>
        {images.slice(0, IMG_MAX_RENDER_AMOUNT).map((image, i, arr) => {
          const isLastItem = arr.length - 1 === i;
          const isHaveMoreImages = images.length > IMG_MAX_RENDER_AMOUNT;
          const leftAmount = images.length - IMG_MAX_RENDER_AMOUNT;

          return (
            <S.ProjectImageWrapper key={i}>
              <S.ProjectImage src={image} />
              {isLastItem && isHaveMoreImages && (
                <S.ProjectImageLeftAmount>+{leftAmount}</S.ProjectImageLeftAmount>
              )}
            </S.ProjectImageWrapper>
          );
        })}
      </S.ProjectImagesRow>
    </S.ProjectContainer>
  );
};
