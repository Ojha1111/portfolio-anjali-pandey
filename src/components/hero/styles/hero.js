import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1200px', // constrain width
    textAlign: 'center',
    zIndex: 1,
    padding: '0 2rem', // Add padding
  },
  dividerStub: {
    width: '0%', // Start width
    height: '2px',
    backgroundColor: 'tomato',
    margin: '1.5rem auto', // Centered with spacing
    animation: '$expandLine 1.5s forwards', // Animate width
    animationDelay: '1s', // Delay to appear after typed text
  },
  summaryText: {
    color: 'tan',
    fontSize: '1.25rem', // Slightly larger size
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center', // Explicitly center the text
    opacity: 0,
    animation: '$fadeIn 1s forwards',
    animationDelay: '2s',
  },
  '@keyframes expandLine': {
    to: { width: '50%' }, // Expand to 50% width
  },
  '@keyframes fadeIn': {
    to: { opacity: 1 },
  },
}));
