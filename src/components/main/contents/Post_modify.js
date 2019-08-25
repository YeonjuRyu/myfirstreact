import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';
import Button from './Button.js'

class Post_modify extends React.Component{

    constructor(props){
        super(props);

        this.state={
            post:[]
        };

        this._isMounted = false;
    }

    componentDidMount(){
        this._isMounted = true;
        var parsedid = this.props.match.params.id;
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
            <table className="table table-bordered">
            <div>
              <div> 글 수정 </div>
            </div>
              <div id="posting">
                <form action={'http://127.0.0.1:3000/modified'} id="modify" method="POST" encType="multiplart/form-data">
                  <tr>
                    <th>제목: </th>
                      <td><input type="text" placeholder={this.state.post.post_title} name="post_title" className="form-control"/></td>
                  </tr>
                  <tr>
                    <th>내용: </th>
                      <td><textarea colSpan="10" placeholder={this.state.post.post_content} name="post_content" className="form-control"></textarea></td>
                      <input type="hidden" id="id" name="id" value={this.state.post.id}></input>
                      <input type="hidden" id="post_reg_ip" name="post_reg_ip" value={this.state.post.post_reg_ip}></input>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <input type="submit" value="수정 완료" className="pull-right"/>
                    </td>
                  </tr>
                </form>
              </div>
            </table>
        )
    }
}

export default Post_modify;