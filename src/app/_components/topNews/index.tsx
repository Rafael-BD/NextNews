'use client'
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getNews, NewsAPIResponse } from '@/utils/getNews';
import { GridContainer, CardContainer, CardMediaContainer, Title, Text } from './topNews.styled';

const TopNews = () => {
  const [featuredNews, setFeaturedNews] = React.useState<NewsAPIResponse['articles'] | null>(null);
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  useEffect(() => {
      (async () => {
          const news = await getNews({country: 'us', pageSize: 3});
          if(featuredNews == null && news.articles != null){
            setFeaturedNews(news.articles);
          }       
      })();
  }, []);

  return featuredNews ? (
    <GridContainer container spacing={2}>
      {featuredNews.map((news) => (
        <Grid item xs={6} sm={6} md={4} key={news.title}>
          <CardContainer>
            <CardContent 
              sx={{ 
                padding: '0.1rem',
              }}
            >
              <Link href={news.url} target="_blank" rel="noopener" underline="none">
                <CardMediaContainer 
                  component="img" 
                  image={news.urlToImage != null ? news.urlToImage : 'https://static.todamateria.com.br/upload/ge/ne/genero-textual-noticia-og.jpg'} 
                  alt={news.title} 
                />
                <Title>
                  {news.title}
                </Title>
                {(!isSmallScreen && news.description != null) ? <Text>{news.description}</Text> : <Text>{news.author} - {new Date(news.publishedAt).toLocaleDateString()}</Text>}
              </Link>
            </CardContent>
          </CardContainer>
        </Grid>
      ))}
    </GridContainer>
  ) : null;
};

export default TopNews;
