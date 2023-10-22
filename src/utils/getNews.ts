import axios from 'axios';

interface NewsAPIResponse {
    articles: {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        source: {
            name: string;
        };
    }[];
}

interface GetNewsParams {
    category?: string;
    keyword?: string;
    country?: string;
}

const API_KEY = process.env.NEXT_PUBLIC_KEY;

export const getNews = async (params: GetNewsParams): Promise<NewsAPIResponse> => {
    if (API_KEY === undefined) {
        console.error('API KEY não encontrada');
        return { articles: [] };
    }

    const { category, keyword, country } = params;
    const url = 'https://newsapi.org/v2/top-headlines';

    try {
        const response = await axios.get(url, {
            params: {
                apiKey: API_KEY,
                category,
                q: keyword,
                country,
            },
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao recuperar notícias');
    }
};

