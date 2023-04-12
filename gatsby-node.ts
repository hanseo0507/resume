import type { GatsbyNode } from 'gatsby';

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  return new Promise((resolve) => {
    if (page.component === `${__dirname}/src/pages/index/index.tsx`) {
      deletePage(page);
      createPage({ ...page, path: '/' });
    }

    resolve();
  });
};
