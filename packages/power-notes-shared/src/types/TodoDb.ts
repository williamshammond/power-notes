export interface TodoDb {
    readonly content: string;
    readonly id: string;
    readonly name: string;
    readonly parentFolderId: string;
}
