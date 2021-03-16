import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PropTypes from 'prop-types';
import { Badge } from '@material-ui/core';

const HeaderActionBar = ({ notifications, cartItems }) => (
  <Grid container>
    <Grid item lg={12}>
      <Grid container justify="flex-end">
        <IconButton>
          <Badge badgeContent={notifications} color="primary">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={cartItems} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <Button>Logout</Button>
      </Grid>
    </Grid>
  </Grid>
);

HeaderActionBar.defaultProps = {
  notifications: 2,
  cartItems: 2,
};

HeaderActionBar.propTypes = {
  notifications: PropTypes.number,
  cartItems: PropTypes.number,
};

export default HeaderActionBar;
