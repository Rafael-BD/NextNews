'use client';
import { useEffect, useState } from "react";
import { getNews, NewsAPIResponse } from '@/utils/getNews';
import AllNews from "@/app/_components/allNews";
import { styled } from "styled-components";

type DecodedParams = {
    [key: string]: string;
}

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

const News = ({ params }: { params: { slug: string[] } }) => {
    const [news, setNews] = useState<NewsAPIResponse['articles'] | null>(null);
    const decodedParamsUrl: string[] = params.slug.map((entry: string) => decodeURIComponent(entry));
    const decodedParams: DecodedParams = {};

    decodedParamsUrl.forEach((entry: string) => {
        const [key, value] = entry.split('=');
        decodedParams[decodeURIComponent(key)] = decodeURIComponent(value);
    });

    useEffect(() => {
        (async () => {
            const newsFetched = await getNews({q: decodedParams.q, country: decodedParams.country, category: decodedParams.category, pageSize: 100});
            if(news == null && newsFetched.articles != null){
                setNews(newsFetched.articles);
            }       
        })();
    }, []);

    console.log(news);

    return news ? (
        <Container>
            <AllNews news={news} />
        </Container> 
    ): null;
}
  
export default News;
  