import React from 'react';
import {Text, View} from "react-native";
import telegram from "../../assets/icons/airplane-mode.png";
import {Container, ParentContainer} from "../../styles/styles";
import FocusMenu from "./FocusMenu/FocusMenu";

const Main = () => {
    return (
        <ParentContainer>
            <FocusMenu/>
            <FocusMenu />
        </ParentContainer>
    )
        ;
};

export default Main;