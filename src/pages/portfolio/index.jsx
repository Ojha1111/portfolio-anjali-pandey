import {
  Box,
  // Button,
  Card,
  // CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { certifications } from '../../data/data';
import { useStyles } from './styles/portfolio';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Certifications
      </Typography>
      <Grid container justify="center">
        {certifications.map((certification) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={certification.id}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt={certification.name}
                height="140"
                image={certification.image}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.projectName}
                >
                  {certification.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.projectDescription}
                >
                  {certification.description}
                </Typography>
                {certification.tools.map((tool) => (
                  <Chip
                    size="small"
                    label={tool}
                    key={tool}
                    color="secondary"
                    className={classes.chip}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
