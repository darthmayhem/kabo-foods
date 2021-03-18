import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * renders a dog avatar
 * @param {object} dog - the dog data
 * @returns {JSX.Element} - the component
 * @constructor
 */
const DogAvatar = ({ dog }) => {
  const classes = styles.useStyles();

  return (
    <>
      <Grid container>
        <Avatar alt={dog.name} src="/assets/dog_image.png" className={classes.avatar} />
      </Grid>
    </>
  );
};

DogAvatar.defaultProps = {
  dog: {},
};

DogAvatar.propTypes = {
  dog: PropTypes.object,
};

export default DogAvatar;
