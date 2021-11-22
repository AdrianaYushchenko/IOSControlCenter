import React, {useContext, useState} from 'react';
import {BrightnessModalButtons, FocusWindow} from "../../styles/styles";
import UIContext from "../../context/ui-context";
import BrightnessMenu from "../Menu/BrightnessMenu/BrightnessMenu";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ControlTap from "../ControlTap/ControlTap";
import VolumeMenu from "../Menu/VolumeMenu/VolumeMenu";
import Flashlight from "./Flashlight/Flashlight";
import {Modal} from "react-native";

const BrightnessModal = ({type}) => {
        const ui = useContext(UIContext);
        const style = {
            width: 310,
            height: 120,
            top: 216,
            left: 30,
            borderRadius: 40
        };
        const [iconSliderValue, setIconSliderValue] = useState(50);

        return (
            <Modal
                animationType="slide"
                style={{height: "100%"}}
            >
                <FocusWindow onPress={() => {
                    ui.setOpenMenu({type: 'brightness', bool: false})
                }}>
                    {type === 'brightness' && <><Ionicons
                        style={{top: 70, textAlign: "center", width: "100%"}}
                        name="sunny"
                        size={40}
                        color={'white'}
                    />
                        <BrightnessMenu style={style}/>
                        <ControlTap style={{top: 360}}/></>}
                    {type === 'volume' && <><Ionicons
                        style={{top: 70, textAlign: "center", width: "100%"}}
                        name={iconSliderValue === 0 ? 'md-volume-off' : (iconSliderValue <= 50 ? 'md-volume-low' : 'md-volume-high')}
                        size={40}
                        color={'white'}
                    />
                        <VolumeMenu style={style} setIconValue={setIconSliderValue}/>
                        <ControlTap style={{top: 360}}/></>}
                    {type === 'light' && <>
                        <MaterialCommunityIcons style={{top: 70, textAlign: "center", width: "100%"}} name="flashlight"
                                                size={40} color="white"/>
                        <Flashlight/>
                    </>}
                </FocusWindow>
            </Modal>
        )
            ;
    }
;

export default BrightnessModal;