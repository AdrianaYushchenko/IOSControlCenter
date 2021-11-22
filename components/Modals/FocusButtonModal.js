import React, {useContext, useState} from 'react';
import UIContext from "../../context/ui-context";
import {
    FocusWindow,
} from "../../styles/styles";
import FocusButton from "./FocusButton/FocusButton";

const FocusButtonModal = () => {
    const ui = useContext(UIContext);
    return (
        <FocusWindow onPress={() => {
            ui.setOpenMenu({type: 'four-menu', bool: false})
        }}>
            <FocusButton text={'Do Not Disturb'} more={true}/>

            <FocusButton text={'Sleep'} more={true}/>

            <FocusButton text={'Personal'}/>

            <FocusButton text={'Work'}/>
        </FocusWindow>
    )
        ;
};

export default FocusButtonModal;