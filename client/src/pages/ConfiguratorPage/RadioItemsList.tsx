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

export default memo(function RadioItemsList({
  type = 'single',
  items,
}: {
  type?: 'single' | 'several';
  items: Array<IItem>;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const { selectedItems } = useAppSelector((state) => state.configuratorBuild);

  const form = useRef<HTMLFormElement | null>(null);

  const testHandler = () => {
    const formData = form.current
      ? new FormData(form.current as HTMLFormElement).getAll('Radio')
      : [];
    console.log('formData',
      formData.map((el) => items.find((el2) => el2.id == Number(el)))
    );
    console.log('selected', selectedItems)
  };

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
    <Box>
      <Typography>{items[0]?.Type.title}</Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '2px',
          margin: '20px',
        }}
      >
        {type === 'single' ? (
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
              return (
                <FormControlLabel
                  key={el.id}
                  label={el.title}
                  name="Radio"
                  control={
                    <Checkbox
                      icon={<Radio checked={false} name={String(el.id)} />}
                      checkedIcon={
                        <Radio checked={true} name={String(el.id)} />
                      }
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
