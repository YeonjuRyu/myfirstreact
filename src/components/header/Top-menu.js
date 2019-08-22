import React from 'react';
import './Top-menu.css';
import {Link} from 'react-router-dom'

class Topmenu extends React.Component{
    render() {
        return <Link to ='/' className='Menu' id={this.props.id}>{this.props.menu}</Link>
    }
}

export default Topmenu;