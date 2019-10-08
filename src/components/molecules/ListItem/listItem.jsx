import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const ListItem = ({
  description,
  title,
  subTitle
}) => {
  const classes = useStyles();
  return (
    <div className={classes.listItem}>
      <div className={classes.description}>{description}</div>
      {title}
      <div className={classes.subtitle}>{subTitle}</div>
    </div>
  )
}

ListItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string
}

ListItem.defaultProps = {
  description: ''
}

export default ListItem;