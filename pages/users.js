import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

const User = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.login}
            <Link href={`/users/${user.login}`}>
              <a>Access Profile</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/facebook/members'
  );

  return { users: response.data };
};

export default withAnalytics()(User);
