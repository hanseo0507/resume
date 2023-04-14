import 'pretendard/dist/web/static/pretendard.css';

import { ImageViewerProvider } from 'src/providers';

export const wrapRootElement = ({ element }) => {
  return <ImageViewerProvider>{element}</ImageViewerProvider>;
};
