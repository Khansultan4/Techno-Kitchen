import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavigateFunction, useNavigate} from 'react-router-dom';

export default function InfoButton({id}:{id:number}): JSX.Element {
const navigate: NavigateFunction = useNavigate();
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button onClick={() => navigate(`/Config/${id}`)} size="small">...</Button>
      </div>
    </Box>
  );
}