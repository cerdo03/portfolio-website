import React from "react";

export const ActiveSectionContext = React.createContext({
    activeSection: "",
    setActiveSection: (_: string) => {},
});