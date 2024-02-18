import { LeftMenuContext } from "./LeftMenuContext";

interface Props {
    isLeftMenuOpen: boolean;
    children: React.ReactNode;
}

export function LeftMenuContextProvider({ isLeftMenuOpen, children }: Props) {
    return (
        <LeftMenuContext.Provider value={{ isLeftMenuOpen }}>
            {children}
        </LeftMenuContext.Provider>
    );
}
