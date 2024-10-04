import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeEvent, useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance';
import { IItem } from '../../types/types';

import DropDown from './DropDown';
import EditModal from './EditModal';
import { Button, Pagination, Tooltip } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

export default function AdminTable() {
  const [items, setItems] = useState<IItem[]>([]);

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

  useEffect(() => {
    axiosInstance
      .get<IItem[]>(`${import.meta.env.VITE_API}/item/all`)
      .then((res) => setItems(res.data));
  }, []);

  console.log(items);

  return (
    <Paper>
      <TableContainer sx={{ mb: '20px' }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>image</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Specifications</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="right">Modify</StyledTableCell>
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
                <StyledTableCell align="center">{item.title}</StyledTableCell>
                <StyledTableCell align="center">
                  <Tooltip title={item.description} placement="top" arrow>
                    <div>
                      {item.description.length > 20
                        ? item.description.slice(0, 21) + '...'
                        : item.description}
                    </div>
                  </Tooltip>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <DropDown specifications={item.specifications} />
                </StyledTableCell>
                <StyledTableCell align="center">{item.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <Tooltip title="Edit Item">
                    <div>
                      <EditModal />
                    </div>
                  </Tooltip>
                  <Tooltip title="Delete this item">
                    <div>
                      <Button sx={{ mt: '10px' }}>
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
