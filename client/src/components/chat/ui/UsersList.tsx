import { AdjustRounded } from '@mui/icons-material';
import { IUser } from '../../../types/types';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

type USersListProps = {
  users: IUser[];
  loggedUser: IUser;
};

export default function UsersList({ users, loggedUser }: USersListProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ mb: '10px' }}>
      {/* <Typography>Users online</Typography>
      {users.map((user: IUser) => (
        <Box
          key={user.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AdjustRounded color="primary" />
          <Typography>
            {user.id !== loggedUser.id ? user.login : 'You'}
          </Typography>
        </Box>
      ))} */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Online
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            cursor: 'cell',
          }}
        >
          {users.map((user: IUser) => (
            <Box
              key={user.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AdjustRounded color="primary" />
              <Typography marginLeft="10px">
               {user.login} {user.id !== loggedUser.id ? null : ' (вы)'}
              </Typography>
            </Box>
          ))}
        </MenuItem>
      </Menu>
    </Box>
  );
}
