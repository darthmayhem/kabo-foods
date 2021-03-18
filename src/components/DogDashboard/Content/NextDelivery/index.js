import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import styles from './styles';
import FoodAvatar from '../../FoodAvatar';

const steps = [
  { title: 'SCHEDULED', text: 'We have your order' },
  { title: 'PREPARING', text: 'We\'re getting things ready' },
  { title: 'DELIVERING', text: 'Your order is out for delivery' },
];

/**
 * searches the steps array and returns the first matching value
 * @param {string} keyName the key to be serached
 * @param {string} keyValue - the value to search for
 * @returns {number} the first matched index
 */
const getStepIndex = (keyName, keyValue) => {
  for (let i = 0; i < steps.length; i++) {
    if (steps[i][keyName] === keyValue) {
      return 1;
    }
  }
  return -1;
};

/**
 * return the active step from the steps array
 * @param {string} status - the string to match
 * @returns {number} - the matching steps index position
 */
const getActiveStep = (status) => {
  if (status.toLowerCase().indexOf('preparing') >= 0) {
    return getStepIndex('title', 'PREPARING');
  }

  if (status.toLowerCase().indexOf('delivering') >= 0) {
    return getStepIndex('title', 'DELIVERING');
  }

  return getStepIndex('title', 'SCHEDULED');
};

/**
 * renders a next delivery component
 * @param {object} dog - the dog data
 * @param {object} subscription - the subscription data
 * @param {object} subscriptionPhase - the subscription data
 * @returns {JSX.Element}
 * @constructor
 */
const NextDelivery = ({ dog, subscription, subscriptionPhase }) => {
  const classes = styles.useStyles();
  const currentStep = getActiveStep(subscriptionPhase.status);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={<img alt="next delivery" className={classes.headerAvatar} src="/assets/icon-upcoming.svg" />}
          disableTypography
          title="Next Delivery"
          action={<IconButton><KeyboardArrowUp /></IconButton>}
        />
        <CardContent>
          <Grid container alignItems="center">
            <Grid item lg={2}>
              <FoodAvatar dog={dog} />
            </Grid>
            <Grid item lg={8}>
              <Typography className={classes.foodName}>{ dog.beef_recipe && 'Savory Beef' }</Typography>
              <Typography>{ dog.beef_recipe && 'Full Meal' }</Typography>
            </Grid>
            <Grid item lg={2}>
              <Typography className={classes.foodName}>
                $
                {parseFloat(subscription.addons[0].unit_price).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Stepper
            activeStep={currentStep}
            orientation="vertical"
            className={classes.stepper}
            connector={(
              <StepConnector
                classes={{
                  line: classes.stepperLine
                }}
              />
            )}
          >
            {steps.map((step, index) => (
              <Step
                key={index}
                classes={{ completed: classes.stepperStepCompleted, active: classes.stepperStepActive }}
              >
                <StepLabel>{steps[index].title}</StepLabel>
                <StepContent>
                  <Typography>{steps[index].text}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          <Grid container>
            <Grid item lg={12}>
              <Button color="primary">Skip this delivery</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

NextDelivery.defaultProps = {
  subscription: {},
  subscriptionPhase: {},
  dog: {},
};

NextDelivery.propTypes = {
  subscription: PropTypes.object,
  subscriptionPhase: PropTypes.object,
  dog: PropTypes.object,
};

export default NextDelivery;
