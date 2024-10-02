import { styled, alpha } from '@mui/material/styles';
import Navsearch from './Navsearch'
import {AppBar, Button, Box, Toolbar, IconButton, Typography, InputBase} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// export default function Navbar() {
//   return (
//     <div>Navbar</div>
  
//   )
// }



export default function Navbar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

           

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Techno-Kitchen
          </Typography>
          
          <Button
          variant='text'
          sx={{ml: 2}}>
            Конфигуратор
          </Button>
          
          <Navsearch/>
          <Button
          variant='contained'
          sx={{ml: 2}}>
            Личный кабинет
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
