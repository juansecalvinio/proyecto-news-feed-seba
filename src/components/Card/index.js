import React from 'react';

import { CardWrapper, CardImage, CardTitle, Cardfooter, CardFooter } from './styled';

const Card = () => {
    return(
        <CardWrapper>
            <CardImage>
                <img src="https://images.clarin.com/2017/04/04/Hkv4HT8pe_600x338.jpg"/>
            </CardImage> 
            <CardTitle>Este es un titulo</CardTitle>
            <CardFooter> 19:50 | Clarin </CardFooter>
        </CardWrapper>
    )
}

export default Card;