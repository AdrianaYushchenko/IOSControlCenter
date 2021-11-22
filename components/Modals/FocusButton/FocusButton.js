import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    FocusButtonModalContainer,
    FocusButtonModalInit,
    FocusButtonModalMore,
    FocusText,
    Image, MoreOption,
} from "../../../styles/styles";
import Icon from "../../Menu/FocusMenu/Icons/Icon/Icon";
import {Pressable} from "react-native";
import moreImg from "../../../assets/icons/more.png";
import UIContext from "../../../context/ui-context";
import moon from "../../../assets/icons/moon.png";
import {Animated} from "react-native";
import {View} from "react-native";

const FocusButton = ({text, more}) => {
    const ui = useContext(UIContext);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (ui.isFocusOpen.bool && ui.isFocusOpen.text !== text) {
            setOpenMenu(false);
        }
    }, [ui.isFocusOpen]);

    return (
        <FocusButtonModalContainer style={openMenu && {height: 260, paddingBottom: 20, zIndex: 3}} onLongPress={() => {
            setOpenMenu(prev => !prev);
            ui.setIsFocusOpen({bool: true, text})
        }}>
            <FocusButtonModalInit>
                <Icon image={moon}/>
                <FocusText style={{textAlign: "left"}}>{text}</FocusText>
                <Pressable style={!more && {opacity: 0}} onPress={() => {
                    setOpenMenu(prev => !prev);
                    ui.setIsFocusOpen({bool: true, text})
                }}>
                    <Image source={moreImg}/>
                </Pressable>
            </FocusButtonModalInit>
            <View style={{overflow: 'hidden'}}>
                {openMenu && (
                    <>
                        <FocusButtonModalMore onPress={() => {
                            setOpenMenu(false);
                        }}>
                            <MoreOption>For 1 hour</MoreOption>
                            <MoreOption>Until this evening</MoreOption>
                            <MoreOption>Until I leave this location</MoreOption>
                        </FocusButtonModalMore>
                        <FocusText style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontWeight: "normal",
                            color: "#E0E0E080"
                        }}>Settings</FocusText>
                    </>
                )}
            </View>

        </FocusButtonModalContainer>

    );
};

export default FocusButton;