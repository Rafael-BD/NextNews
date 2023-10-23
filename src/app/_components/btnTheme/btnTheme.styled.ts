import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.theme.tertiaryColor};
    color: ${(props) => props.theme.primaryColor};
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${(props) => props.theme.secondaryColor};
        color: ${(props) => props.theme.backgroundColor};
    }

    @media (max-width: 768px) {
        padding: 0.25rem 0.5rem;
    }
`;

export  {Button};