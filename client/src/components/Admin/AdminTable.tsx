import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { IItem, IType } from '../../types/types';
import ArticleIcon from '@mui/icons-material/Article';
import DropDown from './DropDown';
import EditModal from './EditModal';
import { Box, Button, Pagination, Tooltip } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
import axiosInstance from '../../../axiosInstance';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type AdminTableProps = {
  types: IType[];
  items: IItem[];
  setItems: Dispatch<SetStateAction<IItem[]>>;
};

export default function AdminTable({
  types,
  items,
  setItems,
}: AdminTableProps) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pageCount = Math.ceil(items.length / rowsPerPage);

  const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedItems = items.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const onDeleteItem = async (id: number): Promise<void> => {
    try {
      if (confirm('Do you really want to delete this item?')) {
        const response = await axiosInstance.delete(
          `${import.meta.env.VITE_API}/admin/delete/${id}`
        );

        if (response.status === 200) {
          setItems((prev) =>
            prev.filter((item) => item.id !== response.data.id)
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper>
      <TableContainer sx={{ mb: '20px' }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>№</StyledTableCell>
              <StyledTableCell>Изображение</StyledTableCell>
              <StyledTableCell align="left">Описание</StyledTableCell>
              <StyledTableCell align="left">Наименование</StyledTableCell>
              <StyledTableCell align="left">Спецификации</StyledTableCell>
              <StyledTableCell align="left">Цена</StyledTableCell>
              <StyledTableCell align="right">Инструменты</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedItems.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <img
                    width="80px"
                    height="80px"
                    src={
                      item.image.includes('uploads')
                        ? `${import.meta.env.VITE_BASE_URL}${item.image}`
                        : item.image
                    }
                    alt="image"
                  />
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  sx={{ minWidth: '100px', maxWidth: '350px' }}
                >
                  <Tooltip title={item.description} placement="top" arrow>
                    <Box color="text.secondary">
                      {item.description.length > 500
                        ? item.description.slice(0, 21) + '...'
                        : item.description}
                    </Box>
                  </Tooltip>
                </StyledTableCell>
                <StyledTableCell align="left">{item.title}</StyledTableCell>
                <StyledTableCell align="center">
                  <DropDown specifications={item.specifications} />
                </StyledTableCell>
                <StyledTableCell align="left">
                  {item.price}{' '}
                  <strong>
                    <i>₽</i>
                  </strong>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Tooltip title="Edit Item">
                    <div>
                      <EditModal
                        setItems={setItems}
                        types={types}
                        id={item.id}
                      />
                    </div>
                  </Tooltip>
                  <Tooltip title="Delete this item">
                    <div>
                      <Button
                        onClick={() => onDeleteItem(item.id)}
                        sx={{ mt: '10px' }}
                      >
                        <DeleteForeverOutlined />
                      </Button>
                    </div>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          padding: '20px',
        }}
      />
    </Paper>
  );
}
