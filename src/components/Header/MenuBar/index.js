import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

import styles from './styles';

const MenuBar = () => {
  const classes = styles.useStyles();
  const buttonClasses = styles.useButtonStyles();

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

export default MenuBar;
