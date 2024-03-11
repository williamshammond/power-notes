import {
    FolderDb,
    JournalDb,
    NoteDb,
    TodoDb,
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

export const MOCK_TODOS_DATA: ReadonlyArray<TodoDb> = [
    {
        id: "4d3433fd-2403-4bea-b935-c77503f8c9e4",
        name: "Todo 1",
        content: "This is the content of todo 1",
    },
    {
        id: "14da486d-f1a5-4ca1-b1fe-21dc63a17c6b",
        name: "Todo 2",
        content: "This is the content of todo 2",
    },
    {
        id: "38feeedb-69ae-40c5-bea8-b3186cae1c39",
        name: "Todo 3",
        content: "This is the content of todo 3",
    },
];

export const MOCK_JOURNALS_DATA: ReadonlyArray<JournalDb> = [
    {
        id: "741d1581-f963-4d01-ae53-ffc647baf477",
        name: "Journal 1",
        content: "This is the content of journal 1",
    },
    {
        id: "dc190939-311b-4ffc-bfe5-78b1fb42a823",
        name: "Journal 2",
        content: "This is the content of journal 2",
    },
    {
        id: "5bd05fe6-43f9-405b-b6dc-1ca5848bf3a1",
        name: "Journal 3",
        content: "This is the content of journal 3",
    },
];
