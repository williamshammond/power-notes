import { prefixWithBaseUrl } from "../../core/utils/PrefixWithBaseUrl";
import { prefixWithBaseFoldersApiPath } from "../../core/utils/baseApiPrefixes";

export interface CreateFolderResponse {
    message: string;
    error?: string;
}

export async function createNewFolder(
    folderName: string,
    parentFolderId: string | undefined
): Promise<CreateFolderResponse> {
    const requestBody = {
        name: folderName,
        parentFolderId,
    };

    try {
        const response = await fetch(
            prefixWithBaseUrl(prefixWithBaseFoldersApiPath("folder")),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data: CreateFolderResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating folder:", error);
        throw new Error("Error creating folder");
    }
}
