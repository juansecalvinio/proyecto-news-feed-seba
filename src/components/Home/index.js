import React, { Component } from 'react';
import Card from '../Card';


class Home extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            data: []
        }
    }

    async componentDidMount(){
        const url = "https://api.canillitapp.com/trending/2017-04-08/2";
        this.setState({ isLoading: true });

        try{
            const response = await fetch(url);
            const data = await response.json();
    
            this.setState({ data });
            console.log(this.state.data);
            
        }catch(error){
            console.log(error);
        }finally{
            this.setState({ isLoading: false })
        }


    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <Card></Card>
            </div>
        )
    }

}

export default Home;