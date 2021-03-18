import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * render breed icons
 * @param {object} dog - the dog data object
 * @returns {JSX.Element} - the component
 * @constructor
 */
const BreedIcons = ({ dog }) => {
  const classes = styles.useStyles();

  return (
    <Grid container justify="flex-end">
      { dog.main_breed_id === 'puppy' && <img alt="puppy" src="/assets/badge_puppy.svg" className={classes.badge} /> }
      { dog.main_breed_id === 'doodle' && <img alt="doodle" src="/assets/badge_doodle.svg" className={classes.badge} /> }
    </Grid>
  );
};

BreedIcons.defaultProps = {
  dog: {},
};

BreedIcons.propTypes = {
  dog: PropTypes.object,
};

export default BreedIcons;
