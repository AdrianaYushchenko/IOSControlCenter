import React, {useState} from 'react';
import {FocusButton, ChildContainer, Image} from "../../../../../styles/styles";

const Icon = ({image}) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <FocusButton style={isPressed ? {backgroundColor: "#F9A88A"} : {backgroundColor: "rgba(255,255,255,0.89)"}}
                onPress={() => setIsPressed(prev => !prev)}>
            <Image source={image}/>
        </FocusButton>
    );
};

export default Icon;