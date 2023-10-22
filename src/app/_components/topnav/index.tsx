import Link from 'next/link';
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

const P = styled.p`
    display: block;
    color: ${props => props.theme.backgroundColor};
    text-align: center;
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: ${props => props.theme.backgroundColor};
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

    &:focus {
        background-color: ${props => props.theme.Transparency};
    }
`;

const TopNav = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <Title>NextNews</Title>
                </Li>
                <Li>
                    <SearchForm>
                        <SearchInput type="text" placeholder="Search" />
                        <SearchIcon type="submit" className="material-icons icon-search">search</SearchIcon>
                    </SearchForm>
                </Li>
                <Li>
                    <CategorySelect>
                        <option value="all">All Categories</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                        <option value="health">Health</option>
                        <option value="entertainment">Entertainment</option>
                    </CategorySelect>
                </Li>
            </Ul>
        </Nav>
    );
};

export default TopNav;
