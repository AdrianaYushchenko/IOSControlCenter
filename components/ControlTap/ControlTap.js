import React from 'react';
import {ChildContainer, FocusCell, FocusStatus, FocusText} from "../../styles/styles";
import Icon from "../Menu/FocusMenu/Icons/Icon/Icon";
import wifi from "../../assets/icons/wifi.png";
import airplane from "../../assets/icons/airplane-mode.png";

const ControlTap = ({style}) => {
    return (
        <ChildContainer style={style && {...style}}>
            <FocusCell>
                <Icon image={airplane}/>
                <FocusText>Airplane mode</FocusText>
                <FocusStatus>Off</FocusStatus>
            </FocusCell>
            <FocusCell>
                <Icon image={wifi}/>
                <FocusText>Airplane mode</FocusText>
                <FocusStatus>Off</FocusStatus>
            </FocusCell>
        </ChildContainer>
    );
};

export default ControlTap;