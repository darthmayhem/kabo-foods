import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Branding from './Branding';
import HeaderMenuBar from './HeaderMenuBar';
import HeaderActionBar from './HeaderActionBar';

const useStyles = makeStyles(() => ({
  container: {
    padding: '51px 44px',
  },
}));

const Header = ({ notifications }) => {
  console.log(notifications);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item lg={7}>
          <Grid container>
            <Grid item lg={2}>
              <Branding />
            </Grid>
            <Grid item lg={10}>
              <HeaderMenuBar />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5}>
          <HeaderActionBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
