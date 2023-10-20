'use client'
import React, { useState } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyles';
import  themes  from '../styles/Theme';
import HomePage from './home/page';

const index: NextPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { light, dark } = themes;

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyles />
            <button onClick={toggleTheme}>
                {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
            <HomePage />
        </ThemeProvider>
    );
};

export default index;
