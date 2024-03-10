import {
    FolderDb,
    JournalContent,
    NoteDb,
    TodoContent,
} from "@power-notes/power-notes-shared";

export const MOCK_FOLDER_DATA: ReadonlyArray<FolderDb> = [
    {
        id: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Personal",
        subfolderIds: [],
        noteIds: [
            "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
            "3f281600-ab80-4401-97b2-fb6bd8a9e830",
        ],
        todoIds: [],
        journalIds: [],
    },
    {
        id: "4e8dfeaa-5632-4cc3-9a84-8216f0cea8a2",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Business",
        subfolderIds: [],
        noteIds: [],
        todoIds: [],
        journalIds: [],
    },
    {
        id: "26b2084a-f1ba-483f-bf33-2efd88e842d9",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Coding",
        subfolderIds: [],
        noteIds: [],
        todoIds: [],
        journalIds: [],
    },
];

export const MOCK_NOTES_DATA: ReadonlyArray<NoteDb> = [
    {
        id: "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
        name: "Note 1",
        content: "This is the content of note 1",
    },
    {
        id: "3f281600-ab80-4401-97b2-fb6bd8a9e830",
        name: "Note 2",
        content: "This is the content of note 2",
    },
    {
        id: "5bd05fe6-43f9-405b-b6dc-1ca5848bf3a1",
        name: "Note 3",
        content: "This is the content of note 3",
    },
];

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
                            type: "NOTE",
                            urlBase: "note",
                        },
                        {
                            id: "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
                            name: "Project Ideas",
                            type: "NOTE",
                            urlBase: "note",
                        },
                        {
                            id: "534c46fe-bac8-4acc-9dfb-bae6a55d155f",
                            name: "PostgreSQL Notes",
                            type: "NOTE",
                            urlBase: "note",
                        },
                    ],
                    todos: [
                        {
                            id: "37bac3ce-aab8-40de-86b9-9b727bc14a6f",
                            name: "Power Notes Project Plan",
                            type: "TODO",
                            urlBase: "todo",
                        },
                    ],
                    journals: [
                        {
                            id: "f56695ed-1b2c-496e-99e1-e98ec422ef96",
                            name: "Power Notes Project Plan",
                            type: "JOURNAL",
                            urlBase: "journal",
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
                    type: "NOTE",
                    urlBase: "note",
                },
                {
                    id: "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
                    name: "Project Ideas",
                    type: "NOTE",
                    urlBase: "note",
                },
                {
                    id: "534c46fe-bac8-4acc-9dfb-bae6a55d155f",
                    name: "PostgreSQL Notes",
                    type: "NOTE",
                    urlBase: "note",
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

export const MOCK_TODOS_DATA: { [id: string]: TodoContent } = {
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

export const MOCK_JOURNALS_DATA: { [id: string]: JournalContent } = {
    yK9gKwpbMgPL: {
        name: "Journal 1",
        content: {
            text: "This is the content of this journal",
            media: "Fill in later",
        },
    },
};
