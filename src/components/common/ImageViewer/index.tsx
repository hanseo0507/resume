import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons';

import * as S from './styled';

export interface ImageViewerProps {
  images: string[];
  currentIndex: number;

  onNextPage: () => void;
  onPrevPage: () => void;
  onClose: () => void;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  onNextPage,
  onPrevPage,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <S.ImageViewerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.08 }}
    >
      <S.IconButton onClick={onPrevPage}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </S.IconButton>

      <S.Image src={images[currentIndex]} />

      <S.IconButton onClick={onNextPage}>
        <FontAwesomeIcon icon={faAngleRight} />
      </S.IconButton>

      <S.CloseButton onClick={onClose}>
        <FontAwesomeIcon icon={faClose} />
      </S.CloseButton>
    </S.ImageViewerContainer>
  );
};
