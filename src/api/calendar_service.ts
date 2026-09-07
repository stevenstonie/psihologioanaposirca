
export interface BusyRange {
  start: Date;
  end: Date;
}

const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;

export async function fetchBusyDates(): Promise<BusyRange[]> {
  const timeMin = new Date().toISOString();
  
  const ENDPOINT = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime`;

  const response = await fetch(ENDPOINT);
  if (!response.ok) throw new Error('Preluarea de date din calendar a eșuat.');
  
  const data = await response.json();
  
  return data.items.map((event: any) => ({
    start: new Date(event.start.dateTime || event.start.date),
    end: new Date(event.end.dateTime || event.end.date),
  }));
}