export const getFolderAllColumnsById =
    "SELECT * FROM public.folders WHERE id = $1::uuid";

export const getSubFoldersIdNameByParentId =
    "SELECT id, name FROM public.folders WHERE parentFolderId = $1";

export const getNotesIdNameByParentId =
    "SELECT id, name FROM public.notes WHERE parentFolderId = $1";

export const getTodosIdNameByParentId =
    "SELECT id, name FROM public.todos WHERE parentFolderId = $1";

export const getJournalsIdNameByParentId =
    "SELECT id, name FROM public.journals WHERE parentFolderId = $1";
