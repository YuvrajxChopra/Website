import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import useStyles from '../styles';

const Testimonial = () => {
  const classes = useStyles();
  const reviews = [
    {
      id: 1,
      name: 'Chrissy Orton',
      statement:
        'Some people may argue that reading books is far more enjoyable and rewarding than watching movies. They believe that books allow for a deeper understanding of characters and plotlines, and stimulate imagination more effectively.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
      position: 'Book Reviewer',
    },
    {
      id: 2,
      name: 'Jenny Bells',
      statement:
        'I don not understand why people like summer I prefer winter, cozy days and fun activities like skiing, finding comfort in a warm drink on a cold day.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'House Wife',
    },
    {
      id: 3,
      name: 'Randy Cena',
      statement:
        'Some argue for a one-state solution to the Israel-Palestine conflict, where Israelis and Palestinians coexist with equal rights in a single democratic state, challenging the common two-state solution.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
      position: 'News Blogger',
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item sm={12} md={4} key={review.id}>
            <Card className={classes.testimonialCard}>
              <CardContent>
                <Typography className={classes.testimonialStatement}>
                  "{review.statement}"
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    src={review.image_url}
                    size="large"
                    className={classes.avatar}
                  />
                  <Box>
                    <Typography>{review.name}</Typography>
                    <Typography className={classes.testimonialPosition}>
                      {review.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;