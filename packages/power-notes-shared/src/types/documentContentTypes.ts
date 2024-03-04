export interface SectionContent {
    readonly title: string;
    readonly content: string;
}

export interface NoteContent {
    readonly name: string;
    sections: ReadonlyArray<SectionContent>;
}

export interface TaskContent {
    readonly completed: boolean;
    readonly content?: string;
    readonly name: string;
    readonly subtasks?: ReadonlyArray<TaskContent>;
}

export interface TodoContent {
    readonly completed: boolean;
    readonly content?: string;
    readonly name: string;
    readonly tasks: ReadonlyArray<TaskContent>;
}

export interface JournalContent {
    readonly name: string;
    readonly content: {
        readonly text: string;
        readonly media: string;
    };
}
