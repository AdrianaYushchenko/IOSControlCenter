import React, {useContext} from 'react';
import UIContext from "../../../context/ui-context";
import {FocusMenuButtonContainer, FocusMenuButtonInit} from "../../../styles/styles";
import {FocusText} from "../../../styles/styles";
import Icon from "../FocusMenu/Icons/Icon/Icon";
import moon from "../../../assets/icons/moon.png";

const FocusMenuButton = () => {
    const ui = useContext(UIContext);
    return (
        <FocusMenuButtonContainer onPress={() => ui.setOpenMenu({type: 'focus-menu', bool: true})}>
            <FocusMenuButtonInit>
                <Icon image={moon}/>
                <FocusText style={{marginLeft: 10}}>Focus</FocusText>
            </FocusMenuButtonInit>
        </FocusMenuButtonContainer>
    );
};

export default FocusMenuButton;