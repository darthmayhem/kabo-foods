import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Displays a loading indicator with passed text string
 * @param {string} loadingText - the loading text to display
 * @returns {JSX.Element}
 * @constructor
 */
const LoadingIndicator = ({ loadingText }) => {
  const classes = styles.useStyles();

  return (
    <div className={classes.loadingIndicatorContainer}>
      <CircularProgress />
      &nbsp;&nbsp;
      <Typography component="span" variant="h5">{ loadingText }</Typography>
    </div>
  );
};

LoadingIndicator.defaultProps = {
  loadingText: 'Loading...',
};

LoadingIndicator.propTypes = {
  loadingText: PropTypes.string,
};

export default LoadingIndicator;
