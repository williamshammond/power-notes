type FolderId = string;

export interface FolderContent {
    name: string;
    subfolders: FolderId[];
    noteIds: string[];
    todoIds: string[];
    journalIds: string[];
}
