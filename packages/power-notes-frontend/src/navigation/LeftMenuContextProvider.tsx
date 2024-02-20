import { LeftMenuContext } from "./LeftMenuContext";

interface Props {
    readonly isLeftMenuOpen: boolean;
    readonly children: React.ReactNode;
}

export function LeftMenuContextProvider({ isLeftMenuOpen, children }: Props) {
    return (
        <LeftMenuContext.Provider value={{ isLeftMenuOpen }}>
            {children}
        </LeftMenuContext.Provider>
    );
}
