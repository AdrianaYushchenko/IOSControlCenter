import React, {useState} from 'react';
import {Button, ChildContainer, Image} from "../../../../../styles/styles";
import telegram from "../../../../../assets/icons/airplane-mode.png";

const Icon = () => {
    const [isPressed, setIsPressed] = useState(false);

    //background-color: rgba(255,255,255,0.89);
    return (
        <Button style={isPressed ? {backgroundColor: "#76A9FCFF"} : {backgroundColor: "rgba(255,255,255,0.89)"}}
                onPress={() => setIsPressed(prev => !prev)}>
            <Image source={telegram}/>
        </Button>
    );
};

export default Icon;