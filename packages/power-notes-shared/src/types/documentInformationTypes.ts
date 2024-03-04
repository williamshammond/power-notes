export interface NoteInformation {
    readonly id: string;
    readonly name: string;
    readonly type: "NOTE";
    readonly urlBase: "note";
}

export interface TodoInformation {
    readonly id: string;
    readonly name: string;
    readonly type: "TODO";
    readonly urlBase: "note";
}

export interface JournalInformation {
    readonly id: string;
    readonly name: string;
    readonly type: "JOURNAL";
    readonly urlBase: "note";
}

export type DocumentInformation =
    | NoteInformation
    | TodoInformation
    | JournalInformation;
