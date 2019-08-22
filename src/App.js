//import modules
import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
//import js files for routing
import Topmenu from './components/header/Top-menu.js'
import Category from './components/main/menu/Category.js'
import Mainimage from './components/main/contents/Mainimage.js';
import Post_summary from './components/main/contents/Post_summary.js';
import Post from './components/main/contents/Post.js';
import Post_write from './components/main/contents/Post_write.js';
//서식
import './App.css';

class App extends React.Component{
    render(){
        return(
        <Router>
        <div>
          <div id = "react-board">
            <div id = "header"> 
                <Topmenu id='left' menu='React board'/>
                <Topmenu id='right' href='/login' menu='로그인' />
                <Topmenu id='right' href='/image' menu='사진' />
                <Topmenu id='right' href='/intro' menu='소개' />
                <Topmenu id='right' href='/posts' menu='게시글' />
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
                <Route exact path='/' component={Mainimage} />
                <Route exact path= '/board/:id' component={Post_summary}/>
                <Route exact path= '/post/:id' component={Post}/>
                <Route exact path= '/board/writepost/:id' component={Post_write}/>
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