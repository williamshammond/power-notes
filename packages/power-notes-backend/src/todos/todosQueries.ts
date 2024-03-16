export const getNoteAllColumnsById =
    "SELECT * FROM public.todos WHERE id = $1::uuid";
