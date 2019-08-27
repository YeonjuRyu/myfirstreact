import React from 'react';
import Button from './Button.js';
import { Link } from "react-router-dom";
import './Post_summary.css';

// TODO: ks: Post_summary.js 파일에도 Post_summary 클래스가 있습니다. 이름 적절히 수정해 주세요.
// TODO: ks: Class 이름은 관습적으로 첫 글자가 대문자인 CamelCase를 사용합니다. PostSummary 정도로 수정하시면 좋을 것 같습니다.
// 보통 클래스명과 파일 이름이 동일하면 인지 부하가 적습니다.
class Post_summary extends React.Component {

    constructor(props){
        super(props);

        this.state={
            // TODO: ks: camel case or underscored
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
        // TODO: ks: fetch 실패했을 때에 대한 처리가 필요합니다. catch()를 사용해서 예외 상항을 잡아주세요.
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
                    <form action="http://127.0.0.1:3000/deleted" method="POST">
                    <div id='title'>게시글</div>
                    {
                        this.state.postlist ?
                        this.state.postlist.map((item) =>
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


export default Post_summary;