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
  width: '200px',
  height: '40px', 
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

const ResultItem = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  maxHeight: 150,
  marginLeft:'15px',
  height: '40px', 
  width: '200px',
  display: 'flex',  
  alignItems: 'center', 
}));

export default function Navsearch() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const navigate: NavigateFunction = useNavigate();
  const [showResults, setShowResults] = useState(false);  

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    setSearchTerm(val);
    if (val.length > 2) {
      try {
        const res = await axiosInstance.get(`${import.meta.env.VITE_API}/build/search?query=${val}`);
        setResults(res.data);
        setShowResults(true); 
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
      setShowResults(false); 
    }
  };

  const handleMouseEnter = () => {
    setShowResults(true);
  };

  const handleMouseLeave = () => {
    setShowResults(false);
  };

  return (
    <>
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Поиск сборок…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={handleSearch}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        />
      </Search>
      {showResults && (
      <Paper style={{ position:'fixed',  maxWidth: 1500,maxHeight: 1000, overflow: 'auto' }}>
        {results.map((item: Result) => (
          <ResultItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={item.id}>
            <Typography
              onClick={() => navigate(`/Config/${item.id}`)}
              variant="body1"
            >
              {item.title}
            </Typography>
          </ResultItem>
        ))}
      </Paper>
          )}
      </div>
    </>
  );
}
