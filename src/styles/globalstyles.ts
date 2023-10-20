import { createGlobalStyle } from 'styled-components';
  

export const GlobalStyles  = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    body {
        background-color: ${props => props.theme.backgroundColor};
        font-family: 'Roboto', sans-serif;
    };
    h1 {
        font-size: 2rem;
        color: ${props => props.theme.primaryColor};
    };
    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.secondaryColor};
    };
    h3, p {
        font-size: 1rem;
        color: ${props => props.theme.secondaryColor};
    };
    button {
        background-color: ${props => props.theme.Transparency};
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        color: ${props => props.theme.primaryColor};
        border: 1px solid ${props => props.theme.secondaryColor};
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    };
`;
