import {Nav, Ul, Li, Title, SearchForm, SearchInput, SearchIcon, HomeBtn, CategoryBtn, } from './topnav.styled';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { use, useEffect, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';



const TopNav = () => {
    const wrapperRef = useRef(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleClick = () => {
        setAnchorEl(wrapperRef.current);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const wrapperStyle = {
        display: 'inline-block',
        margin: '0',
        padding: '0',
    };
    
    return (
        <Nav>
            <Ul>
                <Li>
                    { !isSmallScreen ? <Title>NextNews</Title> : <HomeBtn className='material-symbols-outlined'>feed</HomeBtn>}
                </Li>
                <Li>
                    <SearchForm>
                        <SearchInput type="text" placeholder="Search" />
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
                            All
                        </MenuItem>
                        <MenuItem value="business" onClick={handleClose}>
                            Business
                        </MenuItem>
                        <MenuItem value="technology" onClick={handleClose}>
                            Technology
                        </MenuItem>
                        <MenuItem value="health" onClick={handleClose}>
                            Health
                        </MenuItem>
                        <MenuItem value="entertainment" onClick={handleClose}>
                            Entertainment
                        </MenuItem>
                    </Menu>
                </Li>
            </Ul>
        </Nav>
    );
};

export default TopNav;
