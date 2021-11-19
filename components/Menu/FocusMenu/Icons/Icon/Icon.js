import React from 'react';
import {Button, ChildContainer, Image} from "../../../../../styles/styles";
import telegram from "../../../../../assets/icons/airplane-mode.png";

const Icon = () => {
    return (
        <Button>
            <Image source={telegram}/>
        </Button>
    );
};

export default Icon;