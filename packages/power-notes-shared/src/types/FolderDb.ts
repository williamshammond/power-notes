type FolderId = string;

export interface FolderDb {
    id: string;
    userId: string;
    name: string;
    subfolderIds: FolderId[];
    noteIds: string[];
    todoIds: string[];
    journalIds: string[];
}
