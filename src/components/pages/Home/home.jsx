import React, { useState, useEffect } from 'react';

import appClient from '../../../clients/appClient';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await appClient.getUsers();
      setUsers(response.data);
    }
    loadData();
  },[]);
  return (
    <span>{
      users.map((item, key) => (
        <p key={key}>{item.firstName}</p>
      ))
    }</span>
  )
}

export default Home;