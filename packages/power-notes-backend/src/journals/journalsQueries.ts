export const getJournalAllColumnsById =
    "SELECT * FROM public.journals WHERE id = $1::uuid";
