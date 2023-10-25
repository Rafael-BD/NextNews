import { Button } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: ${props => props.theme.Transparency};
    overflow: hidden;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    justify-content: center;
    padding: 0.5rem;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Li = styled.li`
    flex: 1;
    margin-left: 1rem;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: ${props => props.theme.backgroundColor};
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const P = styled.p`
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchInput = styled.input`
    padding: 0.3rem 0.5rem;
    border: none;
    border-bottom: 1px solid ${props => props.theme.tertiaryColor};
    font-size: 1rem;
    background-color: transparent;
    color: ${props => props.theme.backgroundColor};
    outline: none;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        width: 8rem;
    }
`;

const SearchIcon = styled.button`
    font-size: 1.3rem;
    color: ${props => props.theme.backgroundColor};
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    margin-left: 1rem;
`;

const CategoryBtn = styled(Button)`
    color:${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.tertiaryColor};
    &:hover {
        background-color: ${props => props.theme.tertiaryColor};
        color: ${props => props.theme.backgroundColor};
    }
    padding: 0.1rem 0.3rem;
    margin-right: 1rem;
`;

    const HomeBtn = styled(Link)`
    font-size: 1.8rem;
    color: ${props => props.theme.backgroundColor};
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    float: left;
    box-shadow: none;
    text-decoration: none;

`;



export { Nav, Ul, Li, P, Title, SearchForm, SearchInput, SearchIcon, CategoryBtn, HomeBtn };
