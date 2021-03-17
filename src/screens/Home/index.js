import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserSaga } from '../../actions';
import DogDashboard from '../../components/DogDashboard';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const credentials = useSelector(state => state.authenticationReducer.credentials);

  useEffect(() => {
    dispatch(getUserSaga(credentials));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <DogDashboard />
    </div>
  );
};

export default Home;
