import * as React from 'react';
import styles from './MyConfigsPage.module.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import StarsReadOnly from '../../components/StarsReadOnly/StarsReadOnly';
export default function MyConfigsPage(): JSX.Element {
    function createData(
        photo: string,
        name: string,
        price: string,
        update: number,
        rating: JSX.Element,
        moore: string,
      ) {
        return { photo, name, price, update, rating, moore };
      }
      
      const rows = [
        createData('https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-120x0.jpg','№2324456', '268000 Р', 6.0, StarsReadOnly({value: 0.5}), '...'),
        createData('https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-120x0.jpg','№2324456', '268000 Р', 9.0, StarsReadOnly({value: 4.5}), '...'),
      ];
    return (
       <div >
        <Typography className={styles.wrapper} variant="h3" component="h2">Мои конфигурации</Typography>
     <TableContainer className={styles.table} sx={{ maxWidth: 1200 }} component={Paper}>
       <Table  size="small" aria-label="a dense table">
         <TableHead>
           <TableRow>
             <TableCell>Название</TableCell>
             <TableCell>Цена</TableCell>
             <TableCell>Обновлено</TableCell>
             <TableCell>Рейтинг</TableCell>
             <TableCell></TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {rows.map((row) => (
             <TableRow
               key={row.name}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell >
                <img src={row.photo} height='30px'></img>
                {row.name}
                </TableCell>
               <TableCell>{row.price}</TableCell>
               <TableCell>{row.update}</TableCell>
               <TableCell>{row.rating}</TableCell>
               <TableCell>{row.moore}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
     )
 }