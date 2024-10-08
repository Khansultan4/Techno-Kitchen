import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',   //темно-серый, фон body
      paper: '#1e1e1e',     //серый
    },
    primary: {
      main: '#c0ff01',      // зеленый кислотный
    },
    secondary: {
      main: '#03dac6',      //сине-зеленый
    },
    text: {
      primary: '#ffffff',   //белый
      secondary: '#b0b0b0', //серо-белый текст   
      
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
