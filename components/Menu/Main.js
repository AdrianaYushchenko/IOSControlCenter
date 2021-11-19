import React, {useContext} from 'react';
import {Text, View} from "react-native";
import telegram from "../../assets/icons/airplane-mode.png";
import { Container, ParentContainer} from "../../styles/styles";
import FocusMenu from "./FocusMenu/FocusMenu";
import FocusOpenWindow from "./FocusMenu/FocusOpenWindow";
import UIContext from "../../context/ui-context";
import BrightnessMenu from "./BrightnessMenu/BrightnessMenu";
import {Slider} from "../../styles/styles";
import VolumeMenu from "./VolumeMenu/VolumeMenu";

const Main = () => {
    const ui = useContext(UIContext);
    console.log("ui", ui)

    return (
        <View>
            {ui.openMenu && <FocusOpenWindow/>}
            <ParentContainer>
                <FocusMenu/>
                <FocusMenu/>
            </ParentContainer>
            <Slider>
                <BrightnessMenu />
                <VolumeMenu />
            </Slider>
        </View>
    )
        ;
};

export default Main;