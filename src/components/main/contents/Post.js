import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';
import Button from './Button.js'

class Post extends React.Component{

    constructor(props){
        super(props);

        this.state={
            post:[]
        };

        this.url = 'http://127.0.0.1:3000/board/post/'

        this._isMounted = false;

    }
 
    getdata(url){
        fetch(url).then((res)=>{
            res.json().then((data=>{
                if(data.result="Ok"){
                    this.setState({post: data.postDetail})
                }
                else if(data.result == "fail"){
                    alert('error! reason is: ' + data.error)
                }
            }))
        })
    }

    componentDidMount(){
        this._isMounted = true;
        var parsed_id = this.props.match.params.id;
        const url = this.url +parsed_id
        this.getdata(url)
    }

    componentDidUpdate(){
        var parsed_id = this.props.match.params.id;
        const url = this.url +parsed_id
        this.getdata(url)
    }

    componentWillUnmount() {
        this._isMounted = false;
     }

    render(){
        return(
                <div id='post'>
                    {
                        <ul>
                            <li>
                                <p id='post_title'>{this.state.post.post_title}</p>
                            </li>
                            <li>
                                <p id='post_user_name'>{this.state.post.post_user_name}</p>
                            </li>
                            <li>
                                <p id='post_reg_date'>{this.state.post.post_reg_date}</p>
                            </li>
                            <li>
                                <p id='post_content'>{this.state.post.post_content}</p>
                            </li>
                            <li>
                                <p id='post_reg_ip'></p>
                            </li>
                            <li>
                                <Link to ={'/board/modifypost/'+this.props.match.params.id}><Button id='button3' value='글 수정'/></Link>
                            </li>
                        </ul>
                    }
                </div>
        )
    }
}


export default Post;