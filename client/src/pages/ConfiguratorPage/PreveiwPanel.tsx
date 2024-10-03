import { Box, TextField } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


export default function PreveiwPanel({
  className,
}: {
  className?: string;
}) {

  const dispatch = useAppDispatch()
  const {configuratorBuild} = useAppSelector((state) => state.configuratorBuild)

  return (
    <Box sx={{ bgcolor: 'background.paper' }} className={className}>
      <Box className={styles.imageWrapper}>
        <img src="https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg" />
        <TextField
          id="standard-size-normal"
          value={configuratorBuild.title}
          variant="standard"
        />
      </Box>
    </Box>
  );
}
