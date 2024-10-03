import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { IItem } from '../../types/types';

export default function RadioItemsList({type = 'single', items}: {type?: 'single' | 'several', items: Array<IItem>}):JSX.Element {
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
        <FormControl id="CPUForm">
          <RadioGroup name="GPUGroup">
            {items.map((el) => (
              <FormControlLabel
                key={el.id}
                value={el.id}
                control={<Radio />}
                label={el.title}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
