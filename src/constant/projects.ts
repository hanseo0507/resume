import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { OrganizationProjectsProps } from 'src/components/common';

export const PROJECTS: OrganizationProjectsProps[] = [
  {
    name: '학생회 한울',
    position: '기능부원, 기능부장',
    startAt: '2022.03',
    projects: [
      {
        name: '학생회 신입부원 모집 사이트',
        description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
        startAt: '2023.03.03',
        finishAt: '2023.03.20',
        skills: ['TypeScript', 'React.js', 'Supabase', 'GraphQL', 'Codegen', 'Apollo'],
        results: [],
        links: [
          { icon: faGlobe, link: 'https://recruit.hanowl.com' },
          { icon: faGithub, link: 'https://github.com/hanowwl/recruit.hanowl.com' },
        ],
      },
      {
        name: '한팀 QR',
        description: "교내 축제의 '번호 경품 추첨'과 '실시간 투표'를 위한 웹서비스",
        startAt: '2023.09.28',
        finishAt: '2023.09.30',
        skills: ['TypeScript', 'React.js', 'Recoil', 'Firebase', 'Sentry'],
        results: [],
        links: [
          { icon: faGlobe, link: 'https://festival.hansei.team' },
          { icon: faGithub, link: 'https://github.com/hansei-team/hansei-team-qr-frontend' },
        ],
      },
      {
        name: '한세톤 웹사이트 (Full-Stack)',
        description: '한세톤(한세고 + 해커톤) 모집 신청 및 결과물 제출을 위한 웹서비스',
        startAt: '2022.06.19',
        finishAt: '2022.07.20',
        skills: ['TypeScript', 'React.js', 'Recoil', 'NestJS'],
        results: [],
        links: [
          { icon: faGithub, link: 'https://github.com/hanowwl/2022-hanseithon-frontend' },
          { icon: faGithub, link: 'https://github.com/hanowwl/2022-hanseithon-backend' },
        ],
      },
    ],
  },
  {
    name: '보안관제 동아리',
    position: '동아리 부장 및 웹보안/개발 담당',
    startAt: '2021.03',
    projects: [
      {
        name: '2022 보안관제 동아리 홈페이지',
        description: '보안관제 동아리 홍보를 위해 홈페이지 개발',
        startAt: '2022.02.16',
        finishAt: '2022.03.07 (이후 유지보수 진행)',
        skills: ['TypeScript', 'Next.js', 'styled-components'],
        results: [],
        links: [
          { icon: faGlobe, link: 'https://hsoc.kr' },
          { icon: faGithub, link: 'https://github.com/hansei-hsoc/hsoc-homepage-2022' },
        ],
      },
      {
        name: 'HISCON CTF 사이트/대시보드',
        description: "워게임에서 'HISCON CTF'로 변경된 이후 2번째 CTF 사이트와 대시보드 개발",
        startAt: '2022.06',
        finishAt: '2022.11',
        skills: ['TypeScript', 'Yarn PnP(+ Workspaces)', 'React.js', ' NestJS', 'Keycloak'],
        results: [],
      },
      {
        name: 'HSOC 워게임 사이트/대시보드',
        description: '교내/외 해킹방어대회를 위한 워게임 사이트 및 대시보드 개발/운영',
        startAt: '2021.03',
        finishAt: '2021.11 ',
        skills: ['TypeScript', 'React.js', 'Redux', 'Express.js', 'Docker API'],
        results: [],
      },
    ],
  },
  {
    name: '코드디씨 동아리',
    position: 'Full-Stack Developer',
    startAt: '2021.03',
    projects: [
      {
        name: 'Hmm v2',
        description: '교내 점심시간 음악 신청 서비스',
        startAt: '2023.01',
        skills: ['TypeScript', 'Monorepo', 'React.js', 'Next.js', 'Stitches'],
        results: [],
        links: [{ icon: faGithub, link: 'https://github.com/team-comma/hmm-frontend-v2' }],
      },
      {
        name: '병주고약주고',
        description: '병든 지구를 위해, 이제는 약을 처방할 시간',
        startAt: '2022.07',
        finishAt: '2022.10',
        skills: ['React Native', 'Mapbox SDK', 'Recoil', 'React-Query'],
        results: [],
        links: [
          { icon: faGithub, link: 'https://github.com/team-comma/kap-frontend-v2' },
          { icon: faGithub, link: 'https://github.com/team-comma/kap-backend-v2' },
        ],
      },
      {
        name: '고잉',
        description: '사회적 약자들을 위한 지도 서비스 (과학기술통신부 장관상 수장작)',
        startAt: '2021.10.02',
        finishAt: '2021.10.18',
        skills: ['TypeScript', 'React Native', 'styled-components', 'Mapbox SDK'],
        results: [],
        links: [{ icon: faGithub, link: 'https://github.com/hanseo0507/going' }],
      },
    ],
  },
  {
    name: '한세 VPN',
    position: 'Frontend Developer',
    startAt: '2022.02',
    projects: [
      {
        name: '한세 VPN v4',
        description: '누적 트래픽 174TB, 재학생부터 교사까지 사용하는 한세 VPN',
        startAt: '2022.02',
        skills: ['TypeScript', 'React.js', 'Monorepo', 'GraphQL', 'Codegen', 'Apollo'],
        results: [
          'JavaScript를 TypeScript로 마이그레이션을 진행했습니다',
          'Storybook 도입으로 컴포넌트를 규격화하고 문서화하였습니다',
        ],
      },
    ],
  },
];