'use client'
import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react';
import { MenuItem } from '@mui/material/';
import { Container, StyledButton, StyledFlag, StyledMenu } from './btnCountryChange.styled';

interface Props {
    selectedCountry: string;
    setSelectedCountry: (countryCode: string) => void;
}

const CountryChangeButton: React.FC<Props> = ({setSelectedCountry, selectedCountry}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const countries = [
        "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu",
        "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in",
        "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz",
        "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "sk", "th", "tr",
        "tw", "ua", "us", "ve", "za"
    ];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        handleClose();
    }, [selectedCountry]);

    return (
            <Container>
                <StyledButton aria-controls="country-menu" aria-haspopup="true" onClick={handleClick}>
                    <StyledFlag style={{width: "1"}} svg countryCode={selectedCountry} />
                </StyledButton>
                <StyledMenu
                    id="country-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {countries.map((countryCode) => (
                        <MenuItem key={countryCode} onClick={() => setSelectedCountry(countryCode)}>
                            <StyledFlag style={{width: "1"}} svg countryCode={countryCode.toUpperCase()} />
                        </MenuItem>
                    ))}
                </StyledMenu>
            </Container>
    );
};

const CountryContext = createContext<Props>({
    selectedCountry: "us",
    setSelectedCountry: () => null,
});

const CountryProvider = ({ children }: { children: ReactNode }) => {
    const [ selectedCountry, setSelectedCountry ] = useState("us");

    return (
        <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
            <CountryChangeButton selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
            {children}
        </CountryContext.Provider>
    );
}

export { CountryProvider, CountryChangeButton, CountryContext};
