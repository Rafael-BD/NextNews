import {Button, Menu} from "@mui/material/";
import ReactCountryFlag from "react-country-flag";
import { styled } from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 8rem;
    align-items: center;
    padding: 0 0.5rem;
    @media (max-width: 768px) {
        top: 4rem;
    }
`;

const StyledMenu = styled(Menu)`
    width: 6rem;
    max-height: 20rem;
`;

const StyledFlag = styled(ReactCountryFlag)`
    font-size: 1.5rem;
    box-shadow: 0 0 0.2rem ${props => props.theme.backgroundColor};

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const StyledButton = styled(Button)`
    padding: 0.5rem;
    background-color: ${props => props.theme.Transparency};

    @media (max-width: 768px) {
        padding: 0.3rem;
        width: 2rem;
    }
`;

export {Container, StyledMenu, StyledFlag, StyledButton};