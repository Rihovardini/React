import React, { PureComponent, Fragment } from 'react';

import '../styles/Main.css';


class Main extends PureComponent{

    constructor(){
        super();
        this.state={
            characters:null,
            nextUrl:null,
            prevUrl:null,
            loading:false
        }
        
        this.createElements = this.createElements.bind(this);
        this.getUserFromApi = this.getUserFromApi.bind(this);
    }

    componentDidMount(){
        this.getUserFromApi();
    }

    getUserFromApi(e){
        this.setState({loading:true});
        let typeOfLink;
        if(e){
            typeOfLink = e.currentTarget.textContent=="Next"?this.state.nextUrl:this.state.prevUrl;
        }
        fetch(typeOfLink || 'https://rickandmortyapi.com/api/character/')
            .then(data => data.json())
            .then(json => {
                this.setState({characters:json.results,nextUrl:json.info.next,prevUrl:json.info.prev,loading:false});
        })
    }

    createElements(){
        if(this.state.characters){
            return this.state.characters.map(el => {
                        return(
                            <div className="element" key={el.id}>
                                <img src={el.image} alt={el.name+" img"}/>
                                <h4>{el.name}</h4>
                            </div>
                        )
                    })
        }
    }

    render(){
        if(this.state.loading){
            return(
                <div className='lds-circle'></div>
            )
        }
        
        return(
            <Fragment>
                <div className='characters'>
                    {this.createElements()}
                </div>
                <button onClick={this.getUserFromApi}>Prev</button>
                <button onClick={this.getUserFromApi}>Next</button>
            </Fragment>
        )    
    }
}


export default Main;
