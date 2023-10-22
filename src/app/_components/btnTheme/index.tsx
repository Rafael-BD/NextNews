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
`;


interface Props {
    onClick: () => void;
    theme: 'light' | 'dark';
}

const BtnTheme: React.FC<Props> = ({ onClick, theme }) => {
    return (
        <Button onClick={onClick}>
            <span className="material-symbols-outlined">
            {theme === 'light' ? 'light_mode' : 'dark_mode'}
            </span>
            
        </Button>
    );
};



export default BtnTheme;

