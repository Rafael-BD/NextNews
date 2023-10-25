import React, { useContext, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getNews, NewsAPIResponse } from '@/utils/getNews';
import { GridContainer, CardContainer, CardMediaContainer, Title, Text } from './allNews.styled';
import { CountryContext } from '../btnCountryChange';

interface AllNewsProps {
  news: NewsAPIResponse['articles'] | null;
}

const AllNews = ({ news }: AllNewsProps) => {
  const [News, setNews] = React.useState<NewsAPIResponse['articles'] | null>(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const { selectedCountry } = useContext(CountryContext);

  useEffect(() => {
      !news ? (async () => {
          const news = await getNews({country: selectedCountry, pageSize: 100});
          if(news.articles != null){
            news.articles.splice(0, 3);
            setNews(news.articles);
          }       
      })() : setNews(news);
  }, [selectedCountry]);

  return News ? (
    <GridContainer container spacing={3}>
      {News.map((news) => (
        <Grid item xs={6} sm={6} md={3} key={news.title}>
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

export default AllNews;
