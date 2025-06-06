import { useEffect, useState } from 'react';
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from '@mui/material';

//! deleteme
import GPUIcon from './GPUIcon.svg'

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import axiosInstance from '../../../axiosInstance';


export default function ListOfComponents({className}:{className:string}) {
  const [open, setOpen] = useState([false, false, true]);


  const handleExpander = (index: number) => {
   setOpen((prev) => {
    const newPrev = [...prev]
      newPrev[index] = !newPrev[index];
      return newPrev;
    });
  };


  return (
    <Box className={className}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Компоненты
        </ListSubheader>
      }
    >

      <ListItemButton onClick={() => handleExpander(0)}>
        <ListItemIcon>
          <img src="/tk3.png" height="30px" />
        </ListItemIcon>
        <ListItemText primary="Видеокарта" />
        {open[0] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="kek" secondary="efwf" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleExpander(1)}>
        <ListItemIcon>
        <img src="GPUIcon.svg" alt="" />
        </ListItemIcon>
        <ListItemText primary="Процессор" />
        {open[1] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="kek" secondary="efwf" />
          </ListItemButton>
        </List>
      </Collapse>
  
      <ListItemButton onClick={() => handleExpander(2)}>
        <ListItemIcon>
          <img src="/tk3.png" height="30px" />
        </ListItemIcon>
        <ListItemText primary="Охлаждение" />
        {open[2] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open[2]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="kek" secondary="efwf" />
          </ListItemButton>
        </List>
      </Collapse>
  
      <ListItemButton onClick={() => handleExpander(3)}>
        <ListItemIcon>
          <img src="/tk3.png" height="30px" />
        </ListItemIcon>
        <ListItemText primary="Оперативная память" />
        {open[3] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open[4]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="kek" secondary="efwf" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open[4]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="kek" secondary="efwf" />
          </ListItemButton>
        </List>
      </Collapse>


    </List>
    </Box>
  );
}
