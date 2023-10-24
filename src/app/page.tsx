'use client'
import React, { useState } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyles';
import  themes  from '../styles/Theme';
import HomePage from './home/page';
import TopNav from './_components/topnav';
import BtnTheme from './_components/btnTheme';


const Index: NextPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { light, dark } = themes;

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyles />
            <TopNav />
            <BtnTheme onClick={toggleTheme} theme={isDarkMode ? 'dark' : 'light'} />
            <HomePage />
        </ThemeProvider>
    );
};

export default Index;
