import React from 'react';
import { InputWrapper, Input }  from './styled';
import SearchButton from '../SearchButton';


const InputSearch = () => {
    return(
        <InputWrapper>
            <Input placeholder="Search"/>
            <SearchButton><i class="fas fa-search"></i></SearchButton>
        </InputWrapper>
    )
}



export default InputSearch;