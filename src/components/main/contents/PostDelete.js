import React from 'react';
import { Link } from "react-router-dom";
import './PostSummary.css';

class PostDelete extends React.Component {

    constructor(props){
        super(props);

        this.state={
            post_list:[]
        };

        this.url = 'http://127.0.0.1:3000/board/postList/'

        this._isMounted = false;
    }

    getdata(url){
        fetch(url).then((res)=>{
            res.json().then((data=>{
                if(data.result="Ok"){
                    this.setState({post_list: data.postList})
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
                <ul id='post-summary'>
                    <form action="http://127.0.0.1:3000/deleted" method="POST">
                    <div id='title'>게시글</div>
                    {
                        this.state.post_list ?
                        this.state.post_list.map((item) =>
                        <li>
                            <input type="checkbox" name="postlist" value={item.id} ></input>
                            <Link to = {"/post/"+item.id}>{item.post_title}</Link>
                            <br></br><br></br>
                            <p> 등록일 : {item.post_reg_date} / IP: {item.post_reg_ip}</p>
                        </li>
                        )
                        :
                        <li></li>
                    }
                        <li>
                            <input type="submit" value="삭제 완료"></input>
                        </li>
                    </form>
                </ul>
            )
    }
}


export default PostDelete;