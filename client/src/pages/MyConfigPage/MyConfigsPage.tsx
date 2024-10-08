import { useState, useEffect } from 'react';
import styles from './MyConfigsPage.module.css';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import StarsReadOnly from '../../components/Stars/StarsReadOnly';
import axiosInstance from '../../../axiosInstance';
import { IBuild } from '../../types/types';
import { initBuild } from '../../types/initStates';
import { useAppSelector } from '../../redux/hooks';
import ConfigInfo from '../../components/ConfigInfo/ConfigInfo';

export default function MyConfigsPage(): JSX.Element {
  const [entries, setEntries] = useState<IBuild[]>([initBuild]);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log('123214',user.id);
    
    axiosInstance
      .get(`${import.meta.env.VITE_API}/build/byuser/${user.id}`)
      .then((res) => {
        setEntries(res.data);
      })
      .catch((err) => console.error(err));
  }, [user.id]);
  
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


  console.log('2121', user.id);

  return (
    <div >
    <Typography textAlign={'center'} className={styles.wrapper} variant="h3" margin='30px' component="h2">Конфигурации</Typography>
    <Paper  sx={{ maxWidth: 1200, margin: 'auto', marginBottom:'100px' }}>

    <TableContainer className={styles.table} sx={{ width: '98%', margin: 'auto' }} >
   <Table  size="medium" aria-label="a dense table">
     <TableHead>
       <TableRow>
         <TableCell>Название</TableCell>
         <TableCell>Цена</TableCell>
         <TableCell>Обновлено</TableCell>
         <TableCell sx={{ maxWidth: '100px'}}>Рейтинг</TableCell>
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
           <TableCell>
            <div className={styles.name}>
            <img className={styles.image} src={el.image} height='40px'></img>
            <div className={styles.text}>{el.title}</div>
            </div>
            </TableCell>
           <TableCell>{el?.Items.reduce((acc, val) => acc + val.price, 0)} ₽</TableCell>
           <TableCell>{formatDate(el.updatedAt)}</TableCell>
           <TableCell sx={{ maxWidth: '100px'}}>
            <div className={styles.rating}>
              <div className={styles.info}>
          <StarsReadOnly value={el.Ratings.reduce((acc,val) => acc + val.score, 0)/el.Ratings.length} />
            </div>
            <div >
           <ConfigInfo id = {el.id} entries={el.Items}></ConfigInfo>
           </div>
           </div>
           </TableCell>
           {/* <TableCell>  
            <ConfigInfo id = {el.id} entries={el.Items}></ConfigInfo>
            </TableCell> */}
         </TableRow>
       )})}
     </TableBody>
   </Table>
 </TableContainer>
    </Paper>
 </div>
  );
}
