export interface Article {
    id: string;
    title: string;
    shortDescription: string;
    date: string;
    category: string;
    authors: string;
    imageUrl: string;
    contents: string;
    wholeArticleUrl: string;
    isPublished: boolean;
}

const COLUMNS_TO_FETCH: string = 'A2:J';
const SHEET_NAME: string = 'Articolelele';

const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SPREADSHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!${COLUMNS_TO_FETCH}?key=${API_KEY}`;

export async function fetchArticles(): Promise<Article[]> {
    const response = await fetch(ENDPOINT);
    if (!response.ok) throw new Error('Failed to fetch articles');

    const data = await response.json();

    return data.values.map((row: string[]) => ({
        id: row[0] || '',
        title: row[1] || '',
        shortDescription: row[2] || '',
        date: row[3] || '',
        category: row[4] || '',
        authors: row[5] || '',
        imageUrl: row[6] || '',
        contents: row[7] || '',
        wholeArticleUrl: row[8] || '',
        isPublished: row[9] === 'Y',
    }));
}