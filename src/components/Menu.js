import React from 'react';
import './Menu.css';

class Menu extends React.Component{
    render() {
        return <a className='Menu' href='#' id={this.props.id}>{this.props.menu}</a>
    }
}

export default Menu;