import {
    JournalInformation,
    NoteInformation,
    TodoInformation,
} from "@power-notes/power-notes-shared";

export interface Folder {
    readonly id: string;
    readonly name: string;
    readonly subfolders: ReadonlyArray<Folder>;
    readonly notes: ReadonlyArray<NoteInformation>;
    readonly todos: ReadonlyArray<TodoInformation>;
    readonly journals: ReadonlyArray<JournalInformation>;
}

export interface FolderData {
    readonly folders: ReadonlyArray<Folder>;
}
