import React, {useContext, useState} from 'react';
import {ButtonContainer, Image} from "../../../styles/styles";
import UIContext from "../../../context/ui-context";

const Button = ({type, image}) => {
        const [isPressed, setIsPressed] = useState(false);
        const ui = useContext(UIContext);

        const style = () => {
            let style = {};
            if(isPressed){
                style = {backgroundColor: "#F9A88A"}
            } else {
                style = {backgroundColor: "#F3F3F3"};
            }

            if(type === "block") {
                style = {...style, marginTop: "auto", marginBottom: "auto", marginLeft: 10, marginRight: 10};
            }
            return style;
        }

        return (
            <ButtonContainer style={style()}
                             onPress={() => setIsPressed(prev => !prev)}
                             onLongPress={() => type === 'light' && ui.setOpenMenu({type: 'light', bool: true})}>
                <Image source={image}/>
            </ButtonContainer>
        );
    }
;

export default Button;