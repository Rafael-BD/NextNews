'use client'
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyles';
import  themes  from '../styles/Theme';
import HomePage from './home/page';
import TopNav from './_components/topnav';
import BtnTheme from './_components/btnTheme';
import { getNews } from '@/utils/getNews';


const index: NextPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { light, dark } = themes;

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    };

    // Teste de chamada da API
    // useEffect(() => {
    //     (async () => {
    //         const news = await getNews({ country: 'br' });
    //         console.log(news);
    //     })();
    // }, []);
    

    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyles />
            <TopNav />
            <BtnTheme onClick={toggleTheme} theme={isDarkMode ? 'dark' : 'light'} />
            <HomePage />
        </ThemeProvider>
    );
};

export default index;
