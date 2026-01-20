import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles/resume';
import { academicExperience } from '../../data/data';

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h4" align="center" className={classes.heading}>
        Academic Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {academicExperience.map((item) => (
          <React.Fragment key={item.id}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              {item.year}
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {item.role}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.body1}
              >
                 {item.companyName}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.subtitle1}
              >
                {item.description}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Resume;
