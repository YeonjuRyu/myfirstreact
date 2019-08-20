import React from 'react';
import './BoardTemplate.css';
import Menu from './Topnav/Menu.js'
import Boardcontainer from './Middle/Middleleft/Boardcontainer.js';
import Mainimage from './Middle/Middleright/Mainimage.js';
import Button from './Middle/Middleright/Button';

class BoardTemplate extends React.Component{
    render(){
        return(
        <main id = "react-board">
            <div id = "topnav">
                <Menu id='left' menu='React board' />
                <Menu id='right' menu='로그인' />
                <Menu id='right' menu='사진' />
                <Menu id='right' menu='소개' />
                <Menu id='right' menu='게시글' />
            </div>
            <div id="middle">
                <div id='middle-left'>
                    <div id='middle-left-title'>
                        <h1>게시판</h1>
                    </div>
                    <div id='middle-left-boardlist'>
                    <Boardcontainer />
                    </div> 
                </div>
                <div id='middle-right'>
                    <Mainimage />
                </div>
            </div>
            <div id="footer">
                Copyright ⓒ Your Website 2019
            </div>
        </main>
        )
    }
}

export default BoardTemplate;