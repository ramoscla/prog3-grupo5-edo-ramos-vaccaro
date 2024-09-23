import React, { Component } from 'react';
import "./CardGrid.css"
import Card from '../Card/Card';

class CardGrid extends Component{
    constructor(props){
        super(props)

        
    }

    render(){
    
        return(
        <div className='movie-card'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>

        </div>
        )
    }};

    export default CardGrid; 