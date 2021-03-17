import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';

const DashboardContent = ({ dog }) => {
  console.log('dog', dog);
  const classes = styles.useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item lg={4}>&nbsp;</Grid>
      <Grid item lg={4}>&nbsp;</Grid>
      <Grid item lg={4}>&nbsp;</Grid>
    </Grid>
  );
};

DashboardContent.defaultProps = {
  dog: {},
};

DashboardContent.propTypes = {
  dog: PropTypes.object,
};

export default DashboardContent;
