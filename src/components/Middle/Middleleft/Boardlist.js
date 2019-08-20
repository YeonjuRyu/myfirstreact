import React from 'react';
import './Boardlist.css';

class Boardlist extends React.Component{
 
    render(){
        return(
            <a>{this.props.boardlist}</a>
        );
    }
};

export default Boardlist;