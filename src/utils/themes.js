import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'EuclidCircularB, EuclidCircularA'
    },
    palette: {
        primary: {
            main: '#042026'
        },
        secondary: {
            main: '#a49568'
        },
        text: {
            primary: '#28395a',
            secondary: '#a7aeba',
            accent: '#a49568',
        },
        background: {
            default: '#fafbfb',
            paper: '#ffffff',
            transparent: 'rgba(255,255,255,0.50)',
            top: '#02181e'
        },
        light: {
            secondary: 'rgba(164,149,104,0.3)',
            primary: 'rgba(40,57,90,0.1)'
        },
        mode: "light"
    },
    shape: {
        borderRadius: 2
    }
});

export const THEMES = {lightTheme};
