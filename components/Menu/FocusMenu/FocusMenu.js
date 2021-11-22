import React, {useContext} from 'react';
import UIContext from "../../../context/ui-context";
import {Container, FocusText, Image, MusicPlayerContainer, PlayerText} from "../../../styles/styles";
import Icons from "./Icons/Icons";
import wifi from "../../../assets/icons/wifi.png";
import bluetooth from "../../../assets/icons/bluetooth-signal.png";
import signal from "../../../assets/icons/antenna.png";
import airplane from "../../../assets/icons/airplane-mode.png";
import {MusicPlayer} from "../../../styles/styles";
import play from "../../../assets/icons/play.png";
import back from "../../../assets/icons/back.png";

const FocusMenu = ({type}) => {
        const ui = useContext(UIContext);
        return (
            <Container onLongPress={() => {
                ui.setOpenMenu({type: 'four-icons', bool: true})
            }}>
                {type === 'music' ? <MusicPlayer>
                    <PlayerText>Not Playing</PlayerText>
                    <MusicPlayerContainer>
                        <Image source={back} />
                        <Image source={play} />
                        <Image style={{transform: [{rotate: '180deg'}]}} source={back} /></MusicPlayerContainer>
                    </MusicPlayer>
                    : <><Icons icons={[airplane, signal]}/>

                        <Icons icons={[wifi, bluetooth]}/></>}
            </Container>
        );
    }
;

export default FocusMenu;