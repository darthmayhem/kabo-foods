import React from 'react';
import PropTypes from 'prop-types';
import DashboardHeader from './Header';
import DashboardContent from './Content';

const Dashboard = ({ dog }) => (
  <>
    <DashboardHeader dog={dog} />
    <DashboardContent dog={dog} />
  </>
);

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
