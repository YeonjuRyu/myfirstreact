import React from 'react';
import Menu from './Menu.js';
import './BoardTemplate.css';
import  Boardcontainer from './Boardcontainer.js';

const BoardTemplate = ({form}) => {
    return (
        <main id = "react-board">
            <div id = "topnav">
                <Menu id='left' menu="React board"/>
                <Menu id='right' menu="게시글"/>
                <Menu id='right' menu="사진" /> 
                <Menu id='right' menu="로그인" /> 
            </div>
            <div id="middle">
                <div id='middle-left'>
                    <h1>게시판</h1>
                    <Boardcontainer/>
                </div>
                <div id='middle-right'></div>
            </div>
            <div id="footer">
                Copyright ⓒ Your Website 2019
            </div>
        </main>
    )
}

export default BoardTemplate;