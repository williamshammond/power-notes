export const createFolderQuery =
    "INSERT INTO public.folders (id, name, parentFolderId, userId) VALUES ($1::uuid, $2, $3::uuid, $4::uuid)";

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

export const updateFolderNameById =
    "UPDATE public.folders SET name = $1 WHERE id = $2";
