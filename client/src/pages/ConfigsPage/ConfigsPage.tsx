import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './ConfigsPage.module.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import StarsReadOnly from '../../components/Stars/StarsReadOnly';
import axiosInstance from '../../../axiosInstance';
import { IBuild } from '../../types/types';
import { initBuild } from '../../types/initStates';
import InfoButton from '../../components/Buttons/InfoButton';
import FormModal from '../../ui/Modal';
import ConfigModal from '../../components/ConfigsModal/ConfigsModal';
import ConfigInfo from '../../components/ConfigInfo/ConfigInfo';
export default function ConfigsPage(): JSX.Element {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const [entries, setEntries] = useState<IBuild[]>([initBuild]);
  
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
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

      // const rows = entries
      // const avergeScore = entries.reduce((acc,el) => acc + el, 0)/entries.length
      console.log('2121', entries);
      

// console.log('123214', InfoButton);


    return (
       <div >
        <Typography textAlign={'center'} className={styles.wrapper} variant="h3" component="h2">Конфигурации</Typography>
        <Paper  sx={{ maxWidth: 1200, margin: 'auto' }}>

        <TableContainer className={styles.table} sx={{ width: '98%', margin: 'auto' }} >
       <Table  size="medium" aria-label="a dense table">
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
           {entries.map((el) => {
            console.log('внутри map', el)
            return (
             <TableRow
               key={el.title}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell >
                <div>
                {el.title}
                </div>
                <img src={el.image} height='40px'></img>
                </TableCell>
               <TableCell>{el?.Items.reduce((acc, val) => acc + val.price, 0)} ₽</TableCell>
               <TableCell>{formatDate(el.updatedAt)}</TableCell>
               <TableCell><StarsReadOnly value={el.Ratings.reduce((acc,val) => acc + val.score, 0)/el.Ratings.length} /></TableCell>
               <TableCell>  
                <ConfigInfo id = {el.id} entries={el.Items}></ConfigInfo>
                </TableCell>
             </TableRow>
           )})}
         </TableBody>
       </Table>
     </TableContainer>
        </Paper>
     </div>
     )
 }
