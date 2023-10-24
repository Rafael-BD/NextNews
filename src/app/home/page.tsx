import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import TopNews from '../_components/topNews';
import AllNews from '../_components/allNews';
import Divider from '@mui/material/Divider';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-inline: 8rem;
    @media (max-width: 768px) {
        margin-top: 5rem;
        margin-inline: 0.5rem;
    }
    
`;

const DividerStyled = styled(Divider)`
    && {
        margin-top: 10rem;
        margin-bottom: 5rem;
   
        width: 100%;
        background-color: ${props => props.theme.Transparency};
    }
  `;

const HomePage: NextPage = () => {
    return (
        <Container>
            <TopNews />
            <DividerStyled/>
            <AllNews />
        </Container>
    );
};

export default HomePage;
