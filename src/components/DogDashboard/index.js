import React from 'react';
import PropTypes from 'prop-types';
import DashboardHeader from './Header';
import DashboardContent from './Content';

/**
 * renders a dog dashboard
 * @param {object} dog - the dog data object
 * @param {object} subscription - the subscription data object
 * @param {object} subscriptionPhase - the subscriptionPhase data object
 * @returns {JSX.Element} - the component
 * @constructor
 */
const DogDashboard = ({ dog, subscription, subscriptionPhase }) => (
  <>
    <DashboardHeader dog={dog} />
    <DashboardContent dog={dog} subscription={subscription} subscriptionPhase={subscriptionPhase} />
  </>
);

DogDashboard.defaultProps = {
  dog: {},
  subscription: {},
  subscriptionPhase: {},
};

DogDashboard.propTypes = {
  dog: PropTypes.object,
  subscription: PropTypes.object,
  subscriptionPhase: PropTypes.object,
};

export default DogDashboard;
