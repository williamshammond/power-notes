import {
    JournalInformation,
    NoteInformation,
    TodoInformation,
} from "./documentInformationTypes";

export interface FolderInformation {
    readonly id: string;
    readonly journals: ReadonlyArray<JournalInformation>;
    readonly name: string;
    readonly notes: ReadonlyArray<NoteInformation>;
    readonly subfolders: ReadonlyArray<FolderInformation>;
    readonly todos: ReadonlyArray<TodoInformation>;
}
