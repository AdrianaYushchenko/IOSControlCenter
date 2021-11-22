import React, {useContext, useState} from 'react';
import {ButtonContainer, Image} from "../../../styles/styles";
import UIContext from "../../../context/ui-context";

const Button = ({type, image}) => {
        const [isPressed, setIsPressed] = useState(false);
        const ui = useContext(UIContext);
        return (
            <ButtonContainer style={isPressed ? {backgroundColor: "#F9A88A"} : {backgroundColor: "#F3F3F3"}}
                             onPress={() => setIsPressed(prev => !prev)}
                             onLongPress={() => type === 'light' && ui.setOpenMenu({type: 'light', bool: true})}>
                <Image source={image}/>
            </ButtonContainer>
        );
    }
;

export default Button;