import React, {useContext} from 'react';
import UIContext from "../../context/ui-context";
import {
    FocusWindow,
    FocusWindowContainer,
} from "../../styles/styles";
import ControlTap from "../ControlTap/ControlTap";

const FocusModal = () => {
    const ui = useContext(UIContext);
    return (
        <FocusWindow onPress={() => {
            ui.setOpenMenu({type: 'four-icons', bool: false})
        }}>
                <FocusWindowContainer>
                    <ControlTap />
                    <ControlTap />
                    <ControlTap />
                </FocusWindowContainer>
        </FocusWindow>
    )
        ;
};

export default FocusModal;