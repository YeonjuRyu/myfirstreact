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

        this._isMounted = false;
    }

    componentDidMount(){
        this._isMounted = true;
        // TODO: ks: 변수명은 camel case를 사용하시거나, underscored variable을 사용하시든 어느 쪽이든 선택하심이 좋을 것 같습니다.
        // 가독성의 문제와 오해가 일어날 가능성을 줄이기 위해서 입니다.
        // parsedid는 parsed id로도 parse did로도 보일 수 있기 때문입니다.
        // 그런데, 사실 여기에서 parseInt() 등을 사용했다든지, 명확히 구분해서 parse한 것과 parse 하지 않은 것을 분리해서 처리해야 할 때엔
        // parsed id 로 명명하는 것은 좋습니다만. 사실 여기에서는 id 정도로만 하셔도 의미 전달은 충분히 될 것으로 보입니다.
        var parsedid = this.props.match.params.id;
        // TODO: ks: fetch문의 들여쓰기 정리해 주세요. 33라인에 })는 무엇에 대한 것인지 파악하기 쉽지 않습니다.
        // TODO: ks: 중복주소추출: 아래의 input에 들어가는 주소 경로는 별도의 상수로 추출하는 것이 좋습니다.
        // TODO: 아래의 fetch 문이 정확히 무엇을 하는지 이해하기 쉽지 않습니다. 별도의 method로 추출해 주시면, 의미 전달이 보다 명확하게 될 것입니다.
        fetch('http://127.0.0.1:3000/board/post/'+parsedid)
        .then((res)=>{res.json()
        .then((data)=>{this.setState({post: data.postDetail})
        })
      })
    }

    componentDidUpdate(){
        var parsedid = this.props.match.params.id;
        fetch('http://127.0.0.1:3000/board/post/'+parsedid)
        .then((res)=>{res.json()
        .then((data)=>{this.setState({post: data.postDetail})
        })
      })
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