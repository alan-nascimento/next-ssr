import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <Title>NextJS</Title>
      </Head>
      <img src="../static/cataclysm.jpg" width="300" />
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);
