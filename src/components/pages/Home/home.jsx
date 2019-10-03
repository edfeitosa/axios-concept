import React from 'react';

import appClient from '../../../clients/appClient';

const Home = () => {
  appClient.getUsers();
  return (
    <span>home.jsx</span>
  )
}

export default Home;