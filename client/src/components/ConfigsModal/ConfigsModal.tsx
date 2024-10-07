import {
    Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { IItem } from '../../types/types';
import InfoButton from '../../components/Buttons/InfoButton';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styles from './ConfigsModal.module.css';

export default function ConfigModal({
  entries,
  id,
}: {
  entries: IItem[];
  id: number;
}): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {entries.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.Type?.title}</TableCell>
                <TableCell>{item.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.buttons}>
      <InfoButton id={id} />
      <Button
            variant="contained"
            onClick={() => {
              navigate(`/configurator/${id}`);
            }}
            sx={{ ml: 2 }}
            size="small"
          >
            Изменить
          </Button>
    </div>
    </div>
  );
}
