import React, {useState} from 'react';
import {FlashlightContainer, LightLevel} from "../../../styles/styles";

const Flashlight = () => {
    const arr = Array(4).fill([0, 1, 2, 3]);
    const [change, setChange] = useState(0);

    const styling = (i) => {
        let style;
        if(change >= i) {
            style = {backgroundColor: "#fff"}
        } else {
            style = {backgroundColor: "black"}
        }

        if(i === 0) {
            style = {...style, borderBottomLeftRadius: 20, borderBottomRightRadius: 20};
        }

        if(i === 3) {
            style = {...style, borderTopLeftRadius: 20, borderTopRightRadius: 20};
        }

        return style;
    }

    return (
        <FlashlightContainer>
            {arr.map((el, i) => <LightLevel key ={i}
                                            style={() => styling(i)}
                                            onPress={() => setChange(i)}/>).reverse()}
        </FlashlightContainer>
    );
};

export default Flashlight;