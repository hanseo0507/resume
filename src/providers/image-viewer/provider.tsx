/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { ImageViewer } from 'src/components/common';

export interface ImageViewerProviderContext {
  images: string[];
  showImage: (newImages: string[], startAt: number) => void;
  close: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

export interface ImageViewerProviderProps {
  children?: React.ReactNode;
}

export const ImageViewerContext = React.createContext<ImageViewerProviderContext | null>({
  images: [],
  showImage: () => {},
  close: () => {},
  nextImage: () => {},
  prevImage: () => {},
});

export const ImageViewerProvider: React.FC<ImageViewerProviderProps> = ({ children }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const showImage = (newImages: string[], startAt: number) => {
    setShow(true);
    setImages(newImages);
    setCurrentIndex(startAt);
  };

  const close = useCallback(() => {
    setShow(false);
  }, []);

  const nextImage = useCallback(() => {
    if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, images]);

  const prevImage = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') return close();
      else if (event.key === 'ArrowRight') return nextImage();
      else if (event.key === 'ArrowLeft') return prevImage();
    },
    [close, nextImage, prevImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown);

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, [handleOnKeyDown]);

  return (
    <ImageViewerContext.Provider value={{ images, showImage, close, nextImage, prevImage }}>
      <AnimatePresence>
        {show && (
          <ImageViewer
            currentIndex={currentIndex}
            images={images}
            onNextPage={() => {
              nextImage();
            }}
            onPrevPage={() => {
              prevImage();
            }}
            onClose={() => close()}
          />
        )}
      </AnimatePresence>
      {children}
    </ImageViewerContext.Provider>
  );
};

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (!context) throw new Error('useImageViewer must be used within a ImageViewerProvider');

  return context;
};
