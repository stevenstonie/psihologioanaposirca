export interface Article {
    id: string;
    title: string;
    date: string;
    category: string;
    authors: string;
    imageUrl: string;
    contents: string;
    wholeArticleUrl: string;
    isPublished: boolean;
}

const COLUMNS_TO_FETCH: string = 'A2:I';
const SHEET_NAME: string = 'Articolelele';

const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SPREADSHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!${COLUMNS_TO_FETCH}?key=${API_KEY}`;

export async function fetchArticles(): Promise<Article[]> {
    const response = await fetch(ENDPOINT);
    if (!response.ok) throw new Error('Preluarea articolelor a eșuat');

    const data = await response.json();

    return data.values
        .filter((row: string[]) => row[8] === 'Y')
        .map((row: string[]) => ({
            id: row[0] || '',
            title: row[1] || '',
            date: row[2] || '',
            category: row[3] || '',
            authors: row[4] || '',
            imageUrl: row[5] || '',
            contents: row[6] || '',
            wholeArticleUrl: row[7] || '',
            isPublished: row[8] === 'Y',
        }));
}