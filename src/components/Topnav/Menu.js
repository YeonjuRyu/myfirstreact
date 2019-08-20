import React from 'react';
import './Menu.css';

class Menu extends React.Component{
    render() {
        return <a className='Menu' id={this.props.id} href='#'>{this.props.menu}</a>
    }
}

export default Menu;