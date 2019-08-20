import React from 'react';

class Writebutton extends React.Component{
    render(){
        return <input type='button' id='button1' onclick='writepost()' value="글쓰기"></input>
    }
}

export default Writebutton;