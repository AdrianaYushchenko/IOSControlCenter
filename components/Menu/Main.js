import React, {useContext} from 'react';
import {View} from "react-native";
import lock from "../../assets/icons/lock.png";
import copy from "../../assets/icons/copy.png";
import flashlight from "../../assets/icons/flashlight.png";
import calculator from "../../assets/icons/calculator.png";
import camera from "../../assets/icons/camera.png";
import battery from "../../assets/icons/battery.png";
import shazam from "../../assets/icons/shazam.png";
import alarm from "../../assets/icons/alarm-clock.png";
import {
    ParentContainer,
    SecondSectionContainer,
    Block,
    ThirdSectionContainer, FourthSectionContainer
} from "../../styles/styles";
import FocusMenu from "./FocusMenu/FocusMenu";
import UIContext from "../../context/ui-context";
import BrightnessMenu from "./BrightnessMenu/BrightnessMenu";
import {Slider} from "../../styles/styles";
import VolumeMenu from "./VolumeMenu/VolumeMenu";
import FocusMenuButton from "./FocusMenuButton/FocusMenuButton";
import Button from "../UI/Button/Button";
import FocusModal from "../Modals/FocusModal";
import FocusButtonModal from "../Modals/FocusButtonModal";
import BrightnessModal from "../Modals/BrightnessModal";

const Main = () => {
    const ui = useContext(UIContext);

    return (
        <View>
            {ui.openMenu.bool && ui.openMenu.type === 'four-icons' && <FocusModal/>}
            {ui.openMenu.bool && ui.openMenu.type === 'focus-menu' && <FocusButtonModal/>}
            {ui.openMenu.bool && ui.openMenu.type === 'brightness' && <BrightnessModal type={'brightness'}/>}
            {ui.openMenu.bool && ui.openMenu.type === 'volume' && <BrightnessModal type={'volume'}/>}
            {ui.openMenu.bool && ui.openMenu.type === 'light' && <BrightnessModal type={'light'}/>}
            <ParentContainer>
                <FocusMenu/>
                <FocusMenu type={'music'}/>
            </ParentContainer>
            <SecondSectionContainer>
                <View>
                    <Block>
                        <Button image={lock}/>
                        <Button image={copy}/>
                    </Block>
                    <FocusMenuButton/>
                </View>
                <Slider>
                    <BrightnessMenu/>
                    <VolumeMenu/>
                </Slider>
            </SecondSectionContainer>
            <ThirdSectionContainer>
                <Button type={'light'} image={flashlight}/>
                <Button image={calculator}/>
                <Button image={camera}/>
                <Button image={battery}/>
            </ThirdSectionContainer>
            <FourthSectionContainer>
                <Button image={shazam}/>
                <Button image={alarm}/>
                <Button image={lock}/>
                <Button image={lock}/>
            </FourthSectionContainer>
        </View>
    );
};

export default Main;