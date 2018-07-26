import React, {Component} from 'react';
export class Header extends Component{
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }
    render(){
        return(<h1>Robodudles</h1>);
    }
    
}
