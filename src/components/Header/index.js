import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import Branding from './Branding';
import MenuBar from './MenuBar';
import ActionBar from './ActionBar';
import { getAuthenticationSaga } from '../../actions';

import styles from './styles';

const Header = () => {
  const classes = styles.useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthenticationSaga({ email: 'dev2@email.com', password: 'password' }));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Grid container>
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
