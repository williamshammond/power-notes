export const MOCK_USER_DATA = {
    folders: ["QfsoXeQwUlfK", "wEg6Bmc1Q3Xk", "mqLxjuT0X2Pg"],
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

export const MOCK_NOTES_DATA = {
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

export const MOCK_TODOs_DATA = {
    oCoI28TsuAZw: {
        name: "Todo List 1",
        tasks: {
            subtasks: [{ name: "Subtask 1", completed: false }],
        },
        content: "This is the content of section 1",
    },
};

export const MOCK_JOURNALS_DATA = {
    yK9gKwpbMgPL: {
        name: "Journal 1",
        content: {
            text: "This is the content of this journal",
            media: "Fill in later",
        },
    },
};
