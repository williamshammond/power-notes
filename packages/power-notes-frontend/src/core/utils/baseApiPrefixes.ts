const BASE_FOLDERS_PATH = "folders/v1";
const BASE_JOURNALS_PATH = "journals/v1";
const BASE_NOTES_PATH = "notes/v1";
const BASE_TODOS_PATH = "todos/v1";

export function prefixWithBaseFoldersApiPath(path: string) {
    return `${BASE_FOLDERS_PATH}/${path}`;
}

export function prefixWithBaseJournalsApiPath(path: string) {
    return `${BASE_JOURNALS_PATH}/${path}`;
}

export function prefixWithBaseNotesApiPath(path: string) {
    return `${BASE_NOTES_PATH}/${path}`;
}

export function prefixWithBaseTodosApiPath(path: string) {
    return `${BASE_TODOS_PATH}/${path}`;
}
