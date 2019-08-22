import React from 'react';
import './Button.css';

class Button extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <input type='button' id={this.props.id} value={this.props.value} ></input>
        )
    }
}

export default Button;