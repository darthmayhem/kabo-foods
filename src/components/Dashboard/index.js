import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import styles from './styles';

const Dashboard = ({ dog }) => {
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

Dashboard.defaultProps = {
  dog: {
    id: 222,
    user_id: 208,
    name: 'this dog ',
    main_breed_id: null,
    secondary_breed_id: null,
    age_range: null,
    gender: 'male',
    neutered: true,
    weight: 50,
    weight_unit: 'lbs',
    body_type: 1,
    activity_level: 1,
    dry_food: null,
    wet_food: null,
    other_food: null,
    dry_food_brand: null,
    wet_food_brand: null,
    other_food_brand: null,
    treats: null,
    food_restriction: null,
    food_restriction_items: null,
    food_restriction_custom: null,
    meal_type: null,
    chargebee_subscription_id: 'AzZlqZSQiGWJoTru',
    recipe: null,
    portion: null,
    breed: 'Not listed or unknown mix',
    chargebee_unit_price: null,
    chargebee_plan_units: null,
    has_custom_plan: null,
    age_in_months: 12,
    portion_adjustment: null,
    kibble_type: null,
    beef_recipe: true,
    chicken_recipe: false,
    turkey_recipe: false,
    kibble_recipe: null,
    cooked_portion: 25,
    kibble_portion: null,
    created_at: '2021-03-04T12:48:36.198-05:00',
    updated_at: '2021-03-04T12:49:07.949-05:00',
    lamb_recipe: false,
    old_breed: null,
    pause_reason: null,
    pause_date: null,
    reactivate_date: null,
    cancel_reason: null,
    cancel_date: null
  },
};

Dashboard.propTypes = {
  dog: PropTypes.object,
};

export default Dashboard;
