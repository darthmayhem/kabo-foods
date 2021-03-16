import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';

import styles from './styles';

const Footer = () => {
  const classes = styles.useStyles();
  const titleClasses = styles.useTitleStyles();

  return (
    <>
      <div className={classes.footerTop}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" classes={titleClasses}>About</Typography>
            <Typography>
              Transition Guide
            </Typography>
            <Typography>
              Our Blog
            </Typography>
            <Typography>
              About Our Food
            </Typography>
            <Typography>
              Press
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" classes={titleClasses}>&nbsp;</Typography>
            <Typography>
              Log In
            </Typography>
            <Typography>
              Read verified reviews on TrustPilot
            </Typography>
            <Typography>
              +1 (844) 543-5226
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" classes={titleClasses}>Questions?</Typography>
            <Typography>
              Email us anytime at help@kabo.co.
            </Typography>
            <Typography>
              We&apos;ll respond within 12 hours.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" classes={titleClasses}>Join our Mailing List</Typography>
            <Typography>
              Get Kabo promotions and healthy feeding advice for your dog!
            </Typography>
            <Grid container className={classes.signUpContainer}>
              <Grid lg={6}>
                <InputBase variant="outlined" className={classes.inputBase} placeholder="Your Email" />
              </Grid>
              <Grid lg={6}>
                <Button variant="outlined" className={classes.submitButton}>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.footerBottom}>
        <Grid container alignItems="center">
          <Grid item md={6}>
            <span className={classes.socialIcon}>
              <FacebookIcon />
            </span>
            <span className={classes.socialIcon}>
              <InstagramIcon />
            </span>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={3}>
                <Typography>
                  Terms of Use
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>
                  Refund Policy
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>
                  Privacy Policy
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>
                  &copy;2021 Kabo Labs
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
