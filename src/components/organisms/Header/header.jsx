import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar
} from '@material-ui/core';

import styles from './styles';
const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.formattedHeader}>
      <Toolbar>
        <p>header.jsx</p>
      </Toolbar>
    </AppBar>
  )
}

export default Header;