import React, { Component } from 'react';
import { CardContainer, Title }from './styled';
import Card from './../../components/Card';

class Deportes extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: false,
            data: []
        }
    }

    async componentDidMount(){
        const url = "https://api.canillitapp.com/news/category/5";
        this.setState({ isLoading: true });

        try{
            const response = await fetch(url);
            const data = await response.json();
    
            this.setState({ data: data.slice(0,10) });
            
        }catch(error){
            console.error(error);
        }finally{
            this.setState({ isLoading: false })
        }


    }

    render(){
        const { isLoading, data } = this.state;
        return(
            <div>
                <Title> Deportes </Title>
                <CardContainer>
                    { 
                        isLoading ? <img src="../../../assets/loading.gif" width="35px"/> : data.map( data => (
                            <a href={data.url}>
                                <Card title={ data.title} image={ data.img_url } source={ data.source_name }></Card>
                            </a>
                        ))
                    
                    }            
                </CardContainer>
            </div>
        )
    }

}

export default Deportes;