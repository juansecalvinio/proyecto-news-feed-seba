import React, { Component } from 'react';

//components
import { Logo, 
        SearchButton, 
        SearchInput, 
        HeaderWrapper, 
        InputWrapper, 
        SocialNetwork, 
        SocialNetworkItem 
    } from './styled';



class Header extends Component {
    constructor(){
        super()
        this.state = {
            key: ""
        }
    }

    handlerKeyChange = (e) => {
        this.setState({
            key: e.target.value
        })
    }

    render(){

        return(
            <HeaderWrapper>
                <Logo> <h1>NeewsFeeds</h1> </Logo>
                <InputWrapper>
                    <SearchInput type="text" placeholder="Buscar Noticias" value={ this.state.key } onChange={this.handlerKeyChange}/> 
                    <SearchButton href={`/search/${ this.state.key }`}><p>Buscar</p></SearchButton>
                </InputWrapper>
                <SocialNetwork>
                    <SocialNetworkItem><i className="fab fa-twitter"></i></SocialNetworkItem>
                    <SocialNetworkItem><i className="fab fa-twitter"></i></SocialNetworkItem>
                    <SocialNetworkItem><i className="fab fa-twitter"></i></SocialNetworkItem>
                </SocialNetwork>
            </HeaderWrapper>
        )
    }
}

export default Header;

