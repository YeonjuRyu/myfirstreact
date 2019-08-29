//import modules
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//import js files for routing
import TopMenu from './components/header/TopMenu.js'
import Category from './components/main/menu/Category.js'
import MainImage from './components/main/contents/MainImage.js';
import PostSummary from './components/main/contents/PostSummary.js';
import Post from './components/main/contents/Post.js';
import PostWrite from './components/main/contents/PostWrite.js';
import PostDelete from './components/main/contents/PostDelete.js'
import PostModify from './components/main/contents/PostModify.js'
//서식
import './App.css';

class App extends React.Component{
    render(){
        return(
        <Router>
        <div>
          <div id = "react-board">
            <div id = "header"> 
                <TopMenu id='left' menu='React board'/>
                <TopMenu id='right' href='/login' menu='로그인' />
                <TopMenu id='right' href='/image' menu='사진' />
                <TopMenu id='right' href='/intro' menu='소개' />
                <TopMenu id='right' href='/posts' menu='게시글' />
            </div>
            <div id="main">
                <div id='menu'>
                    <div id='menu-header'>
                        <h1>게시판</h1>
                    </div>
                    <div id='menu-category'>
                    <Category />
                    </div> 
                </div>
                <div id='contents'>
                <Switch>
                <Route exact path='/' component={MainImage} />
                <Route exact path= '/board/:id' component={PostSummary}/>
                <Route exact path= '/post/:id' component={Post}/>
                <Route exact path= '/board/writepost/:id' component={PostWrite}/>
                <Route exact path= '/board/deletepost/:id' component={PostDelete}/>
                <Route exact path= '/board/modifypost/:id' component={PostModify}/>
                </Switch>
                </div>
            </div>
            <div id="footer">
                Copyright ⓒ Your Website 2019
            </div>
          </div>
        </div>
        </Router>
        )
    }
}

export default App;