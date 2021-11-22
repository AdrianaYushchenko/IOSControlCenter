import React, {useContext, useState} from 'react';
import Slider from 'react-native-swipe-slider';
import {View, Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import UIContext from "../../../context/ui-context";

const VolumeMenu = ({style, setIconSlider}) => {
    const [value, setValue] = useState(50);
    const [iconSliderValue, setIconSliderValue] = useState(50);
    const ui = useContext(UIContext);
    const defaultStyle = style ? style : {
        width: 186,
        height: 75,
        top: 265,
        left: -110,
    };
    return (
        <Slider
            min={0}
            max={100}
            value={value}
            onChange={value => setIconSlider ? setIconSlider(value) : setIconSliderValue(value)}
            changeEventThrottle={100}
            style={{
                justifyContent: "center",
                transform: [{rotate: '-90deg'}],
                borderRadius: 22,
                ...defaultStyle
            }}
            backgroundColor={'rgb(170, 151, 142)'}
            barColor={'rgba(255,255,255,0.89)'}
            vertical
        >
            <Pressable onLongPress={() => {
                ui.setOpenMenu({type: 'volume', bool: true})
            }}>
                {!style && <Ionicons
                    style={{marginHorizontal: 16}}
                    name={iconSliderValue === 0 ? 'md-volume-off' : (iconSliderValue <= 50 ? 'md-volume-low' : 'md-volume-high')}
                    size={32}
                    color={'black'}
                />}
            </Pressable>
        </Slider>
    );
};

export default VolumeMenu;