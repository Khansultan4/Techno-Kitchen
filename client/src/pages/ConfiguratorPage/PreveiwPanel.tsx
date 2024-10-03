import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.css';
import { IConfiguratorBuild } from '../../types/types';
import { initConfiguratorBuild } from '../../redux/initStates/initStates';
const MUIstyles = {
  bgcolor: 'background.paper',
};

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
          value={currentBuild.title}
          variant="standard"
          onChange={}
        />
      </Box>
    </Box>
  );
}
