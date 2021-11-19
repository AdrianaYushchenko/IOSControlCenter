import React, {useContext} from 'react';
import UIContext from "../../../context/ui-context";
import telegram from "../../../assets/icons/airplane-mode.png";
import {Button, ChildContainer, Container, Image} from "../../../styles/styles";
import Icons from "./Icons/Icons";

const FocusMenu = () => {
    const ui = useContext(UIContext);
    const arr = Array(4).fill({});
    return (
        <Container onLongPress={() => {
            ui.setOpenMenu(true)
        }}>
            <Icons/>

            <Icons />
        </Container>
    )
        ;
};

export default FocusMenu;