import { CenteredAndDynamicWidthContent } from "../core/components/CenteredAndDynamicWidthContent";
import { MainSectionNavBoxes } from "../navigation/components/MainSectionNavBoxes";

export function HomePage() {
    return (
        <CenteredAndDynamicWidthContent
            centeredContent={<MainSectionNavBoxes />}
            dynamicContent={undefined}
        />
    );
}
