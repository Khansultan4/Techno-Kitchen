import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.css'
const MUIstyles = {
  bgcolor: 'background.paper',

};

export default function PreveiwPanel({className}:{className:string}) {
  return (
    <Box
      sx={{bgcolor: 'background.paper'}}
      className={className}
    >
        <Box className={styles.imageWrapper}>
      <img src="https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg" />

        </Box>
    </Box>
  );
}
