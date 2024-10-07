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
import { useRef, memo } from 'react';
import { changeSelectedItems, changeItems } from '../../redux/slices/configuratorBuildSlice';

export default memo(function RadioItemsList({
  type = 'single',
  items,
}: {
  type?: 'single' | 'several';
  items: Array<IItem>;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const { selectedItems } = useAppSelector((state) => state.configuratorBuild);

  const testHandler = () => {
    console.log(selectedItems)
  }

  const form = useRef<HTMLFormElement | null>(null);
  return (
    <Box>
      <button onClick={()=> testHandler()}>click</button>
      <Typography>{items[0]?.Type.title}</Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '2px',
          margin: '20px',
        }}
      >
        <div></div>
        <form id="Form" ref={form}>
          <RadioGroup name="Group">
            {items.map((el) => (
              <FormControlLabel
                key={el.id}
                value={el.id}
                control={<Radio />}
                label={el.title}
                onClick={() => dispatch(changeSelectedItems(el))}
              />
            ))}
          </RadioGroup>
        </form>
      </Box>
    </Box>
  );
}
)