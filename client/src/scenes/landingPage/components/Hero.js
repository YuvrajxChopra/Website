import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import worldCon from '../images/worldCon.jpg';
import useStyles from '../styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Where Your Thoughts Find Their Voice
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            A social media platform championing free speech and empowering bold opinions, connecting you to the world.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            component={Link} to="/auth" // Add this line
          >
            Start Now
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={worldCon} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
