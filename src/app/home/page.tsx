import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`;

const Title = styled.h1`
    flex: 0 1 100%;
    text-align: center;
    padding: 0.5rem;
`;

const Paragraph = styled.p`
    flex: 1;
    margin: 0.3rem;
`;


const HomePage: NextPage = () => {
    return (
        <Container>
            <Title>NextNews</Title>
            <p>This is a simple example of a Next.js page with TypeScript.</p>
        </Container>
    );
};

export default HomePage;
