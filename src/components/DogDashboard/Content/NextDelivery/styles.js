import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #D7E4E0',
    borderRadius: '10px',
    boxShadow: '0px 4px 28px rgba(0, 0, 0, 0.04)',
  },
  header: {
    backgroundColor: theme.palette.grey.light
  },
  headerAvatar: {
    height: 30,
    width: 30,
  },
  headerText: {
    fontFamily: 'Cooper BT',
    fontSize: 20,
    fontWeight: 300,
  },
  foodName: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  stepper: {
    paddingTop: '50px',
  },
  stepperStepActive: {

  },
  stepperStepCompleted: {
    // color: theme.palette.primary.main,
    // backgroundColor: theme.palette.primary.main,
  },
  stepperLine: {
    position: 'relative',
    left: -4,
    width: 10,
    height: 80,
    border: 0,
    backgroundColor: 'rgba(35, 156, 109, 0.13)',
    borderRadius: 8,
  }
}));

export default { useStyles };
