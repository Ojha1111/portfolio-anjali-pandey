import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
    border: 'none',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 20px rgba(226, 99, 71, 0.4)', // Themed glow
      border: '1px solid #E26347',
      transform: 'scale(1.05)',
    },
    '&:hover $projectDescription': {
      opacity: 1,
      transform: 'translateY(0)',
      height: 'auto', // Ensure content takes space if we want smooth height, though opacity is safer
    },
  },

  projectName: {
    color: 'tomato',
  },
  projectDescription: {
    color: 'rgb(132 29 2 / 1)',
    textAlign: 'justify',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.3s ease-in-out',
  },
  button: {
    backgroundColor: 'rgb(218 218 218)',
  },
  chip: {
    margin: '0.5rem 0.5rem 0 0',
  },
}));
