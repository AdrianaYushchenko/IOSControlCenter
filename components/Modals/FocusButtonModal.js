import React, {useContext, useState} from 'react';
import UIContext from "../../context/ui-context";
import {
    FocusWindow,
} from "../../styles/styles";
import FocusButton from "./FocusButton/FocusButton";
import {Modal} from "react-native";

const FocusButtonModal = () => {
    const ui = useContext(UIContext);
    return (
        <Modal
            animationType="slide"
            style={{height: "100%"}}
        >
            <FocusWindow onPress={() => {
                ui.setOpenMenu({type: 'four-menu', bool: false})
            }}>

                <FocusButton text={'Do Not Disturb'} more={true}/>

                <FocusButton text={'Sleep'} more={true}/>

                <FocusButton text={'Personal'}/>

                <FocusButton text={'Work'}/>
            </FocusWindow>

        </Modal>
    )
        ;
};

export default FocusButtonModal;