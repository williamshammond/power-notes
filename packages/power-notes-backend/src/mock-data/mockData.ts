export const MOCK_USER_DATA = {
    folders: ["QfsoXeQwUlfK", "wEg6Bmc1Q3Xk", "mqLxjuT0X2Pg"],
};

export const MOCK_FULL_FOLDER_DATA = {
    folders: [
        {
            id: "f3607562-26fc-4750-a063-7886b2bc069b",
            name: "Personal",
            subfolders: [
                {
                    id: "8ad170ff-eba3-4deb-8499-69e3a115559a",
                    name: "Coding",
                    subfolders: [],
                    notes: [
                        {
                            id: "17b423f7-a6de-454a-81b7-4ab165fc8128",
                            name: "Typescript Notes",
                        },
                        {
                            id: "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
                            name: "Project Ideas",
                        },
                        {
                            id: "534c46fe-bac8-4acc-9dfb-bae6a55d155f",
                            name: "PostgreSQL Notes",
                        },
                    ],
                    todos: [
                        {
                            id: "37bac3ce-aab8-40de-86b9-9b727bc14a6f",
                            name: "Power Notes Project Plan",
                        },
                    ],
                    journals: [
                        {
                            id: "f56695ed-1b2c-496e-99e1-e98ec422ef96",
                            name: "Power Notes Project Plan",
                        },
                    ],
                },
                {
                    id: "d335918d-1d21-4b97-8a39-5d19142424cc",
                    name: "Health and fitness",
                    subfolders: [
                        {
                            id: "7ae7e1d7-367a-4491-b3f4-8cdaa65de854",
                            name: "Cardio and Weightlifting",
                            subfolders: [
                                {
                                    id: "af4663fd-2991-4561-9981-8580ea64397a",
                                    name: "Health and fitness",
                                    subfolders: [
                                        {
                                            id: "32ddf30e-be1d-4c0b-8486-ad3110c13261",
                                            name: "Health and fitness",
                                            subfolders: [
                                                {
                                                    id: "10674a0b-5168-4173-96bb-6725afc2baf0",
                                                    name: "Health and fitness",
                                                    subfolders: [],
                                                    notes: [],
                                                    todos: [],
                                                    journals: [],
                                                },
                                            ],
                                            notes: [],
                                            todos: [],
                                            journals: [],
                                        },
                                        {
                                            id: "4ee036d6-2060-4ec9-a024-7bb7bf0bcc11",
                                            name: "Health and fitness",
                                            subfolders: [],
                                            notes: [],
                                            todos: [],
                                            journals: [],
                                        },
                                        {
                                            id: "8c399372-4f53-4a8c-a394-ea0f6fbaaa57",
                                            name: "Health and fitness",
                                            subfolders: [],
                                            notes: [],
                                            todos: [],
                                            journals: [],
                                        },
                                    ],
                                    notes: [],
                                    todos: [],
                                    journals: [],
                                },
                            ],
                            notes: [],
                            todos: [],
                            journals: [],
                        },
                        {
                            id: "f393be88-7588-49de-ac11-9c9cb8c4c0db",
                            name: "Nutrition",
                            subfolders: [
                                {
                                    id: "5c477a8a-8fa5-4b54-8a13-a64f1adf6643",
                                    name: "Nutrition",
                                    subfolders: [],
                                    notes: [],
                                    todos: [],
                                    journals: [],
                                },
                                {
                                    id: "e30f9811-c6e0-4046-b08c-8f99a966b9c3",
                                    name: "Nutrition",
                                    subfolders: [],
                                    notes: [],
                                    todos: [],
                                    journals: [],
                                },
                            ],
                            notes: [],
                            todos: [],
                            journals: [],
                        },
                    ],
                    notes: [],
                    todos: [],
                    journals: [],
                },
            ],
            notes: [
                {
                    id: "17b423f7-a6de-454a-81b7-4ab165fc8128",
                    name: "Typescript Notes",
                },
                {
                    id: "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
                    name: "Project Ideas",
                },
                {
                    id: "534c46fe-bac8-4acc-9dfb-bae6a55d155f",
                    name: "PostgreSQL Notes",
                },
            ],
            todos: [],
            journals: [],
        },
        {
            id: "ffe08823-9891-49e3-b675-ad2301a64fbc",
            name: "Business",
            subfolders: [],
            notes: [],
            todos: [],
            journals: [],
        },
        {
            id: "aa63aee4-0ffa-4572-9bbf-7bf43c4298f3",
            name: "Friends and Family",
            subfolders: [],
            notes: [],
            todos: [],
            journals: [],
        },
    ],
    page: 1,
};

type FolderId = string;

interface Folder {
    name: string;
    subfolders: FolderId[];
    noteIds: string[];
    todoIds: string[];
    journalIds: string[];
}

export const MOCK_FOLDERS_DATA: { [id: string]: Folder } = {
    QfsoXeQwUlfK: {
        name: "Personal",
        subfolders: ["imnA4Mgvq4Wt", "DpGNi1fWsHyx"],
        noteIds: ["Lq6WNY1cmDNz"],
        todoIds: [],
        journalIds: [],
    },
    wEg6Bmc1Q3Xk: {
        name: "Business",
        subfolders: [],
        noteIds: [],
        todoIds: [],
        journalIds: [],
    },
    mqLxjuT0X2Pg: {
        name: "Folder 3",
        subfolders: ["Oyn99JHPcTBe"],
        noteIds: [],
        todoIds: [],
        journalIds: [],
    },
    imnA4Mgvq4Wt: {
        name: "Folder 3",
        subfolders: [],
        noteIds: ["Qqn1cxbMmcvh"],
        todoIds: [],
        journalIds: [],
    },
    DpGNi1fWsHyx: {
        name: "Folder 3",
        subfolders: [],
        noteIds: [],
        todoIds: [],
        journalIds: [],
    },
    Oyn99JHPcTBe: {
        name: "Folder 3",
        subfolders: [],
        noteIds: [],
        todoIds: [],
        journalIds: [],
    },
};

interface Section {
    readonly title: string;
    readonly content: string;
}

interface Note {
    readonly name: string;
    readonly sections: ReadonlyArray<Section>;
}

export const MOCK_NOTES_DATA: { [id: string]: Note } = {
    Lq6WNY1cmDNz: {
        name: "Note 1",
        sections: [
            {
                title: "Section 1",
                content: "This is the content of section 1",
            },
            {
                title: "Section 2",
                content: "This is the content of section 2",
            },
        ],
    },
    Qqn1cxbMmcvh: {
        name: "Note 2",
        sections: [
            {
                title: "Section 1",
                content: "This is the content of section 1",
            },
        ],
    },
    ZiOFG60hBJ8d: {
        name: "Note 1",
        sections: [
            {
                title: "Section 1",
                content: "This is the content of section 1",
            },
        ],
    },
};

interface Task {
    readonly completed: boolean;
    readonly content?: string;
    readonly name: string;
    readonly subtasks?: ReadonlyArray<Task>;
}

interface Todo {
    readonly completed: boolean;
    readonly content?: string;
    readonly name: string;
    readonly tasks: ReadonlyArray<Task>;
}

export const MOCK_TODOS_DATA: { [id: string]: Todo } = {
    oCoI28TsuAZw: {
        name: "Todo List 1",
        tasks: [
            {
                name: "Task 1",
                subtasks: [{ name: "Subtask 1", completed: false }],
                completed: false,
            },
        ],
        content: "This is the content of section 1",
        completed: false,
    },
};

interface Journal {
    readonly name: string;
    readonly content: {
        readonly text: string;
        readonly media: string;
    };
}

export const MOCK_JOURNALS_DATA: { [id: string]: Journal } = {
    yK9gKwpbMgPL: {
        name: "Journal 1",
        content: {
            text: "This is the content of this journal",
            media: "Fill in later",
        },
    },
};
