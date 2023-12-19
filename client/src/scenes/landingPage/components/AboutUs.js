import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import boyPost from '../images/boyPost.jpg';
import useStyles from '../styles';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={boyPost} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Whisper.Web
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
          Whisper.Web is designed to be a haven for uncensored, unfiltered, and often unheard voices from around the globe. It’s a platform where users can share their unpopular opinions, intriguing theories, and unique perspectives without fear of censorship. It’s not just about sharing thoughts; it’s about sparking conversations, challenging norms, and fostering understanding. Whisper.Web aims to break down barriers and create a space where everyone, regardless of their background or beliefs, can have their say and be heard.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;