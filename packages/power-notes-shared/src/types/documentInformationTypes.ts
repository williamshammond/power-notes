export interface NoteInformation {
    readonly id: string;
    readonly name: string;
    readonly type: "NOTE";
}

export interface TodoInformation {
    readonly id: string;
    readonly name: string;
    readonly type: "TODO";
}

export interface JournalInformation {
    readonly id: string;
    readonly name: string;
    readonly type: "JOURNAL";
}

export type DocumentInformation =
    | NoteInformation
    | TodoInformation
    | JournalInformation;
