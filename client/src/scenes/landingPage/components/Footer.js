import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles';

const Footer = () => {
  //const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'gray' }} className={classes.footerContainer} >
      <Typography className={classes.footerText}>
        Provided by{' '}
        <Link href="http://localhost:3000/://" target="_blank" underline="none">
          whisper.web
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>Copyright by Boys - 2023</Typography>
    </Box>
  );
};

export default Footer;