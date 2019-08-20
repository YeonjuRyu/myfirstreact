import React from 'react';
import './Button.css';

class Button extends React.Component{

    constructor(props){

    }

    writepost(){
        var params = new URLSearchParams(document.location.search.substring(1));
        var parsedid = params.get("id")
        window.location.href="./writepost.html?id="+parsedid; //글쓰기 form 만든 이후 연결, 해당 게시판에 업로드해주기 위하여 id로 구분해줌
    }

    deletepost(){
        var params = new URLSearchParams(document.location.search.substring(1));
        var parsedid = params.get("id")
        window.location.href="./deletepost.html?id="+parsedid;
    }

    render(){
        return(
            <input type='button' id={this.props.id} value={this.props.value}></input>
        )
    }
}

export default Button;