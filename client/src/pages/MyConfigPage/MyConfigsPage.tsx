import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './MyConfigsPage.module.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import StarsReadOnly from '../../components/StarsReadOnly/StarsReadOnly';
import axiosInstance from '../../../axiosInstance';
import { IBuild } from '../../types/types';
import { initBuild } from '../../types/initStates';
import InfoButton from '../../components/InfoButton/InfoButton';
import { useAppSelector } from '../../redux/hooks';
export default function MyConfigsPage(): JSX.Element {

  const [entries, setEntries] = useState <IBuild[]>([initBuild]);
  const {user} = useAppSelector((state) => state.user)
  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/build/byuser/${user.id}`)
      .then((res) => {
        setEntries(res.data);
        console.log('1245',id)
      })
      .catch((err) => console.error(err));
  }, []);
  console.log('124',user.id);
    

      // const rows = entries
      // const avergeScore = entries.reduce((acc,el) => acc + el, 0)/entries.length
      console.log('2121', entries);
      

// console.log('123214', InfoButton);


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
           {entries.map((el) => (
             <TableRow
               key={el.title}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell >
                <img src={el.image} height='30px'></img>
                {el.title}
                </TableCell>
               <TableCell>{el?.Items.reduce((acc, val) => acc + val.price, 0)} ₽</TableCell>
               <TableCell>{el.updatedAt}</TableCell>
               <TableCell><StarsReadOnly value={el.Ratings.reduce((acc,val) => acc + val.score, 0)/el.Ratings.length} /></TableCell>
               <TableCell> <InfoButton id={el.id}/></TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
     )
 }