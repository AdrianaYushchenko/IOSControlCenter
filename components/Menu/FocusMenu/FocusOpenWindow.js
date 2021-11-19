import React, {useContext} from 'react';
import UIContext from "../../../context/ui-context";
import {Text} from "react-native";
import telegram from "../../../assets/icons/airplane-mode.png";
import {
    Button,
    ChildContainer,
    Container, FocusCell, FocusStatus,
    FocusText,
    FocusWindow,
    FocusWindowContainer,
    Image
} from "../../../styles/styles";
import Icons from "./Icons/Icons";
import Icon from "./Icons/Icon/Icon";
import {View} from "react-native";
import FocusMenu from "./FocusMenu";
import {Modal} from "react-native";

const FocusOpenWindow = () => {
    const ui = useContext(UIContext);
    return (
        <FocusWindow onPress={() => {
            ui.setOpenMenu(false)
        }}>
            {/*<Modal*/}
            {/*    animationType="slide"*/}
            {/*    transparent={true}*/}
            {/*    visible={ui.openMenu}*/}
            {/*    onBackdropPress={() => {*/}
            {/*        ui.setOpenMenu(false)*/}
            {/*    }}*/}
            {/*>*/}
                <FocusWindowContainer>
                    <ChildContainer>
                        <FocusCell>
                            <Icon/>
                            <FocusText>Airplane mode</FocusText>
                            <FocusStatus>Off</FocusStatus>
                        </FocusCell>
                        <FocusCell>
                            <Icon/>
                            <FocusText>Airplane mode</FocusText>
                            <FocusStatus>Off</FocusStatus>
                        </FocusCell>
                    </ChildContainer>
                    <ChildContainer>
                        <FocusCell>
                            <Icon/>
                            <FocusText>Airplane mode</FocusText>
                            <FocusStatus>Off</FocusStatus>
                        </FocusCell>
                        <FocusCell>
                            <Icon/>
                            <FocusText>Airplane mode</FocusText>
                            <FocusStatus>Off</FocusStatus>
                        </FocusCell>
                    </ChildContainer>
                    <ChildContainer>
                        <FocusCell>
                            <Icon/>
                            <FocusText>Airplane mode</FocusText>
                            <FocusStatus>Off</FocusStatus>
                        </FocusCell>
                        <FocusCell>
                            <Icon/>
                            <FocusText>Airplane mode</FocusText>
                            <FocusStatus>Off</FocusStatus>
                        </FocusCell>
                    </ChildContainer>
                </FocusWindowContainer>
            {/*</Modal>*/}
        </FocusWindow>
    )
        ;
};

export default FocusOpenWindow;