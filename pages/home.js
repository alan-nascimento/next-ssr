import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

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
      <img src="../static/lich.jpg" width="200" />
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);
