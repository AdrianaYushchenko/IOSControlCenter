import React, {useState} from 'react';
import Slider from 'react-native-swipe-slider';
import {Pressable, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from "react-native-web";

const BrightnessMenu = () => {
    const [value, setValue] = useState(50);
    const [iconSliderValue, setIconSliderValue] = useState(50);
    return (
        <Slider
            min={0}
            max={100}
            value={value}
            onChange={value => setValue(value)}
            changeEventThrottle={100}
            style={{
                justifyContent: "center",
                width: 200,
                height: 75,
                top: 270,
                left: 150,
                transform: [{rotate: '-90deg'}],
                borderRadius: 22
            }}
            backgroundColor={'rgba(47,47,47,0.78)'}
            barColor={'rgba(255,255,255,0.89)'}
            vertical
        >
            <Ionicons
                style={{marginHorizontal: 16}}
                name="sunny"
                size={32}
                color={'black'}
            />
        </Slider>
    );
};

export default BrightnessMenu;