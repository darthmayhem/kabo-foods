import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import styles from './styles';

const DashboardHeader = ({ dog }) => {
  const classes = styles.useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContentRoot}>
          <Grid container alignItems="center">
            <Grid item lg={1}>
              <Grid container>
                <Avatar alt={dog.name} src="/assets/dog_image.png" className={classes.avatar} />
              </Grid>
            </Grid>
            <Grid item lg={8}>
              <Typography variant="h5">
                {dog.name}
                &apos;s Dashboard
              </Typography>
              <Typography variant="subtitle2" color="primary" className={classes.moreLink}>
                Tell us more about
                {' '}
                {dog.name}
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <Grid container justify="flex-end">
                <img alt="puppy" src="/assets/badge_puppy.svg" className={classes.badge} />
                <img alt="doodle" src="/assets/badge_doodle.svg" className={classes.badge} />
              </Grid>
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
