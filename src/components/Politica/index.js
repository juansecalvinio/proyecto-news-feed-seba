import React, { Component } from 'react';
import Card from '../Card';
import { CardContainer, Title }from './styled';


class Politica extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            data: []
        }
    }

    async componentDidMount(){
        const url = "https://api.canillitapp.com/news/category/1";
        this.setState({ isLoading: true });

        try{
            const response = await fetch(url);
            const data = await response.json();
    
            this.setState({ data: data.slice(0,10) });
            console.log(this.state.data);
            
        }catch(error){
            console.log(error);
        }finally{
            this.setState({ isLoading: false })
        }


    }

    render(){
        const { isLoading, data } = this.state;
        
        console.log(data);

        return(
            <div>
                <Title> Politica </Title>
                <CardContainer>
                    { 
                        isLoading ? <p>cargando</p> : data.map( data => (
                            <Card title={ data.title} image={ data.img_url } source={ data.source_name } url={ data.url }></Card>
                        ))
                    
                    }            
                </CardContainer>
            </div>
        )
    }

}

export default Politica;