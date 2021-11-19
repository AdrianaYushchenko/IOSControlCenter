import React from 'react';
import {Button, ChildContainer, Image} from "../../../../styles/styles";
import {View} from "react-native";
import telegram from "../../../../assets/icons/airplane-mode.png";
import Icon from "./Icon/Icon";

const Icons = () => {
    return (
        <ChildContainer>
            <Icon />

            <Icon />
        </ChildContainer>
    );
};

export default Icons;