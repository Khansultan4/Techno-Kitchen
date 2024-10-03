import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { IItem } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useRef } from 'react';

export default function RadioItemsList({type = 'single', items}: {type?: 'single' | 'several', items: Array<IItem>}):JSX.Element {
  const dispatch = useAppDispatch()
  const {selectedItems} = useAppSelector((state) => state.configuratorBuild)
  const form = useRef()
  return (
    <Box>
      <Typography>{items[0]?.Type.title}</Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '2px',
          margin: '20px',
        }}
      >
        <FormControl id="Form">
          <RadioGroup name="Group">
            {items.map((el) => (
              <FormControlLabel
                key={el.id}
                value={el.id}
                control={<Radio />}
                label={el.title}
                onSelect={() => console.log(123)}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
