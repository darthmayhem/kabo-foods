import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * renders a food avatar
 * @param {object} dog - the dog data
 * @returns {JSX.Element} - the component
 * @constructor
 */
const FoodAvatar = ({ dog }) => {
  const classes = styles.useStyles();

  return (
    <>
      <Grid container>
        { dog.beef_recipe && <Avatar alt="savory beef" src="/assets/food_beef.png" className={classes.avatar} /> }
      </Grid>
    </>
  );
};

FoodAvatar.defaultProps = {
  dog: {},
};

FoodAvatar.propTypes = {
  dog: PropTypes.object,
};

export default FoodAvatar;
