import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../api/sheet_service";
import { fetchBusyDates } from "../api/calendar_service";

export function queryForArticles() {
    return useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
        staleTime: 5 * 60 * 1000,
    });
}

export function queryForCalendar() {
    return useQuery({
        queryKey: ['calendar-availability'],
        queryFn: fetchBusyDates,
        staleTime: 1 * 60 * 1000,
    })
}