
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212', // Dark background
            paper: '#1e1e1e', // Dark paper background
        },
        primary: {
            main: '#bb86fc', // Primary color
        },
        secondary: {
            main: '#03dac6', // Secondary color
        },
        text: {
            primary: '#ffffff', // Text color
            secondary: '#b0b0b0', // Secondary text color
        },
    },
});


createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App />
    </ThemeProvider>
)
