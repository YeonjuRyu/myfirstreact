import React from 'react';
import Button from './Button.js';
import { Link } from "react-router-dom";
import './Post_summary.css';

class Post_summary extends React.Component {

    constructor(props){
        super(props);

        this.state={
            postlist:[]
        };

        this._isMounted = false;
    }

    componentDidMount(){
        this._isMounted = true;
        var parsedid = this.props.match.params.id;
        fetch('http://127.0.0.1:3000/board/postList/'+parsedid)
        .then((res)=>{res.json()
        .then((data)=>{this.setState({postlist: data.postList})
        })
      }) 
    }

    componentDidUpdate(){
        var parsedid = this.props.match.params.id;
        fetch('http://127.0.0.1:3000/board/postList/'+parsedid)
        .then((res)=>{res.json()
        .then((data)=>{this.setState({postlist: data.postList})
        })
      })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render(){
            return(
                <ul id='post-summary'>
                    <div id='title'>게시글</div>
                    {
                        this.state.postlist ?
                        this.state.postlist.map((item) =>
                        <li>
                            <Link to = {"/post/"+item.id}>{item.post_title}</Link>
                            <br></br><br></br>
                            <p> 등록일 : {item.post_reg_date} / IP: {item.post_reg_ip}</p>
                        </li>
                        )
                        :
                        <li></li>
                    }
                        <li>
                            <Link to = {'/board/writepost/'+this.props.match.params.id}><Button id='button1' value='글쓰기'/></Link>
                            <Link to = {'/board/deletepost/'+this.props.match.params.id}><Button id='button2' value='삭제'/></Link>
                        </li>
                    
                </ul>
            )
    }
}


export default Post_summary;