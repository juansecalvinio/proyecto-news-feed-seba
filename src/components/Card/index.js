import React from 'react';
import { CardWrapper, CardImage, CardTitle, CardFooter } from './styled';

const Card = (props) => {
    
    return(
        <CardWrapper>
            <CardImage>
                <img src={ props.image }/>
            </CardImage> 
            <CardTitle>
                <a href={ props.url }>
                    { props.title }
                </a>
            </CardTitle>    
            <CardFooter>{ props.source }</CardFooter>
        </CardWrapper>
    )
}

export default Card;