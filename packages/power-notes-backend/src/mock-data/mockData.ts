import {
    FolderDb,
    JournalDb,
    NoteDb,
    TodoDb,
} from "@power-notes/power-notes-shared";

export const MOCK_FOLDER_DATA: ReadonlyArray<FolderDb> = [
    {
        id: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
        name: "Personal",
        praentFolderId: null,
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
    },
    {
        id: "4e8dfeaa-5632-4cc3-9a84-8216f0cea8a2",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Business",
        praentFolderId: null,
    },
    {
        id: "26b2084a-f1ba-483f-bf33-2efd88e842d9",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Coding",
        praentFolderId: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
    },
    {
        id: "009df52c-a753-4888-b5f5-21bff186d23c",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Power Notes",
        praentFolderId: "26b2084a-f1ba-483f-bf33-2efd88e842d9",
    },
    {
        id: "b0d72bb3-1db6-429e-af50-ff2322a9ec98",
        userId: "730ea38e-993f-45f7-847a-3c3db81dedf0",
        name: "Typescript Tips",
        praentFolderId: "26b2084a-f1ba-483f-bf33-2efd88e842d9",
    },
];

export const MOCK_NOTES_DATA: ReadonlyArray<NoteDb> = [
    {
        content: "This is the content of note 1",
        id: "ba0aed9a-06d8-4f2b-b7a4-a41805d27301",
        name: "Note 1",
        parentFolderId: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
    },
    {
        content: "This is the content of note 2",
        id: "3f281600-ab80-4401-97b2-fb6bd8a9e830",
        name: "Note 2",
        parentFolderId: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
    },
    {
        content: "This is the content of note 3",
        id: "5bd05fe6-43f9-405b-b6dc-1ca5848bf3a1",
        name: "Note 3",
        parentFolderId: "009df52c-a753-4888-b5f5-21bff186d23c",
    },
];

export const MOCK_TODOS_DATA: ReadonlyArray<TodoDb> = [
    {
        content: "This is the content of todo 1",
        id: "4d3433fd-2403-4bea-b935-c77503f8c9e4",
        name: "Todo 1",
        parentFolderId: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
    },
    {
        content: "This is the content of todo 2",
        id: "14da486d-f1a5-4ca1-b1fe-21dc63a17c6b",
        name: "Todo 2",
        parentFolderId: "009df52c-a753-4888-b5f5-21bff186d23c",
    },
    {
        content: "This is the content of todo 3",
        id: "38feeedb-69ae-40c5-bea8-b3186cae1c39",
        name: "Todo 3",
        parentFolderId: "009df52c-a753-4888-b5f5-21bff186d23c",
    },
];

export const MOCK_JOURNALS_DATA: ReadonlyArray<JournalDb> = [
    {
        content: "This is the content of journal 1",
        id: "741d1581-f963-4d01-ae53-ffc647baf477",
        name: "Journal 1",
        parentFolderId: "f9f9af81-21ce-43de-9e20-6c55e7393eaa",
    },
    {
        content: "This is the content of journal 2",
        id: "dc190939-311b-4ffc-bfe5-78b1fb42a823",
        name: "Journal 2",
        parentFolderId: "4e8dfeaa-5632-4cc3-9a84-8216f0cea8a2",
    },
    {
        content: "This is the content of journal 3",
        id: "5bd05fe6-43f9-405b-b6dc-1ca5848bf3a1",
        name: "Journal 3",
        parentFolderId: "4e8dfeaa-5632-4cc3-9a84-8216f0cea8a2",
    },
];
