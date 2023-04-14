import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ImageViewerContainer = styled(motion.div)`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
`;

export const Image = styled.img`
  width: 60%;
  height: auto;
  user-select: none;
  border-radius: 1rem;
`;

export const IconButton = styled.button`
  border: none;
  outline: none;
  background: white;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseButton = styled(IconButton)`
  top: 2rem;
  right: 2rem;
  position: absolute;
  background: none;
`;
