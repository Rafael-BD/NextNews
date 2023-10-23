import Link from 'next/link';
import {Nav, Ul, Li, Title, SearchForm, SearchInput, SearchIcon, CategorySelect} from './topnav.styled';
import Image from 'next/image';


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
                        <option></option>
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
