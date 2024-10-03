import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

type DropDownProps = {
  specifications: object;
};

export default function DropDown({ specifications }: DropDownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const specs = Object.entries(specifications);
  return (
    <div>
      <Button onClick={handleClick}>Spec</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {specs.map((spec, i) => (
          <MenuItem key={i}> {`${spec[0]}: ${spec[1]}`}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
