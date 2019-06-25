import React from 'react';
import dayjs from 'dayjs';
import { CardWrapper, CardImage, CardTitle, CardFooter } from './styled';

const Card = (props) => {
    return (
        <CardWrapper>
            <CardImage>
                <img src={ props.image }/>
            </CardImage> 
            <CardTitle>{ props.title }</CardTitle>    
            <CardFooter>{ props.source }</CardFooter>
        </CardWrapper>
    );
}

export default Card;