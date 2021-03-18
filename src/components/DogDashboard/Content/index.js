import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import NextDelivery from './NextDelivery';
import styles from './styles';

/**
 * render the dashboard content
 * @param {object} dog - the dog data
 * @param {object} subscriptionPhase - the subscription phase data
 * @returns {JSX.Element} - the dashboard component
 * @constructor
 */
const DashboardContent = ({ dog, subscription, subscriptionPhase }) => {
  const classes = styles.useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item lg={4}><NextDelivery dog={dog} subscription={subscription} subscriptionPhase={subscriptionPhase} /></Grid>
      <Grid item lg={4}>&nbsp;</Grid>
      <Grid item lg={4}>&nbsp;</Grid>
    </Grid>
  );
};

DashboardContent.defaultProps = {
  dog: {},
  subscription: {},
  subscriptionPhase: {},
};

DashboardContent.propTypes = {
  dog: PropTypes.object,
  subscription: PropTypes.object,
  subscriptionPhase: PropTypes.object,
};

export default DashboardContent;
