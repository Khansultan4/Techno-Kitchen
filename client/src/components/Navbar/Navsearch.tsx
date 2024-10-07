import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import axiosInstance from '../../../axiosInstance';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Result } from '../../types/types';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResultItem = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
}));

export default function Navsearch() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const navigate: NavigateFunction = useNavigate();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    setSearchTerm(val);

    if (val.length > 2) {
      try {
        const res = await axiosInstance.get<Result[]>(`${import.meta.env.VITE_API}/build/search?query=${val}`);
        setResults(res.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={handleSearch}
        />
      </Search>
      <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
        {results.length > 0 ? (
          results.map((item: Result) => (
            <ResultItem key={item.id}>
              <Typography onClick={() => navigate(`/Config/${item.id}`)} variant="body1">{item.title}</Typography>
            </ResultItem>
          ))
        ) : (
          <Typography variant="body1" style={{ padding: '16px', textAlign: 'center' }}>
            Нет результатов
          </Typography>
        )}
      </Paper>
    </>
  );
}