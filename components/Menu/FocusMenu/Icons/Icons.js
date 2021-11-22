import React from 'react';
import { ChildContainer} from "../../../../styles/styles";
import Icon from "./Icon/Icon";

const Icons = ({icons}) => {
    return (
        <ChildContainer>
            {icons.map(el => <Icon key={el} image={el} />)}
        </ChildContainer>
    );
};

export default Icons;