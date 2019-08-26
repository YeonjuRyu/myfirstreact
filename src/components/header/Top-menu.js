import React from 'react';
import './Top-menu.css';
import {Link} from 'react-router-dom'

// TODO: 파일 이름은 Top-menu.js 클래스 이름은 Topmenu 입니다. 제 생각엔 TopMenu 정도로 수정해 주시면 좋을 것 같습니다.
class Topmenu extends React.Component{
    render() {
        return <Link to ='/' className='Menu' id={this.props.id}>{this.props.menu}</Link>
    }
}

export default Topmenu;