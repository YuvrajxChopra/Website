import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D5FA',
    },
  },
});

function App() {
  const [darkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : undefined}>
        <CssBaseline />
        <Header />
        <Hero />
        <Section />
        <AboutUs />
        <Testimonial />
        <ContactUs />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
