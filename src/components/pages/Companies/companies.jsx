import React, { Fragment, useState, useEffect } from 'react';

import appClient from '../../../clients/appClient';
import ListItem from '../../molecules/ListItem/listItem'

const Companies = () => {

  const [companies, setCompanies] = useState([]);

  async function loadData() {
    const response = await appClient.getCompanies();
    setCompanies(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Fragment>
      <h1>Companies</h1>
      {
        companies.map((item, key) => (
          <ListItem
            key={key}
            description='Empresa'
            title={item.name}
            subTitle={item.email} />
        ))
      }
    </Fragment>
  )
}

export default Companies;