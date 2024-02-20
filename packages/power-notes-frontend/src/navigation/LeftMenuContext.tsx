import React from "react";

interface LeftMenuContext {
    readonly isLeftMenuOpen: boolean;
}

export const LeftMenuContext = React.createContext<LeftMenuContext>({
    isLeftMenuOpen: false,
});

export function useIsLeftMenuOpen() {
    return React.useContext(LeftMenuContext).isLeftMenuOpen;
}
