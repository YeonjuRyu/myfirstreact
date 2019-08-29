import React from 'react';
import './TopMenu.css';
import {Link} from 'react-router-dom'


class TopMenu extends React.Component{
    render() {
        return <Link to ='/' className='Menu' id={this.props.id}>{this.props.menu}</Link>
    }
}

export default TopMenu;