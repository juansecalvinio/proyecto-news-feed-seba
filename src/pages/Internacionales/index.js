import React, { Component } from 'react';
import Card from '../../components/Card';
import { CardContainer, Title }from './styled';


class Internacionales extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            data: []
        }
    }

    async componentDidMount(){
        const url = "https://api.canillitapp.com/news/category/2";
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
                <Title> Internacionales </Title>
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

export default Internacionales;