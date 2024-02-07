import { createContext, useEffect, useState } from "react";

export const SideBarContext = createContext();

const SideBarContextProvider = ({ children }) => {

    const [sideBar, setSideBar] = useState(false);
    useEffect(() => {
        if (sideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [sideBar]);

    return (
        <SideBarContext.Provider value={{ sideBar, setSideBar }}>
            {children}
        </SideBarContext.Provider>
    )
}
export default SideBarContextProvider;