import styled from 'styled-components';

export const  CardWrapper = styled.div`
    border-radius: 5px;
    background: white;
    border: 1px solid #ededf0;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    transition: all ease 150ms;
    width: 100%;
`
export const CardImage = styled.div`
    margin: 0 auto;
    border-radius: inherit;

    img{
        border-radius: 5px 5px 0px 0px;
    }
`

export const CardTitle = styled.h2`
    text-align: center;
    padding: 30px;
`

export const CardFooter = styled.h3`
    text-align: center;
`