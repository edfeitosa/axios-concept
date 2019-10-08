import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <span>
      users.jsx
      <Link to='/'>
        <button>Voltar</button>
      </Link>
    </span>
  )
}

export default Users;