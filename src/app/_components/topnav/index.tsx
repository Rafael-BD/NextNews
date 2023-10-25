'use client'
import {Nav, Ul, Li, Title, SearchForm, SearchInput, SearchIcon, HomeBtn, CategoryBtn, } from './topnav.styled';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { use, useContext, useEffect, useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { CountryContext } from '../btnCountryChange';


const TopNav = () => {
    const wrapperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [search, setSearch] = useState('');
    const router = useRouter()
    const isSmallScreen = useMediaQuery('(max-width:768px)');
    const { selectedCountry } = useContext(CountryContext);
    
    const handleClick = () => {
        setAnchorEl(wrapperRef.current);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/news/q=${search}/country=${selectedCountry}`);
    };

     useEffect(() => {
        //console.log(search); // Adicionar recuperação de palavras-chave
    }, [search]);

    // useEffect(() => {
    //     console.log(selectedCountry);
    // }, [selectedCountry]);

    const wrapperStyle = {
        display: 'inline-block',
        margin: '0',
        padding: '0',
    };
    
    return (
        < >
            <Nav>
                <Ul>
                    <Li>
                        { !isSmallScreen ?<HomeBtn href={"/"}><Title>NextNews</Title></HomeBtn> : <HomeBtn href={"/"} className='material-symbols-outlined'>feed</HomeBtn>}
                    </Li>
                    <Li>
                        <SearchForm onSubmit={handleSubmit}>
                            <SearchInput onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" value={search} />
                            <SearchIcon type="submit" className="material-icons icon-search">search</SearchIcon>
                        </SearchForm>
                    </Li>
                    <Li>
                        <div ref={wrapperRef} style={wrapperStyle}>
                            <CategoryBtn
                                onClick={handleClick}
                                endIcon={<ExpandMoreIcon />}
                                variant="outlined"
                                aria-controls="category-menu"
                                aria-haspopup="true"
                            >
                                <Hidden smDown>
                                    Category
                                </Hidden>
                                {isSmallScreen && <MenuIcon />}
                            </CategoryBtn>
                        </div>
                        <Menu
                            id="category-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem value="all" onClick={handleClose}>
                                <Link href={"/news/country=" + selectedCountry} style={{textDecoration: "none"}}>
                                    All
                                </Link>
                            </MenuItem>
                            <MenuItem value="business" onClick={handleClose}>
                                <Link href={"/news/country="+selectedCountry+"/category=business"} style={{textDecoration: "none"}}>
                                    Business
                                </Link>
                            </MenuItem>
                            <MenuItem value="technology" onClick={handleClose}>
                                <Link href={"/news/country="+selectedCountry+"/category=technology"} style={{textDecoration: "none"}}>
                                    Technology
                                </Link>
                            </MenuItem>
                            <MenuItem value="health" onClick={handleClose}>
                                <Link href={"/news/country="+selectedCountry+"/category=health"} style={{textDecoration: "none"}}>
                                    Health
                                </Link>
                            </MenuItem>
                            <MenuItem value="entertainment" onClick={handleClose}>
                                <Link href={"/news/country="+selectedCountry+"/category=entertainment"} style={{textDecoration: "none"}}>
                                    Entertainment
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Li>
                </Ul>
            </Nav>
        </>
    );
};

export default TopNav;
