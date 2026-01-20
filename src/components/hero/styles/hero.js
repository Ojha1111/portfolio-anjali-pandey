import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  title: {
    color: 'tomato',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1200px',
    textAlign: 'center',
    zIndex: 1,
    padding: '0 1rem',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      top: '0%',
      left: '0%',
      transform: 'none',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 1rem',
      overflowY: 'auto',
    },
  },
  dividerStub: {
    width: '0%',
    height: '2px',
    backgroundColor: 'tomato',
    margin: '1.5rem auto',
    animation: '$expandLine 1.5s forwards',
    animationDelay: '1s',
  },
  summaryText: {
    color: 'tan',
    fontSize: '1.25rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    opacity: 0,
    animation: '$fadeIn 1s forwards',
    animationDelay: '2s',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      paddingBottom: '2rem',
    },
  },
  '@keyframes expandLine': {
    to: { width: '50%' },
  },
  '@keyframes fadeIn': {
    to: { opacity: 1 },
  },
}));
