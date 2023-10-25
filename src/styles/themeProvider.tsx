'use client'
import React, { ReactNode, useState } from "react";
import themes from "./Theme";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalstyles';
import BtnTheme from "@/app/_components/btnTheme";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider_ = ({ children }: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { light, dark } = themes;

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyles />
            <BtnTheme onClick={toggleTheme} theme={isDarkMode ? 'dark' : 'light'} />
            {children}
        </ThemeProvider>  
    );

};

export default ThemeProvider_;


