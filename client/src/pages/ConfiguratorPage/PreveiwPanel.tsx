import { Box, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeTitle } from '../../redux/slices/configuratorBuildSlice';


export default function PreveiwPanel({
  className,
  currentBuild,
}: {
  className?: string;
  currentBuild: IConfiguratorBuild;
}) {
  return (
    <Box sx={{ bgcolor: 'background.paper' }} className={className}>
      <Box className={styles.imageWrapper}>
        <img src="https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg" />
        <TextField
          id="standard-size-normal"
          defaultValue={configuratorBuild.title}
          variant="standard"
          />
         </Box>

         <Box>
          <Typography>
            
          </Typography>
         </Box>
    </Box>
  );
}
