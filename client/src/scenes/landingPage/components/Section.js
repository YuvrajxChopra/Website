import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import useStyles from '../styles';

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <RecordVoiceOverIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Whisper.web offers a platform for free speech and bold opinions',
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Connect with like-minded individuals, share your opionions and build your network',
    },
    {
      id: 3,
      icon: <FingerprintIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'We respect user privacy and ensure data security, No data is shared with 3rd party.',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
            sx={{ backgroundColor: 'gray' }}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;