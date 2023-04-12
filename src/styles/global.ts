import { css } from '@emotion/react';

export const globalStyle = css`
  :root {
    --color-text-primary: #262626;
    --color-text-secondary: #696973;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    color: var(--color-text-primary);
  }

  body {
    margin: 0;
  }

  #___gatsby {
    max-width: 750px;
    margin: 0 auto;
  }

  html,
  body,
  #___gatsby {
    width: 100%;
  }

  #___gatsby {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    letter-spacing: -0.03em;
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 8px;
      padding: 0 4rem;
    }
  }
`;
