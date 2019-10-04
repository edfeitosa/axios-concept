import React from 'react';

import appClient from '../../../clients/appClient';

const Home = () => {
  appClient.getUsers();
  return (
    <span>home.jsx // {process.env.BONUZ_API_URL}</span>
  )
}

export default Home;