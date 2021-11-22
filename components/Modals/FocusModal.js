import React, {useContext} from 'react';
import UIContext from "../../context/ui-context";
import {
    FocusWindow,
    FocusWindowContainer,
} from "../../styles/styles";
import ControlTap from "../ControlTap/ControlTap";
import {Modal} from "react-native";

const FocusModal = () => {
    const ui = useContext(UIContext);
    return (
        <Modal
            animationType="slide"
            style={{height: "100%"}}
        >
            <FocusWindow onPress={() => {
                ui.setOpenMenu({type: 'four-icons', bool: false})
            }}>
                <FocusWindowContainer>
                    <ControlTap/>
                    <ControlTap/>
                    <ControlTap/>
                </FocusWindowContainer>
            </FocusWindow>
        </Modal>
    )
        ;
};

export default FocusModal;