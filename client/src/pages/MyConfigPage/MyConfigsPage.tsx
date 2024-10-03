import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './MyConfigsPage.module.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import StarsReadOnly from '../../components/StarsReadOnly/StarsReadOnly';
import axiosInstance from '../../../axiosInstance';
import { IBuild } from '../../types/types';
import { initBuild } from '../../types/initStates';
export default function MyConfigsPage(): JSX.Element {

  const [entries, setEntries] = useState <IBuild[]>([initBuild]);
  
  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/build/all`)
      .then((res) => {
        setEntries(res.data);
        console.log('1245',res.data)
      })
      .catch((err) => console.error(err));
  }, []);
  console.log('124',typeof entries[0]?.updatedAt);
    
  function createData(
        photo: string,
        name: string,
        price: string,
        update: string,
        rating: JSX.Element,
        moore: string,
      ) {
        return { photo, name, price, update, rating, moore };
      }
      // const rows = entries
      // const avergeScore = entries.reduce((acc,el) => acc + el, 0)/entries.length
      console.log('2121', entries);
      
      const rows = entries.map((el) => 
        createData(el.image,el.title, '268000 Р', el.updatedAt, StarsReadOnly({value: el.Ratings.reduce((acc,val) => acc + val.score, 0)/el.Ratings.length}), '...'),
      )



    return (
       <div >
        <Typography textAlign={'center'} className={styles.wrapper} variant="h3" component="h2">Мои конфигурации</Typography>
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