import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSaga } from '../../actions';
import DogDashboard from '../../components/DogDashboard';
import LoadingIndicator from '../../components/Global/LoadingIndicator';
import useStyles from './styles';

/**
 * renders a home screen component
 * @returns {JSX.Element} - the component
 * @constructor
 */
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const credentials = useSelector(state => state.authenticationReducer.credentials);
  const accountData = useSelector(state => state.userReducer.accountData);

  useEffect(() => {
    dispatch(getUserSaga(credentials));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      { !accountData.dogs ? <LoadingIndicator loadingText="Teaching your dog to fetch..." /> : null }
      { accountData && accountData.dogs && accountData.dogs.map((dog, index) => (
        <DogDashboard
          key={index}
          dog={dog}
          subscription={accountData.subscription}
          subscriptionPhase={accountData.subscription_phase}
        />
      ))}
    </div>
  );
};

export default Home;
