import React, { useState } from "react";

const UIContext = React.createContext({});

export const UIContextProvider = (props) => {
    const [openMenu, setOpenMenu] = useState({bool: false, type: ""});
    const [isFocusOpen, setIsFocusOpen] = useState({bool: false, text: ""});

    return (
        <UIContext.Provider
            value={{
                openMenu,
                setOpenMenu,
                isFocusOpen,
                setIsFocusOpen
            }}
        >
            {props.children}
        </UIContext.Provider>
    );
};

export default UIContext;
