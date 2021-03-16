import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserSaga } from '../../actions';

import DogDashboard from '../../components/Dashboard';

import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const credentials = useSelector(state => state.authenticationReducer.credentials);
  // const authentication = useSelector(state => state.authenticationReducer.authentication);
  // const user = useSelector(state => state.userReducer.accountData.user);

  useEffect(() => {
    dispatch(getUserSaga(credentials));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {/*<div className={classes.container}>{authentication.email}</div>*/}
      {/*<div className={classes.container}>{authentication.token}</div>*/}
      {/*<div className={classes.container}>{JSON.stringify(user)}</div>*/}

      <DogDashboard />
    </div>
  );
};

export default Dashboard;
