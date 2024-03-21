import { FolderInformation } from "@power-notes/power-notes-shared";
import { LeftMenuFolder } from "../components/LeftMenuFolder";

export function displayFolder(
    folder: FolderInformation,
    layer: number
): JSX.Element {
    return <LeftMenuFolder folder={folder} layer={layer} />;
}
