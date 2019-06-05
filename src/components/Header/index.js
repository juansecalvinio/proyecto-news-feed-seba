import React from 'react';

//components
import HeaderWrapper from './styled';
import Brand from '../Brand';
import InputSeacrh from '../InputSearch';
import SocialNetwork from '../SocialNetwork';


const Header = () => {
    return(
        <HeaderWrapper>
            <Brand />
            <InputSeacrh placeholder="Search" />
            <SocialNetwork />
        </HeaderWrapper>
    )
}

export default Header;