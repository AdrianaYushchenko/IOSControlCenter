import React from 'react';
import {Text, View} from "react-native";
import telegram from "../../../assets/icons/airplane-mode.png";
import {Button, ChildContainer, Container, Image} from "../../../styles/styles";

const FocusMenu = () => {
    return (
        <Container>
            <ChildContainer>
                <Button>
                    <Image source={telegram}/>
                </Button>

                <Button>
                    <Image source={telegram}/>
                </Button>
            </ChildContainer>

            <ChildContainer>
                <Button>
                    <Image source={telegram}/>
                </Button>

                <Button>
                    <Image source={telegram}/>
                </Button>
            </ChildContainer>
        </Container>
    )
        ;
};

export default FocusMenu;