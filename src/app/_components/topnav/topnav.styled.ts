import styled from 'styled-components';

const Nav = styled.nav`
    background-color: ${props => props.theme.Transparency};
    overflow: hidden;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    justify-content: center;
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

const CategorySelect = styled.select`
    background-color: transparent;
    color: ${props => props.theme.backgroundColor};
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
    appearance: none;
    padding: 0.3rem 0.5rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    &:focus {
        background-color: ${props => props.theme.Transparency};
    }

    option[hidden] {
    /* Estilo para a opção que exibirá o ícone */
    background-image: url('../../../assets/menu.svg'); /* Substitua pelo caminho correto da imagem */
    background-size: 20px 20px; /* Tamanho do ícone */
    background-repeat: no-repeat;
    padding-left: 30px; /* Espaçamento para exibir o ícone */
  }
`;


export { Nav, Ul, Li, P, Title, SearchForm, SearchInput, SearchIcon, CategorySelect };
