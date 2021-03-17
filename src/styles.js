import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  siteBody: {
    width: '1440px',
  },
  contentBody: {
    minHeight: 'calc(100vh - 479px)',
  }
}));

export default useStyles;
