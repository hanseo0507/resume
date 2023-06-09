import React from 'react';

import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
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
        results: [
          '프론트엔드와 데이터베이스 설계 등 전반적인 부분을 담당하였습니다',
          '모집공고 내용을 하드코딩 대신 DB 수정으로 해결할 수 있도록 구현했습니다',
          'GraphQL과 Codegen을 도입해 API 로직을 Hook으로 자동생성하여 생산성을 높였습니다',
        ],
        links: [
          { icon: faGlobe, link: 'https://recruit.hanowl.com' },
          { icon: faGithub, link: 'https://github.com/hanowwl/recruit.hanowl.com' },
        ],
        images: [
          'https://cdn.hansu.im/projects/recruit.hanowl.com/1.webp',
          'https://cdn.hansu.im/projects/recruit.hanowl.com/2.webp',
          'https://cdn.hansu.im/projects/recruit.hanowl.com/3.webp',
          'https://cdn.hansu.im/projects/recruit.hanowl.com/4.webp',
        ],
      },
      {
        name: '한팀 QR',
        description: "교내 축제의 '번호 경품 추첨'과 '실시간 투표'를 위한 웹서비스",
        startAt: '2022.09.28',
        finishAt: '2022.09.30',
        skills: ['TypeScript', 'React.js', 'Recoil', 'Firebase', 'Sentry'],
        results: [
          '3일 내에 개발-배포까지 마무리되는 엄청 촉박한 일정에서 개발했습니다',
          '짧은 시간 내 백엔드 개발보단 Firebase를 도입했습니다',
          '공연 입장과 동시에 서비스에 접속하기 때문에, 빠르고 간편한 "번호 인증 로그인"을 선택하여 구현했습니다',
          '운영 당일 약 5,100회 FE 요청이 있었고, 혹여 발생할 수 있는 에러를 추적하기 위해 Sentry를 도입하고 계속 모니터링을 진행했습니다',
        ],
        links: [
          { icon: faGlobe, link: 'https://festival.hansei.team' },
          { icon: faGithub, link: 'https://github.com/hansei-team/hansei-team-qr-frontend' },
        ],
        images: [
          'https://cdn.hansu.im/projects/hansei-team-qr/splash.webp',
          'https://cdn.hansu.im/projects/hansei-team-qr/login.avif',
          'https://cdn.hansu.im/projects/hansei-team-qr/lottery.webp',
          'https://cdn.hansu.im/projects/hansei-team-qr/vote-1.webp',
          'https://cdn.hansu.im/projects/hansei-team-qr/vote-2.gif',
          'https://cdn.hansu.im/projects/hansei-team-qr/vote-3.webp',
        ],
      },
      {
        name: '한세톤 웹사이트 (Full-Stack)',
        description: '한세톤(한세고 + 해커톤) 모집 신청 및 결과물 제출을 위한 웹서비스',
        startAt: '2022.06.19',
        finishAt: '2022.07.20',
        skills: ['TypeScript', 'React.js', 'Recoil', 'NestJS'],
        results: [
          '프론트와 백엔드, 서비스 배포를 담당하였습니다',
          "작업 했던 기능들 중 '교내 와이파이를 이용한 내부망 인증' 기능이 가장 기억에 남습니다",
          '물리 서버를 이용해 교내 와이파이 네트워크에 접근하고, 내부에서만 접근할 수 있는 페이지와 백엔드 로직을 추가했습니다',
          '협업을 처음하는 팀원들이 많아, Husky와 ESLint를 강력하게 설정해 팀원들이 실수할 걱정 없이 설정에 맞춰 개발할 수 있도록 하였습니다',
        ],
        links: [
          { icon: faGithub, link: 'https://github.com/hanowwl/2022-hanseithon-frontend' },
          { icon: faGithub, link: 'https://github.com/hanowwl/2022-hanseithon-backend' },
        ],
        images: [
          'https://cdn.hansu.im/projects/hanseithon/1.webp',
          'https://cdn.hansu.im/projects/hanseithon/2.webp',
          'https://cdn.hansu.im/projects/hanseithon/3.webp',
          'https://cdn.hansu.im/projects/hanseithon/4.webp',
          'https://cdn.hansu.im/projects/hanseithon/5.webp',
          'https://cdn.hansu.im/projects/hanseithon/6.webp',
          'https://cdn.hansu.im/projects/hanseithon/7.webp',
          'https://cdn.hansu.im/projects/hanseithon/8.webp',
          'https://cdn.hansu.im/projects/hanseithon/9.webp',
          'https://cdn.hansu.im/projects/hanseithon/10.webp',
        ],
      },
    ],
  },
  {
    name: '한세 VPN',
    position: 'Frontend Developer',
    startAt: '2022.02',
    projects: [
      {
        name: '한세 VPN v4 (FE)',
        description: '누적 트래픽 174TB, 재학생부터 교사까지 사용하는 한세 VPN',
        startAt: '2022.02',
        skills: ['TypeScript', 'React.js', 'Monorepo', 'GraphQL', 'Codegen', 'Apollo'],
        results: [
          'JavaScript를 TypeScript로 마이그레이션을 진행했습니다',
          'Storybook 도입으로 컴포넌트를 규격화하고 문서화하였습니다',
          '약 270명의 사용자들이 사용하며, 서비스 확장을 준비하고 있습니다',
        ],
        links: [{ icon: faGlobe, link: 'https://hansei.kr' }],
        images: [
          'https://cdn.hansu.im/projects/hansei-vpn/1.webp',
          'https://cdn.hansu.im/projects/hansei-vpn/2.webp',
          'https://cdn.hansu.im/projects/hansei-vpn/3.webp',
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
        results: ['구글 검색을 통해서도 볼 수 있도록 SEO 작업을 했습니다'],
        links: [
          { icon: faGlobe, link: 'https://hsoc.kr' },
          { icon: faGithub, link: 'https://github.com/hansei-hsoc/hsoc-homepage-2022' },
        ],
        images: [
          'https://cdn.hansu.im/projects/hsoc-homepage/1.webp',
          'https://cdn.hansu.im/projects/hsoc-homepage/2.webp',
          'https://cdn.hansu.im/projects/hsoc-homepage/3.webp',
          'https://cdn.hansu.im/projects/hsoc-homepage/4.webp',
        ],
      },
      {
        name: 'HISCON CTF 사이트/대시보드',
        description: "워게임에서 'HISCON CTF'로 변경된 이후 2번째 CTF 사이트와 대시보드 개발",
        startAt: '2022.06',
        finishAt: '2022.11',
        skills: ['TypeScript', 'Yarn PnP(+ Workspaces)', 'React.js', ' NestJS', 'Keycloak'],
        results: [
          '서비스 개발과 함께 서버 운영/관리도 함께 맡았습니다',
          '서버 네트워크의 여러 보안 이슈들을 개선/해결했습니다',
          '밝힐 수 없는 이유로 인해 업체 대신 동아리 부원과 함께 맡았습니다',
          <>
            이 프로젝트를 진행하며{' '}
            <a
              href="https://github.com/import-js/eslint-import-resolver-typescript/pull/169"
              style={{ color: '#395dff' }}
            >
              eslint-import-resolver-typescript
            </a>{' '}
            이슈를 발견해 기여했습니다
          </>,
        ],
        images: [
          'https://cdn.hansu.im/projects/hiscon-ctf/1.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/2.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/3.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/4.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/5.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/6.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/7.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/8.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/9.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/10.webp',
          'https://cdn.hansu.im/projects/hiscon-ctf/11.webp',
        ],
      },
      {
        name: 'HSOC 워게임 사이트/대시보드',
        description: '교내/외 해킹방어대회를 위한 워게임 사이트 및 대시보드 개발/운영',
        startAt: '2021.03',
        finishAt: '2021.11 ',
        skills: ['TypeScript', 'React.js', 'Redux', 'Express.js', 'Docker API', 'Socket.io'],
        results: [
          "Socket.io를 사용해 서버와 연결된 '웹쉘' 등 약 20페이지 가량의 기능들을 구현했습니다",
          '운영 중 모니터링을 진행하며 악의적은 공격들을 차단하고 실시간으로 대응하는 경험을 쌓을 수 있었습니다',
          '운영 중 발견한 보안 취약점들을 보완하면서, 시큐어 코딩에 대해 관심을 가지게 되는 계기가 되었습니다',
        ],
        images: [
          'https://cdn.hansu.im/projects/hsoc-wargame/1.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/2.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/3.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/4.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/5.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/6.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/7.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/9.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/10.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/11.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/12.webp',
          'https://cdn.hansu.im/projects/hsoc-wargame/13.webp',
        ],
      },
    ],
  },
  {
    name: '코드디씨 동아리',
    position: 'Full-Stack Developer',
    startAt: '2021.03',
    projects: [
      {
        name: 'Hmm v2 (FE)',
        description: '교내 점심시간 음악 신청 서비스 (개발 진행 중)',
        startAt: '2023.01',
        skills: ['TypeScript', 'Monorepo', 'React.js', 'Next.js', 'Stitches'],
        results: [],
        links: [{ icon: faGithub, link: 'https://github.com/team-comma/hmm-frontend-v2' }],
      },
      {
        name: '병주고약주고 (Full-Stack)',
        description: '병든 지구를 위해, 이제는 약을 처방할 시간 (2022 STAC 생활부문 수상작)',
        startAt: '2022.07',
        finishAt: '2022.10',
        skills: ['React Native', 'Mapbox SDK', 'Recoil', 'React-Query', 'NestJS'],
        results: [
          <>
            2022 STAC 개발팀 생활부문에서 <strong>창업진흥원장상(우수상)</strong>을 수상하였습니다
          </>,
        ],
        images: ['https://cdn.hansu.im/projects/kap/1.webp'],
        links: [
          { icon: faGithub, link: 'https://github.com/team-comma/kap-frontend-v2' },
          { icon: faGithub, link: 'https://github.com/team-comma/kap-backend-v2' },
        ],
      },
      {
        name: '고잉 (Full-Stack)',
        description: '사회적 약자들을 위한 지도 서비스 (제3회 한국코드페어해커톤 수상작)',
        startAt: '2021.10.02',
        finishAt: '2021.10.18',
        skills: [
          'TypeScript',
          'React Native',
          'styled-components',
          'Mapbox SDK',
          'NestJS',
          'MongoDB',
        ],
        results: [
          <>
            제 3회 한국코드페어해커톤 고등부에서 <strong>과학기술정보통신부장관상(금상)</strong>을
            수상하였습니다
          </>,
          'Mapbox API를 사용해 지도 기능을 구현했습니다',
          '휠체어 사용자를 위한 길을 안내하고 데이터를 최적화하기 위해 사용자의 길찾기 이동 경로를 수집하고, 저장하여 다시 제공하는 기능을 구현하였습니다',
          '첫 협업으로 git-flow, trunk-flow 같은 Git 전략에 대해 알게 되었습니다 ',
        ],
        images: [
          'https://cdn.hansu.im/projects/going/1.webp',
          'https://cdn.hansu.im/projects/going/2.avif',
          'https://cdn.hansu.im/projects/going/3.avif',
          'https://cdn.hansu.im/projects/going/4.avif',
        ],
        links: [{ icon: faGithub, link: 'https://github.com/hanseo0507/going' }],
      },
    ],
  },
  {
    name: 'MY-SCHOOL.INFO',
    position: '',
    startAt: '2020.11',
    projects: [
      {
        name: 'MY-SCHOOL.INFO (Full-Stack)',
        description: '컴시간 시간표 서비스의 iOS 이용 불편함을 해결하기 위한 서비스',
        startAt: '2020.08',
        finishAt: '2020.08',
        skills: ['JavaScript(ES6)', 'React.js', 'Bootstrap', 'Express.js', 'AWS Amplify'],
        results: [
          '프론트엔드는 AWS Amplify를 사용해 배포하고, 백엔드는 Heroku를 사용해 배포했습니다',
          <>
            comcigan-parser 라이브러리를 수정해,
            <a
              href="https://github.com/my-school-info/comcigan-parser-edited"
              style={{ color: '#395dff' }}
            >
              comcigan-parser-edited
            </a>{' '}
            라이브러리를 배포했습니다
          </>,
        ],
        links: [
          {
            icon: faGithub,
            link: 'https://github.com/my-school-info/my-school-info-frontend-v1',
          },
        ],
        images: [
          'https://cdn.hansu.im/projects/my-school-info/1.webp',
          'https://cdn.hansu.im/projects/my-school-info/2.webp',
          'https://cdn.hansu.im/projects/my-school-info/3.webp',
        ],
      },
      {
        name: '@my-school.info/neis-api',
        description: '나이스 오픈 API TypeScript 라이브러리',
        startAt: '2021.03',
        finishAt: '2021.03',
        skills: ['TypeScript', 'Axios'],
        results: [
          '대부분의 나이스 오픈 API가 JavaScript 라이브러리라 직접 TypeScript 라이브러리를 만들었습니다',
          '4개의 스타와 누적 다운로드 약 5,600회를 기록했습니다',
        ],
        links: [
          {
            icon: faNpm,
            link: 'https://www.npmjs.com/package/@my-school.info/neis-api',
          },
          {
            icon: faGithub,
            link: 'https://github.com/my-school.info',
          },
        ],
      },
    ],
  },
  {
    name: '개인 프로젝트',
    position: '',
    startAt: '',
    projects: [
      {
        name: '@hanseo0507/react-toast',
        description: 'React 토스트 라이브러리',
        startAt: '2022.03',
        skills: ['TypeScript', 'React.js', 'Emotion', 'Framer Motion'],
        results: [
          '매번 react-toastify 라이브러리만 사용하다 새로운 레이아웃의 토스트를 사용하고 싶어 개발하게 되었습니다',
          '첫 릴리즈 이후 일주일만에 스타 20개를 기록했습니다',
        ],
        links: [
          {
            icon: faGithub,
            link: 'https://github.com/hanseo0507/react-toast',
          },
        ],
        images: [
          'https://cdn.hansu.im/projects/react-toast/1.webp',
          'https://cdn.hansu.im/projects/react-toast/2.webp',
        ],
      },
      {
        name: '한세 시간표',
        description: '코로나 시대의 편리한 줌 수업 참여를 위한 웹서비스',
        startAt: '2021.03',
        finishAt: '2021.03',
        skills: ['TypeScript', 'React.js', 'styled-components', 'Deeplink'],
        results: [
          '평소 1분정도 걸리던 줌 수업 참여를 10~30초로 단축하였습니다',
          '줌 딥링크를 사용해 버튼 클릭만으로 줌을 실행할 수 있도록 구현했습니다',
        ],
        links: [
          {
            icon: faGlobe,
            link: 'https://hansei-timetable-v1.vercel.app',
          },
          {
            icon: faGithub,
            link: 'https://github.com/hanseo0507/hansei-timetable',
          },
        ],
        images: [
          'https://cdn.hansu.im/projects/hansei-timetable/1.webp',
          'https://cdn.hansu.im/projects/hansei-timetable/2.webp',
        ],
      },
      {
        name: 'What Is My IP?',
        description: '본인이 사용 중인 IP와 관련 정보를 안내하는 웹서비스',
        startAt: '2020.09',
        finishAt: '2020.09',
        skills: ['JavaScript(ES6)', 'React.js'],
        results: [],
        links: [
          {
            icon: faGlobe,
            link: 'https://hanseo0507.github.io/What-Is-My-IP/',
          },
          {
            icon: faGithub,
            link: 'https://github.com/hanseo0507/What-Is-My-IP',
          },
        ],
        images: ['https://cdn.hansu.im/projects/what-is-my-ip/1.webp'],
      },
    ],
  },
];
