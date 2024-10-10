import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { IItem } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useRef, memo } from 'react';
import {
  changeSelectedItems,
  changeSeveralSelectedImes,
} from '../../redux/slices/configuratorBuildSlice';
import { initItem } from '../../types/initStates';
import {priceSeparator} from '../../utils/functions'

const RadioContent = ({ item }: { item: IItem }): JSX.Element => {
  return item.price ? (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%',
     }}>
      <Typography variant='body2'>{item.title}</Typography>
      <Typography variant='body2' color='primary.dark'>{priceSeparator(item.price)} ₽</Typography>
    </Box>
  ) : (
    <p />
  );
};

export default memo(function RadioItemsList({
  type = 'single',
  items,
}: {
  type?: 'single' | 'several';
  items: Array<IItem>;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const form = useRef<HTMLFormElement | null>(null);

  const severalSelectHandler = (): IItem[] => {
    const formData = form.current
      ? new FormData(form.current as HTMLFormElement).getAll('Radio')
      : [];
    const result = formData
      .map((el) => items.find((el2) => el2.id == Number(el)))
      .filter((el) => el !== undefined);
    return result.some((el) => 'TypeId' in el) ? result : [initItem];
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        m: '20px 0 0 30px',
        p: '15px 0 1px 20px',
        borderRadius: '10px',
      }}
    >
      <Typography>{items[0]?.Type.title}</Typography>
      <Box
        sx={{
          borderRadius: '2px',
          margin: '5px',
        }}
      >
        {type === 'single' ? (
          <form id="Form" ref={form}>
            <RadioGroup name="Group">
              {items.map((el) => (
                <FormControlLabel
                  sx={{ m: '5px 0' }}
                  key={el.id}
                  value={el.id}
                  control={<Radio />}
                  label={<RadioContent item={el} />}
                  onClick={() => dispatch(changeSelectedItems(el))}
                />
              ))}
            </RadioGroup>
          </form>
        ) : (
          <form
            id="Form"
            ref={form}
            name="Group"
            onChange={() => {
              dispatch(changeSeveralSelectedImes(severalSelectHandler()));
            }}
          >
            <RadioGroup>
              {items.map((el) => {
                const RadioElement = ({ checked }: { checked: boolean }) => (
                  <Radio checked={checked} name={String(el.id)} />
                );
                return (
                  <FormControlLabel
                    key={el.id}
                    label={<RadioContent item={el} />} 
                    name="Radio"
                    control={
                      <Checkbox
                        icon={<RadioElement checked={false} />}
                        checkedIcon={<RadioElement checked={true} />}
                        key={el.id}
                        value={el.id}
                      />
                    }
                  />
                );
              })}
            </RadioGroup>
          </form>
        )}
      </Box>
    </Box>
  );
});
