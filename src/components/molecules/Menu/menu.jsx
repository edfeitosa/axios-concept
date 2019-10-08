import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LinkMenu from '../../atoms/LinkMenu/linkMenu';
import styles from './styles';

const useStyles = makeStyles(styles);

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <LinkMenu href='/home' title='Home' />
      <LinkMenu href='/users' title='Users' />
      <LinkMenu href='/companies' title='Companies' />
      <LinkMenu href='/cities' title='Cities' />
      <LinkMenu href='/states' title='States' />
    </div>
  )
}

export default Menu;