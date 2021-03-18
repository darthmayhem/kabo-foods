import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';
import BreedIcons from './BreedIcons';
import DogAvatar from '../DogAvatar';

/**
 * renders a dashboard header component
 * @param {object} dog - the dog data object to display
 * @returns {JSX.Element}
 * @constructor
 */
const DashboardHeader = ({ dog }) => {
  const classes = styles.useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContentRoot}>
          <Grid container alignItems="center">
            <Grid item lg={1}>
              <DogAvatar dog={dog} />
            </Grid>
            <Grid item lg={8}>
              <Typography variant="h5">
                {dog.name.trim()}
                &apos;s Dashboard
              </Typography>
              <Typography variant="subtitle2" color="primary" className={classes.moreLink}>
                Tell us more about
                {' '}
                {dog.name.trim()}
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <BreedIcons dog={dog} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

DashboardHeader.defaultProps = {
  dog: {},
};

DashboardHeader.propTypes = {
  dog: PropTypes.object,
};

export default DashboardHeader;
