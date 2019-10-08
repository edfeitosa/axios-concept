import React, { useState, useEffect } from 'react';

import appClient from '../../../clients/appClient';

const Home = () => {

  const [users, setUsers] = useState([]);

  async function loadData() {
    const response = await appClient.getUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    loadData();
  },[]);

  return (
    <span>{
      users.map((item, key) => (
        <p key={key}>{item.firstName} {item.lastName}</p>
      ))
    }</span>
  )
}

export default Home;