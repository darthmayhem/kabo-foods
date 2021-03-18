import React from 'react';
import Grid from '@material-ui/core/Grid';
import Branding from './Branding';
import MenuBar from './MenuBar';
import ActionBar from './ActionBar';

import styles from './styles';

const Header = () => {
  const classes = styles.useStyles();

  return (
    <div className={classes.container}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item lg={7}>
          <Grid container>
            <Grid item lg={2}>
              <Branding />
            </Grid>
            <Grid item lg={10}>
              <MenuBar />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5}>
          <ActionBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
