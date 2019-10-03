import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <span>
      notFound.jsx
      <Link to='/'>
        <button>Voltar</button>
      </Link>
    </span>
  )
}

export default NotFound;