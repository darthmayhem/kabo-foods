import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  container: {
    padding: '51px 44px',
  },
  button: {
    padding: '2px 22px',
  },
  active: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  addLink: {
    color: theme.palette.primary.main,
  }
}));

const useButtonStyles = makeStyles(() => ({
  root: {
    padding: '2px 20px',
    margin: '0 9px',
  },
}));

const HeaderMenuBar = () => {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();

  return (
    <Grid container>
      <Grid item lg={12}>
        <Button variant="contained" classes={buttonClasses} className={classNames(classes.active)}>Dashboard</Button>
        <Button variant="contained" classes={buttonClasses}>Store</Button>
        <Button variant="contained" classes={buttonClasses}>Orders</Button>
        <Button variant="contained" classes={buttonClasses}>Account</Button>
        <Button classes={buttonClasses} startIcon={<AddCircleOutlinedIcon />} className={classNames(classes.addLink)}>
          Add another dog
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeaderMenuBar;
