import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Stars({value}:{value:number}): JSX.Element {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" size="small" defaultValue={value} precision={0.1} />
    </Stack>
  );
}