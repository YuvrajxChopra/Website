import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Drawer,
} from '@mui/material';
import React from 'react';
//import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  /*const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? props.window() : undefined,
  });*/

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <AppBar sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : 'white' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Arial', color: '#00D5FA' }}>
            whisper.web
          </Typography>

          {matches ? (
            <Box>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer('right', true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={state['right']}
                onClose={toggleDrawer('right', false)}
              >
                {/* Drawer content */}
              </Drawer>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexGrow: '0.1',
              }}
            >
              {/* Add other components or links if needed */}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
