import React, { useState } from "react";

const UIContext = React.createContext({
    openMenu: false,
    setOpenMenu: (bool) => {}
});

export const UIContextProvider = (props) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <UIContext.Provider
            value={{
                openMenu,
                setOpenMenu
            }}
        >
            {props.children}
        </UIContext.Provider>
    );
};

export default UIContext;
