import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextJS</title>
      </Head>
      <h1>Hello World!</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);
