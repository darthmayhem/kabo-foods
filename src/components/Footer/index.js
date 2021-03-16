import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';

const useStyles = makeStyles(theme => ({
  footerTop: {
    background: theme.palette.primary.main,
    padding: '60px 175px',
    color: 'white',
  },
  footerTopTitle: {
    fontSize: '20px',
    weight: 700,
    lineHeight: '28px',
    paddingBottom: '20px',
  },
  footerBottom: {
    padding: '30px 175px',
    background: theme.palette.primary.dark,
    color: 'white',
  },
  socialIcon: {
    padding: '0 6px',
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerTop}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Typography className={classes.footerTopTitle}>About</Typography>
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
            <Typography className={classes.footerTopTitle}>&nbsp;</Typography>
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
            <Typography className={classes.footerTopTitle}>Questions?</Typography>
            <Typography>
              Email us anytime at help@kabo.co.
            </Typography>
            <Typography>
              We&apos;ll respond within 12 hours.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.footerTopTitle}>Join our Mailing List</Typography>
            <Typography>
              Get Kabo promotions and healthy feeding advice for your dog!
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.footerBottom}>
        <Grid container>
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
