
export interface BusyRange {
  start: Date;
  end: Date;
}

const now = new Date();
const timeMin = now.toISOString();

const future = new Date();
future.setMonth(now.getMonth() + 3);
const timeMax = future.toISOString();

const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;

const ENDPOINT = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=2500`;

export async function fetchBusyDates(): Promise<BusyRange[]> {

  const response = await fetch(ENDPOINT);
  if (!response.ok) throw new Error('Preluarea de date din calendar a eșuat.');
  
  const data = await response.json();
  const items = data.items || [];
  
  return items.map((event: any) => ({
    start: new Date(event.start.dateTime || event.start.date),
    end: new Date(event.end.dateTime || event.end.date),
  }));
}